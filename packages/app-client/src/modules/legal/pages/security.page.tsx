import { Button } from '@/modules/ui/components/button';
import { Card, CardContent, CardHeader } from '@/modules/ui/components/card';
import { A } from '@solidjs/router';
import { type Component } from 'solid-js';

export const SecurityPage: Component = () => {
  return (
    <div class="px-6 py-8 max-w-4xl mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl font-bold mb-2">Security Vulnerability Reporting</h1>
        <p class="text-muted-foreground">
          Help us keep this service secure
        </p>
      </div>

      <div class="space-y-6">
        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-shield-check text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Responsible Disclosure</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              We value the security community and appreciate researchers who help us maintain a secure service. If you've discovered a security vulnerability in this application, we encourage you to report it responsibly.
            </p>
            <p class="text-muted-foreground">
              We are committed to working with security researchers to verify, reproduce, and address any potential vulnerabilities quickly and professionally.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-mail text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">How to Report</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              To report a security vulnerability, please email us at:
            </p>
            <div class="bg-muted p-4 rounded-md mb-4">
              <a href="mailto:security@twn.systems" class="text-xl font-mono text-primary hover:underline">
                security@twn.systems
              </a>
            </div>
            <p class="text-muted-foreground">
              Please use this email exclusively for security-related issues. For general support or questions, please use our standard support channels.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">What to Include</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              When reporting a vulnerability, please include:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Detailed description of the vulnerability</li>
              <li>Steps to reproduce the issue</li>
              <li>Proof of concept (if applicable)</li>
              <li>Potential impact of the vulnerability</li>
              <li>Your suggested remediation (if you have one)</li>
              <li>Your contact information for follow-up</li>
            </ul>
            <p class="text-muted-foreground mt-4">
              The more details you provide, the faster we can assess and address the issue.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Scope</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              The following are in scope for security reports:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Vulnerabilities in the application's encryption implementation</li>
              <li>Authentication and authorization bypass issues</li>
              <li>Server-side security vulnerabilities (RCE, SQL injection, etc.)</li>
              <li>Client-side vulnerabilities (XSS, CSRF, etc.)</li>
              <li>Security misconfigurations that could lead to data exposure</li>
              <li>Issues that could compromise user data or privacy</li>
            </ul>
            <p class="text-muted-foreground mt-4 mb-4">
              The following are generally out of scope:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Denial of Service (DoS/DDoS) attacks</li>
              <li>Social engineering attacks against users or staff</li>
              <li>Physical security issues</li>
              <li>Issues in third-party services or dependencies (report to the vendor)</li>
              <li>Issues requiring unlikely user interaction</li>
              <li>Recently disclosed zero-day vulnerabilities in dependencies (give us time to patch)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-users text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Our Commitments</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              When you report a vulnerability to us, we commit to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Acknowledge receipt of your report within 48 hours</li>
              <li>Provide an initial assessment within 5 business days</li>
              <li>Keep you informed about our progress in addressing the issue</li>
              <li>Credit you for the discovery (if you wish) when we disclose the issue</li>
              <li>Not take legal action against you if you follow responsible disclosure practices</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div class="flex items-center gap-2">
              <div class="i-tabler-checklist text-2xl text-primary"></div>
              <h2 class="text-xl font-semibold">Responsible Disclosure Guidelines</h2>
            </div>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground mb-4">
              We ask that you:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Allow us reasonable time to fix the vulnerability before public disclosure</li>
              <li>Do not exploit the vulnerability beyond what is necessary to demonstrate it</li>
              <li>Do not access, modify, or delete other users' data</li>
              <li>Do not perform actions that could harm the service's availability</li>
              <li>Do not publicly disclose the vulnerability until we've had a chance to address it</li>
              <li>Act in good faith and avoid violating privacy or causing damage</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 class="text-xl font-semibold">Safe Harbor</h2>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground">
              We consider security research conducted in accordance with this policy to be authorized. We will not take legal action against you or ask law enforcement to investigate you for security research conducted in good faith that complies with this policy.
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
              This application is based on open-source software. You can review the source code at:
            </p>
            <div class="bg-muted p-4 rounded-md mb-4">
              <a
                href="https://github.com/TWN-Systems/enclosed"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline font-mono"
              >
                https://github.com/TWN-Systems/enclosed
              </a>
            </div>
            <p class="text-muted-foreground">
              We encourage you to review the code and report any security issues you find through the responsible disclosure process outlined above.
            </p>
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
