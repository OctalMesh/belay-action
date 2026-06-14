<!--suppress HtmlDeprecatedAttribute -->
<h1 align="center">Security Policy</h1>

<div align="center">
  <h6>
    <a rel="noopener noreferrer" href="README.md">Readme</a>
    ·
    <a rel="noopener noreferrer" href="CODE_OF_CONDUCT.md">Code of Conduct</a>
    ·
    <a rel="noopener noreferrer" href="CONTRIBUTING.md">Contributing</a>
    ·
    <a rel="noopener noreferrer" href="SUPPORT.md">Support</a>
    ·
    <a rel="noopener noreferrer" href="LICENSE.md">License</a>
  </h6>
</div>

<h1></h1>

> [!CAUTION]
> **Do not open a public issue, discussion, or pull request to report a security
> vulnerability.** Use the private channels listed below.

## Reporting a Vulnerability

| Channel                 | Details                                                                |
|-------------------------|------------------------------------------------------------------------|
| **Email** *(preferred)* | [security@octalmesh.com](mailto:security@octalmesh.com)                |
| **Direct contact**      | Reach a core [maintainer](https://github.com/nykonhrytsyshyn) directly |

### What to include

The more context you provide, the faster and more accurately we can triage.

- **Type of issue** - e.g. command injection, token leakage, path traversal
- **Affected surface** - `src/` file(s), action inputs, or handler behavior
- **Location** - repository, branch, commit, or direct URL if public
- **Environment** - Node, pnpm, OS, event payload used
- **Reproduction steps** - minimal workflow or event payload to reproduce
- **Proof-of-concept** - exploit code or demonstration, if available
- **Impact** - realistic scenarios and risk to CI/CD pipelines

Incomplete reports are still welcome, but detailed reports allow faster and more
accurate triage.

### Security reports are accepted in:

- English
- Ukrainian
- Russian

## Scope

This policy covers vulnerabilities in the `belay-action` repository, including
the action code under `src/`, the published `dist` bundle, and the action's
inputs and handlers.

> [!NOTE]
> Issues in third-party dependencies should also be reported to their respective
> maintainers when applicable.

## Response Timeline

| Stage                  | Target                         |
|------------------------|--------------------------------|
| **Acknowledgement**    | Within 48 hours                |
| **Initial assessment** | Within 5 business days         |
| **Fix & disclosure**   | As soon as reasonably possible |

Timelines may vary depending on severity and complexity.

<h1></h1>

<h6 align="center">
Security research helps keep Belay reliable and boring - exactly how security
should be
</h6>
