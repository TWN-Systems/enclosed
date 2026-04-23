# Security Policy

Enclosed is an end-to-end encrypted note-sharing service. We take the security
of the project and its users seriously.

## Supported versions

Only the latest `main` release line and the current published Docker image
(`corentinth/enclosed:latest`) receive security fixes.

| Version        | Supported |
| -------------- | :-------: |
| `latest`       |     Yes   |
| older releases |     No    |

## Reporting a vulnerability

**Please do not open a public issue for security vulnerabilities.**

Report privately via one of:

1. **GitHub Security Advisories** - preferred.
   Use the [Report a vulnerability](https://github.com/CorentinTh/enclosed/security/advisories/new)
   button on the Security tab.
2. Email the maintainer: `corentinth@proton.me`.

When reporting, please include:

- A description of the issue and its impact.
- Reproduction steps or a proof-of-concept.
- Affected versions / commits.
- Any suggested mitigation.

We aim to acknowledge reports within 3 business days and to resolve confirmed
issues within 30 days for high-severity findings.

## Automated security controls

This repository is continuously scanned by the following tooling (see
`.github/workflows/`):

| Control                     | Tool                                   |
| --------------------------- | -------------------------------------- |
| SAST (semantic)             | CodeQL, Semgrep                        |
| Dependency CVE scanning     | OSV-Scanner, Trivy (fs), Grype (fs), pnpm audit |
| Container image scanning    | Trivy (image), Grype (image)           |
| IaC / Dockerfile misconfig  | Trivy (config), Hadolint               |
| Dependency review on PRs    | `actions/dependency-review-action`     |
| SBOM generation             | Anchore SBOM Action (CycloneDX + SPDX) |
| DAST                        | OWASP ZAP baseline                     |
| Dependency updates          | Renovate, Dependabot (Actions/Docker)  |

Findings are surfaced in the GitHub **Security** tab (Code scanning alerts).

## Target: zero known CVEs

The project's security KPI is **zero known high- or critical-severity CVEs**
in shipped dependencies and container images. PRs that introduce new
high/critical fixable CVEs are blocked by CI. Unfixable or contested findings
must be triaged via a GitHub Security Advisory or a documented suppression.
