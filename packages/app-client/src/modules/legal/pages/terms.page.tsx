import type { Component } from 'solid-js';
import { Button } from '@/modules/ui/components/button';
import { Card, CardContent, CardHeader } from '@/modules/ui/components/card';
import { A } from '@solidjs/router';

export const TermsPage: Component = () => {
  return (
    <div class="px-6 py-8 max-w-4xl mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl font-bold mb-2">Terms of Service</h1>
        <p class="text-muted-foreground">
          Last Updated: November 18, 2025
        </p>
      </div>

      <div class="space-y-6">
        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Acceptance of Terms</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Service Description</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              This service provides a platform for creating and sharing encrypted, temporary notes. All notes are:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Encrypted end-to-end in your browser</li>
              <li>Temporary and automatically deleted based on your settings</li>
              <li>Accessible only to those with the complete note URL</li>
              <li>Not backed up or recoverable after deletion</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-shield-x text-2xl text-warning"></div>
              <h2 class="text-xl font-semibold">No Warranties</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4 font-semibold">
              THIS SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
            </p>
            <p class="text-muted-foreground mb-4">
              We explicitly disclaim all warranties, express or implied, including but not limited to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that the service will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the accuracy, reliability, or completeness of any content</li>
              <li>Warranties that data will be securely stored or accessible at any given time</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-alert-triangle text-2xl text-destructive"></div>
              <h2 class="text-xl font-semibold">Limitation of Liability</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              To the maximum extent permitted by law, TWN Systems and its operators shall not be liable for:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Any direct, indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of data, profits, revenue, or business opportunities</li>
              <li>Service interruptions, data breaches, or security incidents</li>
              <li>Unauthorized access to or use of our servers and any personal information stored therein</li>
              <li>Any errors, mistakes, or inaccuracies in content</li>
              <li>Any claims arising from your use or inability to use the service</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              You acknowledge that you use this service at your own risk.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Acceptable Use Policy</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              You agree NOT to use this service to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Share illegal content or engage in illegal activities</li>
              <li>Distribute malware, viruses, or other malicious code</li>
              <li>Share content that infringes on intellectual property rights</li>
              <li>Harass, abuse, threaten, or harm others</li>
              <li>Share child sexual abuse material (CSAM) or content exploiting minors</li>
              <li>Distribute spam or unsolicited commercial content</li>
              <li>Attempt to gain unauthorized access to the service or other users' data</li>
              <li>Overload, disrupt, or compromise the service's infrastructure</li>
              <li>Circumvent any security features or rate limits</li>
              <li>Use automated tools to create or access notes in bulk</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              Violation of this policy may result in immediate termination of your access to the service and may be reported to law enforcement authorities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Content Responsibility</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              You are solely responsible for:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>All content you create, share, or transmit through this service</li>
              <li>Ensuring you have the right to share any content you upload</li>
              <li>Compliance with all applicable laws and regulations</li>
              <li>The security of your note URLs and access credentials</li>
              <li>Any consequences resulting from sharing note URLs with others</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              Due to end-to-end encryption, we cannot view, monitor, or control the content of your notes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Data Handling</h2>
          </CardHeader>
          <CardContent>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Notes are encrypted client-side before transmission to our servers</li>
              <li>We cannot decrypt, access, or recover your encrypted notes</li>
              <li>Notes are automatically deleted according to your expiration settings</li>
              <li>Deleted notes cannot be recovered</li>
              <li>We do not create backups of encrypted note content</li>
              <li>We may collect minimal technical information (IP addresses, access times) for security and operational purposes</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-chart-bar text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Analytics Consent</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              By using this service, you consent to the collection of basic analytics data. We use Umami, a privacy-focused, self-hosted analytics platform as an alternative to Google Analytics.
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>We collect basic device information (browser type, operating system, screen size)</li>
              <li>We collect general location data (country/region level only)</li>
              <li>We track page view counts to understand service usage</li>
              <li>We do not use cookies for analytics tracking</li>
              <li>Your analytics data is stored securely in Tasmania, Australia</li>
              <li>Analytics data is never sold or shared with third parties</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              For more details about our analytics practices, please see our
              {' '}
              <A href="/privacy" class="text-primary hover:underline">
                Privacy & Security
              </A>
              {' '}
              page.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Service Availability</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              We reserve the right to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Modify, suspend, or discontinue the service at any time without notice</li>
              <li>Refuse service to anyone for any reason</li>
              <li>Remove or delete notes that violate these terms or applicable laws</li>
              <li>Change these terms at any time (changes will be posted on this page)</li>
              <li>Implement rate limits or usage restrictions to ensure service stability</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Indemnification</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              You agree to indemnify, defend, and hold harmless TWN Systems, its operators, affiliates, and partners from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service or violation of these terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Security Vulnerability Reporting</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              If you discover a security vulnerability, please report it responsibly:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>
                Email details to
                {' '}
                <a href="mailto:security@twn.systems" class="text-primary hover:underline">
                  security@twn.systems
                </a>
              </li>
              <li>Do not publicly disclose the vulnerability before we have addressed it</li>
              <li>
                See our
                {' '}
                <A href="/security" class="text-primary hover:underline">
                  Security Policy
                </A>
                {' '}
                for more information
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Governing Law</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of the service shall be subject to the exclusive jurisdiction of the appropriate courts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Contact</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              For questions about these terms, please visit our
              {' '}
              <a href="https://twn.systems" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">
                website
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <div class="flex justify-center gap-4 mt-8">
          <Button as={A} href="/privacy" variant="secondary">
            Privacy & Security
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
