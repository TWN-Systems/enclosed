import { Button } from '@/modules/ui/components/button';
import { Card, CardContent, CardHeader } from '@/modules/ui/components/card';
import { A } from '@solidjs/router';
import { type Component } from 'solid-js';

export const PrivacyPage: Component = () => {
  return (
    <div class="px-6 py-8 max-w-4xl mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl font-bold mb-2">Privacy & Security</h1>
        <p class="text-muted-foreground">
          Understanding how your data is protected and handled
        </p>
      </div>

      <div class="space-y-6">
        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-shield-lock text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">End-to-End Encryption</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              All notes are encrypted directly in your browser before being sent to our servers. This means:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Your data is encrypted on your device using strong encryption algorithms</li>
              <li>The encryption key never leaves your browser</li>
              <li>Only you and those you share the link with can decrypt the note</li>
              <li>The encryption key is embedded in the URL fragment (after the #), which is never sent to the server</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-eye-off text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Zero-Knowledge Architecture</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              TWN has absolutely no knowledge of the content you share:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>We cannot read your notes - they are encrypted before reaching our servers</li>
              <li>We cannot decrypt your notes - we don't have access to the encryption keys</li>
              <li>Even our administrators cannot access your note content</li>
              <li>Your privacy is protected by design, not just by policy</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-cloud text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Infrastructure</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              This instance is hosted using Cloudflare's infrastructure:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Cloudflare Pages:</strong> Provides secure, fast, and reliable hosting for the application</li>
              <li><strong>Cloudflare KV:</strong> Stores encrypted notes in a distributed key-value store</li>
              <li><strong>Global CDN:</strong> Notes are served from edge locations close to you for optimal performance</li>
              <li><strong>DDoS Protection:</strong> Built-in protection against attacks and abuse</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-clock text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Data Retention</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              Notes are automatically deleted based on your settings:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Expiration time: Notes can be set to expire after 1 hour, 1 day, 1 week, or 1 month</li>
              <li>Delete after reading: Notes can be configured to self-destruct after being viewed once</li>
              <li>No permanent storage: All notes are temporary and will be deleted automatically</li>
              <li>No backups: Once deleted, notes cannot be recovered</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-chart-bar text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Analytics</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              We use Umami, a privacy-focused, self-hosted analytics platform as an alternative to Google Analytics. This allows us to understand how the service is used while respecting your privacy.
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>No cookies:</strong> We do not use cookies for analytics tracking</li>
              <li><strong>Basic device info:</strong> Browser type, operating system, and screen size</li>
              <li><strong>General location:</strong> Country and region level only (not precise location)</li>
              <li><strong>Page views:</strong> Which pages are visited and how often</li>
              <li><strong>Data storage:</strong> Analytics data is stored securely in Tasmania, Australia</li>
              <li><strong>No third-party sharing:</strong> Analytics data is never sold or shared with third parties</li>
              <li><strong>No personal data:</strong> We do not collect names, email addresses, or any personally identifiable information through analytics</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              By using this service, you consent to the collection of this basic analytics data. This helps us improve the service and understand usage patterns.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-code text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Open Source</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              This application is based on open-source software:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>The source code is publicly available and auditable</li>
              <li>Security researchers can verify the encryption implementation</li>
              <li>The community can contribute improvements and report issues</li>
              <li>
                View the source code on{' '}
                <a href="https://github.com/TWN-Systems/enclosed" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-alert-circle text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Important Notes</h2>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Anyone with the complete note URL (including the fragment after #) can decrypt and read the note</li>
              <li>Share note URLs only through secure channels</li>
              <li>Use the password protection feature for additional security</li>
              <li>This service is provided "as is" without warranties of any kind</li>
              <li>Do not use this service for extremely sensitive information where data loss would be catastrophic</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-bug text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Security Vulnerability Reporting</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              If you discover a security vulnerability in this application, we encourage you to report it responsibly.
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Email security issues to{' '}
                <a href="mailto:security@twn.systems" class="text-primary hover:underline">
                  security@twn.systems
                </a>
              </li>
              <li>Do not publicly disclose the vulnerability before we have addressed it</li>
              <li>
                See our{' '}
                <A href="/security" class="text-primary hover:underline">
                  Security Policy
                </A>
                {' '}for detailed reporting guidelines
              </li>
            </ul>
          </CardContent>
        </Card>

        <div class="flex justify-center gap-4 mt-8">
          <Button as={A} href="/terms" variant="secondary">
            Terms of Service
          </Button>
          <Button as={A} href="/security" variant="secondary">
            Report Security Issue
          </Button>
          <Button as={A} href="/" variant="secondary">
            <div class="i-tabler-arrow-left mr-2"></div>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
