# Deploy AITT Website to GitHub Pages (GitHub Actions)

This repo deploys the site in `website/` using the workflow at `.github/workflows/deploy-website.yml`.

## 1) Local sanity check
From repo root:

```bash
cd /home/aitt-terminal/AI_Trading_terminal_MAIN/website
npm ci
npm run build
```

## 2) Create / set GitHub remote
If no remote is configured yet:

```bash
cd /home/aitt-terminal/AI_Trading_terminal_MAIN

git remote add origin https://github.com/<YOUR_USER>/<YOUR_REPO>.git
```

## 3) Commit ONLY the website + workflow
Important: this working tree may contain unrelated deletes/changes. Don’t use `git add -A`.

Use an explicit add list:

```bash
cd /home/aitt-terminal/AI_Trading_terminal_MAIN

git add \
  .github/workflows/deploy-website.yml \
  .gitignore \
  website \
  website_reserve

git commit -m "Deploy website to GitHub Pages"
```

## 4) Push
```bash
git push -u origin Bridge-main-V1
# or: git push -u origin main
```

## 5) Enable Pages
On GitHub:
- Repo **Settings → Pages**
- Source: **GitHub Actions**

After the workflow runs, the site URL is shown in the Actions log under the Pages deployment step.

## Base path (Vite)
`website/vite.config.ts` auto-detects GitHub Pages base as `/<repo>/` when running on Actions.
If you need a custom base, set a repo variable `GITHUB_PAGES_BASE` like `/myrepo/`.
