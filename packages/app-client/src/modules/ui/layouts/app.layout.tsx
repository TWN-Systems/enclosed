import { authStore } from '@/modules/auth/auth.store';
import { buildTimeConfig } from '@/modules/config/config.constants';
import { getConfig } from '@/modules/config/config.provider';
import { buildDocUrl } from '@/modules/docs/docs.models';
import { useI18n } from '@/modules/i18n/i18n.provider';
import { useNoteContext } from '@/modules/notes/notes.context';
import { cn } from '@/modules/shared/style/cn';
import { useThemeStore } from '@/modules/theme/theme.store';
import { Button } from '@/modules/ui/components/button';
import { Logo } from '@/modules/ui/components/logo';
import { DropdownMenu } from '@kobalte/core/dropdown-menu';

import { A, useNavigate } from '@solidjs/router';
import { type Component, type ParentComponent, Show } from 'solid-js';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../components/dropdown-menu';

const ThemeSwitcher: Component = () => {
  const themeStore = useThemeStore();
  const { t } = useI18n();

  return (
    <>
      <DropdownMenuItem onClick={() => themeStore.setColorMode({ mode: 'light' })} class="flex items-center gap-2 cursor-pointer">
        <div class="i-tabler-sun text-lg"></div>
        {t('navbar.theme.light-mode')}
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => themeStore.setColorMode({ mode: 'dark' })} class="flex items-center gap-2 cursor-pointer">
        <div class="i-tabler-moon text-lg"></div>
        {t('navbar.theme.dark-mode')}
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => themeStore.setColorMode({ mode: 'system' })} class="flex items-center gap-2 cursor-pointer">
        <div class="i-tabler-device-laptop text-lg"></div>
        {t('navbar.theme.system-mode')}
      </DropdownMenuItem>
    </>
  );
};

const LanguageSwitcher: Component = () => {
  const { t, getLocale, setLocale, locales } = useI18n();
  const languageName = new Intl.DisplayNames(getLocale(), {
    type: 'language',
    languageDisplay: 'standard',
  });

  return (
    <>
      {locales.map(locale => (
        <DropdownMenuItem onClick={() => setLocale(locale.key)} class={cn('cursor-pointer', { 'font-bold': getLocale() === locale.key })}>
          <span translate="no" lang={getLocale() === locale.key ? undefined : locale.key}>
            {locale.name}
          </span>
          <Show when={getLocale() !== locale.key}>
            <span class="text-muted-foreground pl-1">
              (
              {languageName.of(locale.key)}
              )
            </span>
          </Show>
        </DropdownMenuItem>
      ))}

      <DropdownMenuSeparator />

      <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" rel="noopener noreferrer" href="https://github.com/TWN-Systems/enclosed/tree/main/packages/app-client/src/locales">
        {t('navbar.settings.contribute-to-i18n')}
        <div class="i-tabler-external-link text-lg text-muted-foreground"></div>
      </DropdownMenuItem>
    </>
  );
};

