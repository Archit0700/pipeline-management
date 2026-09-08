# Engineering Decisions

## Provider-neutral pipeline model

The dashboard keeps provider-specific payloads behind an integration boundary. This avoids coupling the UI to one CI platform and makes future integrations easier to add.

## Static-first frontend

The current application is intentionally frontend-first so the interface can be developed and reviewed independently of backend credentials and provider APIs.
