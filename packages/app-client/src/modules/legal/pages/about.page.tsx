import { Button } from '@/modules/ui/components/button';
import { Card, CardContent, CardHeader } from '@/modules/ui/components/card';
import { A } from '@solidjs/router';
import { type Component } from 'solid-js';

export const AboutPage: Component = () => {
  return (
    <div class="px-6 py-8 max-w-4xl mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl font-bold mb-2">About This Service</h1>
        <p class="text-muted-foreground">
          Privacy-respecting secret sharing for everyone
        </p>
      </div>

      <div class="space-y-6">
        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-target text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Our Mission</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              We created this service to provide a privacy-respecting way to share sensitive information securely.
              Too often, credentials and secrets are shared through insecure channels like email, text messages,
              or over the phone—methods that leave a permanent trail and expose sensitive data to unnecessary risk.
            </p>
            <p class="text-muted-foreground">
              This platform offers a better way: end-to-end encrypted, self-destructing notes that give you
              complete control over your sensitive information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-key text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Why We Built This</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              Sharing credentials securely shouldn't be complicated or expensive. Whether you're:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Sharing a password with a colleague</li>
              <li>Sending API keys to a developer</li>
              <li>Transmitting sensitive information to a client</li>
              <li>Providing temporary access credentials</li>
              <li>Sharing any confidential data that shouldn't persist</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              You deserve a solution that prioritizes your privacy and security without compromise.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-gift text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Free and Open</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4 font-semibold">
              Security and privacy are priceless, but they shouldn't cost you anything.
            </p>
            <p class="text-muted-foreground mb-4">
              This service is provided completely free of charge because we believe everyone deserves access
              to secure communication tools. We don't show ads, we don't sell your data, and we don't require
              registration or payment.
            </p>
            <p class="text-muted-foreground">
              The source code is open and available for inspection, auditing, and contribution. Transparency
              is fundamental to building trust in security tools.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-shield-check text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">How It Works</h2>
            </div>
          </CardHeader>
          <CardContent>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Create a note with your sensitive information</li>
              <li>The note is encrypted in your browser before being sent to our servers</li>
              <li>Share the generated link through your preferred secure channel</li>
              <li>The recipient can view the note using the link</li>
              <li>The note automatically expires or self-destructs based on your settings</li>
              <li>No one—not even we—can read your encrypted content</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              Learn more about our security architecture on our{' '}
              <A href="/privacy" class="text-primary hover:underline">
                Privacy & Security
              </A>
              {' '}page.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-building text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Hosted by TWN Systems</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              This instance is hosted and maintained by{' '}
              <a href="https://twn.systems" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                TWN Systems
              </a>
              , committed to providing reliable and secure services for our community.
            </p>
            <p class="text-muted-foreground">
              We operate this service as part of our mission to make privacy and security accessible to everyone.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-code text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Built on Open Source</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              This service is based on{' '}
              <a href="https://github.com/CorentinTh/enclosed" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                Enclosed
              </a>
              , an open-source project created by{' '}
              <a href="https://corentin.tech" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                Corentin Thomasset
              </a>
              . We're grateful for his work in creating a tool that prioritizes user privacy and security.
            </p>
            <p class="text-muted-foreground mb-4">
              Our fork is available at{' '}
              <a href="https://github.com/TWN-Systems/enclosed" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                github.com/TWN-Systems/enclosed
              </a>
              {' '}where you can:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Review the source code</li>
              <li>Audit the security implementation</li>
              <li>Report issues or vulnerabilities</li>
              <li>Contribute improvements</li>
              <li>Deploy your own instance</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-heart text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Our Commitment</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              We are committed to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Keeping this service free and accessible</li>
              <li>Maintaining transparency through open-source code</li>
              <li>Never collecting or selling user data</li>
              <li>Continuously improving security and privacy protections</li>
              <li>Responding to security issues promptly and professionally</li>
              <li>Operating with integrity and in the best interest of our users</li>
            </ul>
          </CardContent>
        </Card>

        <div class="flex justify-center gap-4 mt-8">
          <Button as={A} href="/privacy" variant="secondary">
            Privacy & Security
          </Button>
          <Button as={A} href="/terms" variant="secondary">
            Terms of Service
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