export const Navbar: Component = () => {
  const themeStore = useThemeStore();
  const { triggerResetNoteForm } = useNoteContext();
  const navigate = useNavigate();
  const { t } = useI18n();

  const config = getConfig();

  const newNoteClicked = () => {
    triggerResetNoteForm();
    navigate('/');
  };

  // Only show the "New Note" button if the user is authenticated or if authentication is not required
  const getShouldShowNewNoteButton = () => config.isAuthenticationRequired ? authStore.getIsAuthenticated() : true;

  return (
    <div class="border-b border-border bg-surface">
      <div class="flex items-center justify-between px-6 py-3 mx-auto max-w-1200px">
        <div class="flex items-baseline gap-4">
          <Button variant="link" class="text-lg font-semibold border-b border-transparent hover:(no-underline !border-border) h-auto py-0 px-1 ml--1 rounded-none !transition-border-color-250" onClick={newNoteClicked} aria-label={t('app.title')}>
            <Logo class="h-6 w-auto" />
          </Button>

          <span class="text-muted-foreground hidden sm:block">
            {t('app.description')}
          </span>
        </div>

        <div class="flex gap-2 items-center">

          {getShouldShowNewNoteButton() && (
            <Button variant="secondary" onClick={newNoteClicked}>
              <div class="i-tabler-plus mr-1 text-muted-foreground"></div>
              {t('navbar.new-note')}
            </Button>
          )}

          <Button variant="ghost" class="text-lg px-0 size-9 hidden md:inline-flex" as={A} href="https://github.com/TWN-Systems/enclosed" target="_blank" rel="noopener noreferrer" aria-label={t('navbar.github-repository')}>
            <div class="i-tabler-brand-github"></div>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger as={Button} class="text-lg px-0 size-9 hidden md:inline-flex" variant="ghost" aria-label={t('navbar.change-theme')}>
              <div classList={{ 'i-tabler-moon': themeStore.getColorMode() === 'dark', 'i-tabler-sun': themeStore.getColorMode() === 'light' }}></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-42">
              <ThemeSwitcher />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger as={Button} class="text-lg px-0 size-9 hidden md:inline-flex" variant="ghost" aria-label={t('navbar.language')}>
              <div class="i-custom-language size-4"></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <LanguageSwitcher />
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>

            <DropdownMenuTrigger as={Button} class="text-lg px-0 size-9" variant="ghost" aria-label={t('navbar.menu-icon')}>
              <div class="i-tabler-dots-vertical hidden md:block"></div>
              <div class="i-tabler-menu-2 block md:hidden"></div>
            </DropdownMenuTrigger>

            <DropdownMenuContent class="w-46">

              {/* Mobile only items */}
              <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer md:hidden" target="_blank" href="https://github.com/TWN-Systems/enclosed" rel="noopener noreferrer">
                <div class="i-tabler-brand-github text-lg"></div>
                {t('navbar.github')}
              </DropdownMenuItem>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger as="a" class="flex items-center gap-2 md:hidden" aria-label={t('navbar.change-theme')}>
                  <div class="text-lg" classList={{ 'i-tabler-moon': themeStore.getColorMode() === 'dark', 'i-tabler-sun': themeStore.getColorMode() === 'light' }}></div>
                  {t('navbar.theme.theme')}
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent>
                  <ThemeSwitcher />
                </DropdownMenuSubContent>

              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger as="a" class="flex items-center text-medium gap-2 md:hidden" aria-label={t('navbar.change-language')}>
                  <div class="i-custom-language size-4"></div>
                  {t('navbar.language')}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <LanguageSwitcher />
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Default items */}
              <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://www.twn.it.com/" rel="noopener noreferrer">
                <div class="i-tabler-building text-lg"></div>
                {t('navbar.settings.twn-it')}
              </DropdownMenuItem>

              <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://learning.twn.systems/" rel="noopener noreferrer">
                <div class="i-tabler-school text-lg"></div>
                {t('navbar.settings.learning-platform')}
              </DropdownMenuItem>

              <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://twn.trustshare.com/home" rel="noopener noreferrer">
                <div class="i-tabler-shield-check text-lg"></div>
                {t('navbar.settings.trust-centre')}
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem as={A} class="flex items-center gap-2 cursor-pointer" href="/about">
                <div class="i-tabler-info-circle text-lg"></div>
                {t('navbar.settings.about')}
              </DropdownMenuItem>

              <DropdownMenuItem as={A} class="flex items-center gap-2 cursor-pointer" href="/privacy">
                <div class="i-tabler-lock text-lg"></div>
                {t('navbar.settings.privacy')}
              </DropdownMenuItem>

              <DropdownMenuItem as={A} class="flex items-center gap-2 cursor-pointer" href="/terms">
                <div class="i-tabler-file-certificate text-lg"></div>
                {t('navbar.settings.terms')}
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem as="a" class="flex items-center gap-2 cursor-pointer" target="_blank" href="https://github.com/TWN-Systems/enclosed/issues/new/choose" rel="noopener noreferrer">
                <div class="i-tabler-bug text-lg"></div>
                {t('navbar.settings.report-bug')}
              </DropdownMenuItem>

              {config.isAuthenticationRequired && authStore.getIsAuthenticated() && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem class="flex items-center gap-2 cursor-pointer" onClick={() => authStore.logout()}>
                    <div class="i-tabler-logout text-lg"></div>
                    {t('navbar.settings.logout')}
                  </DropdownMenuItem>
                </>
              )}

            </DropdownMenuContent>

          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export const Footer: Component = () => {
  const { t } = useI18n();

  return (
    <div class="bg-surface border-t border-border py-6 px-6 text-muted-foreground">
      <div class="max-w-1200px mx-auto">
        <div class="text-center mb-4">
          {t('footer.hosted-by')}
        </div>

        <div class="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          <Button variant="link" as="a" href="https://www.twn.it.com/" target="_blank" rel="noopener noreferrer" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
            {t('footer.twn-it')}
          </Button>
          <Button variant="link" as="a" href="https://learning.twn.systems/" target="_blank" rel="noopener noreferrer" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
            {t('footer.learning-platform')}
          </Button>
          <Button variant="link" as="a" href="https://twn.trustshare.com/home" target="_blank" rel="noopener noreferrer" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
            {t('footer.trust-centre')}
          </Button>
          <Button variant="link" as="a" href="/about" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
            {t('footer.about')}
          </Button>
          <Button variant="link" as="a" href="/privacy" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
            {t('footer.privacy')}
          </Button>
          <Button variant="link" as="a" href="/terms" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
            {t('footer.terms')}
          </Button>
          <Button variant="link" as="a" href="https://github.com/TWN-Systems/enclosed/issues/new/choose" target="_blank" rel="noopener noreferrer" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
            {t('footer.report-issue')}
          </Button>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-1 text-center">
          <div>
            {t('footer.source-code')}
            {' '}
            <Button variant="link" as="a" href="https://github.com/TWN-Systems/enclosed" target="_blank" rel="noopener noreferrer" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">{t('footer.github')}</Button>
            .
          </div>
          <div>
            {t('footer.version')}
            {' '}
            <Button variant="link" as="a" href={`https://github.com/TWN-Systems/enclosed/releases/tag/v${buildTimeConfig.enclosedVersion}`} target="_blank" rel="noopener noreferrer" class="p-0 text-muted-foreground underline hover:text-primary transition font-normal h-auto">
              {buildTimeConfig.enclosedVersion}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AppLayout: ParentComponent = (props) => {
  const getIsSecureContext = () => {
    return window.isSecureContext ?? window.location.protocol === 'https:';
  };

  const { t } = useI18n();

  return (
    <div class="flex flex-col h-screen min-h-0">
      <Show when={!getIsSecureContext()}>
        <div class="bg-warning px-6 py-2 text-center gap-2 justify-center bg-op-20 text-warning text-pretty">
          <div class="i-tabler-alert-triangle text-base hidden lg:inline-block vertical-mid mr-2"></div>
          {t('insecureContextWarning.description')}
          {' '}
          <a href={buildDocUrl({ path: '/self-hosting/troubleshooting#why-do-i-see-a-warning-about-insecure-connexion' })} target="_blank" rel="noopener noreferrer" class="underline hover:text-primary transition">
            {t('insecureContextWarning.learn-more')}
          </a>
        </div>
      </Show>

      <Navbar />

      <div class="flex-1 pb-20 ">{props.children}</div>

      <Footer />

    </div>
  );
};
