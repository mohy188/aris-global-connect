# Vercel Deployment Guide (Step-by-Step)

This project now includes Vercel-specific configuration:
- `vercel.json`
- `api/render.js`
- `npm run build:vercel`

## 1) Pre-check locally

Run these commands in the project root:

```bash
npm install
npm run build:vercel
```

Expected result:
- Build completes without errors
- A `dist/client` folder (static assets) and `dist/server/server.js` (SSR server entry) are generated

## 2) Push your code to GitHub

If this repo is not already on GitHub:

```bash
git add .
git commit -m "Add Vercel deployment setup"
git push origin <your-branch>
```

## 3) Create a Vercel project

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click **Add New...** -> **Project**
4. Import this repository
5. In the project setup page, verify:
   - Framework Preset: `Other`
   - Install Command: `npm install`
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist/client`

These are also enforced by `vercel.json`.

## 4) Add environment variables in Vercel

In Vercel project settings:
1. Open **Settings** -> **Environment Variables**
2. Add the variables below (at minimum):

Required for client + server usage:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

If your server code needs service-role actions, also add:
- `SUPABASE_SERVICE_ROLE_KEY`

Tip:
- `VITE_...` vars are exposed to browser code
- non-`VITE_...` vars are server-side only

## 5) Deploy

1. Click **Deploy** in Vercel
2. Wait for build to finish
3. Open the generated `.vercel.app` URL

## 6) Verify after deploy

Check these quickly:
- Home page loads
- No blank page or console crash
- Any Supabase features can connect successfully
- Refreshing a route still works (catch-all is routed through `api/render.js`)

## 7) Add custom domain (optional)

1. Vercel Project -> **Settings** -> **Domains**
2. Add your domain
3. Follow DNS instructions from Vercel
4. Wait for SSL issuance

## 8) Future redeploys

After this first setup, every `git push` to your connected branch triggers a new Vercel deployment automatically.

## Troubleshooting

### Build fails with Cloudflare-related errors
This setup already avoids Cloudflare worker build mode on Vercel by using:

```bash
npm run build:vercel
```

### App loads but Supabase calls fail
Usually missing env vars in Vercel. Recheck all values under **Settings** -> **Environment Variables** and redeploy.

### Route returns 404 on refresh
Ensure `vercel.json` exists at repo root with these routes:
- `handle: filesystem` first
- catch-all route to `/api/render`
