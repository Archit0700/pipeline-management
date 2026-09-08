# Data Model

A pipeline record should expose a stable identifier, repository, branch, status, duration, last run time, and deployment environment.

Statuses are intentionally small and predictable: `success`, `failed`, `running`, and `queued`.

Keeping the model provider-neutral makes it possible to map GitHub Actions, GitLab CI, or other CI systems into the same dashboard representation.
