# CI Integration Plan

The first integration target is GitHub Actions.

1. Authenticate with a GitHub App or OAuth flow.
2. Discover repositories and workflows.
3. Normalize workflow runs into the dashboard pipeline model.
4. Refresh active runs on a short interval.
5. Persist historical runs for trend reporting.

Secrets and access tokens must remain outside the client bundle.
