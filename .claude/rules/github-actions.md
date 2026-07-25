---
paths:
  - ".github/**"
---

# GitHub Actions

Every change under `.github/` is checked by **actionlint**, **ghalint**, and **zizmor**
(auditor persona) in a dedicated workflow. Most of the rules below exist because one of
those three enforces them — a workflow that ignores them fails CI, it doesn't just look
untidy.

- **Pin third-party actions to a full commit SHA**, with the version as a trailing
  comment (`uses: owner/action@<sha> # v1.2.3`). Never a tag, never a branch. Renovate
  updates the SHA and the comment together.
- **`permissions: {}` at the workflow level**, then grant the minimum each job needs.
- **`actions/checkout` sets `persist-credentials: false`.** Nothing here needs the
  checkout token to survive into later steps.
- **Every job sets `timeout-minutes`** and a human-readable `name`.
- **Secrets are passed through `env:` on the step**, never interpolated straight into a
  `run:` script.
- Set the toolchain up through the local `./.github/actions/setup` composite action
  rather than repeating the steps. It owns mise, the bun cache, and the frozen install,
  so a change to any of those happens in one place.
- Workflows that can run concurrently declare a `concurrency` group. Deploys queue
  (`cancel-in-progress: false`); checks cancel superseded runs.
