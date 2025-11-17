# Deploying Enclosed to Cloudflare Pages + KV

This guide will walk you through deploying your own instance of Enclosed using Cloudflare Pages for hosting and Cloudflare KV for storage. Perfect for beginners and intermediate users!

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Fork the Repository](#fork-the-repository)
3. [Set Up Cloudflare Account](#set-up-cloudflare-account)
4. [Create a Cloudflare KV Namespace](#create-a-cloudflare-kv-namespace)
5. [Deploy Using GitHub Actions (Recommended)](#deploy-using-github-actions-recommended)
6. [Manual Deployment Alternative](#manual-deployment-alternative)
7. [Configuration Options](#configuration-options)
8. [Verify Your Deployment](#verify-your-deployment)
9. [Troubleshooting](#troubleshooting)
10. [Next Steps](#next-steps)

---

## Prerequisites

Before you begin, make sure you have:

- **GitHub account** - To fork the repository
- **Cloudflare account** - Free tier is sufficient ([Sign up here](https://dash.cloudflare.com/sign-up))
- **Node.js 22+** - Only needed for local development/testing (optional)
- **pnpm** - Only needed for local development/testing (optional)

---

## Fork the Repository

1. Go to the [Enclosed repository](https://github.com/CorentinTh/enclosed)
2. Click the **"Fork"** button in the top-right corner
3. Choose your GitHub account as the destination
4. Wait for the fork to complete

Your forked repository URL will be: `https://github.com/YOUR_USERNAME/enclosed`

---

## Set Up Cloudflare Account

### 1. Sign in to Cloudflare Dashboard

Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and sign in.

### 2. Get Your Account ID

1. From the dashboard, click on **"Workers & Pages"** in the left sidebar
2. On the right side, you'll see **"Account ID"** - click to copy it
3. Save this ID somewhere safe - you'll need it later

### 3. Create an API Token

You need an API token for automated deployments:

1. Go to **My Profile** → **API Tokens** ([Direct link](https://dash.cloudflare.com/profile/api-tokens))
2. Click **"Create Token"**
3. Find **"Edit Cloudflare Workers"** template and click **"Use template"**
4. **Configure the token:**
   - **Token name**: `Enclosed Deployment` (or any name you prefer)
   - **Permissions**: Should already have:
     - Account > Cloudflare Pages > Edit
     - Account > Account Settings > Read
   - **Account Resources**: Select your account
   - **Zone Resources**: All zones (or specific if you prefer)
5. Click **"Continue to summary"**
6. Click **"Create Token"**
7. **IMPORTANT**: Copy your token and save it securely - you won't be able to see it again!

---

## Create a Cloudflare KV Namespace

Cloudflare KV (Key-Value) is where Enclosed will store all encrypted notes.

### Using Cloudflare Dashboard (Easiest)

1. In your Cloudflare dashboard, go to **"Workers & Pages"** → **"KV"**
2. Click **"Create a namespace"**
3. **Namespace Name**: Enter `enclosed-notes` (or any name you prefer)
4. Click **"Add"**
5. **Save the Namespace ID** - you'll see it in the list. It looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

### Using Wrangler CLI (Alternative)

If you prefer the command line:

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create KV namespace
wrangler kv:namespace create "notes"

# Save the Namespace ID shown in the output
```

---

## Deploy Using GitHub Actions (Recommended)

This is the easiest method - it automatically deploys your app whenever you push to the main branch.

### 1. Add Secrets to Your GitHub Repository

1. Go to your forked repository on GitHub
2. Click **"Settings"** → **"Secrets and variables"** → **"Actions"**
3. Click **"New repository secret"** and add these two secrets:

   **Secret 1:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: Your API token from earlier

   **Secret 2:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: Your Account ID from earlier

### 2. Update Wrangler Configuration

You need to update the KV namespace ID in the configuration file:

1. In your forked repository, navigate to `packages/app-server/wrangler.toml`
2. Click the **edit** button (pencil icon)
3. Find this section:

```toml
[[kv_namespaces]]
binding = "notes"
id = "b1329cb8560e49d392bed877c9ac48a2"
```

4. Replace the `id` value with **your KV namespace ID** from the previous step
5. **Important**: Keep `binding = "notes"` exactly as is
6. Commit the change directly to the main branch

### 3. Create Cloudflare Pages Project

Before the GitHub Action can deploy, you need to create the Pages project:

1. Go to **"Workers & Pages"** in Cloudflare dashboard
2. Click **"Create application"** → **"Pages"**
3. Click **"Connect to Git"**
4. **Connect your GitHub account** if you haven't already
5. Select your **forked `enclosed` repository**
6. **Configure the build:**
   - **Production branch**: `main`
   - **Build command**: Leave empty (handled by GitHub Actions)
   - **Build output directory**: Leave empty
7. Click **"Save and Deploy"**
8. **Cancel the initial build** - we'll deploy via GitHub Actions instead

### 4. Bind KV Namespace to Pages Project

1. In your Cloudflare dashboard, go to **"Workers & Pages"**
2. Click on your **"enclosed"** project
3. Go to **"Settings"** → **"Functions"**
4. Scroll down to **"KV namespace bindings"**
5. Click **"Add binding"**
6. Configure:
   - **Variable name**: `notes` (must be exactly this)
   - **KV namespace**: Select your namespace (e.g., `enclosed-notes`)
7. Click **"Save"**

### 5. Trigger Deployment

Now trigger the deployment:

**Option A: Make a dummy commit**
```bash
# Clone your fork locally
git clone https://github.com/YOUR_USERNAME/enclosed.git
cd enclosed

# Make a small change (like updating README)
echo "\n" >> README.md
git add README.md
git commit -m "Trigger deployment"
git push origin main
```

**Option B: Manual trigger**
1. Go to your repository on GitHub
2. Click **"Actions"** tab
3. Select **"CD - Production"** workflow
4. Click **"Run workflow"** → **"Run workflow"**

### 6. Monitor Deployment

1. Go to **"Actions"** tab in your GitHub repository
2. You should see a workflow run starting
3. Click on it to watch the progress
4. Wait for both jobs to complete (green checkmarks):
   - ✅ Publish app to production
   - ✅ Publish docs to production

---

## Manual Deployment Alternative

If you prefer to deploy manually without GitHub Actions:

### 1. Clone Your Fork Locally

```bash
git clone https://github.com/YOUR_USERNAME/enclosed.git
cd enclosed
```

### 2. Install Dependencies

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 3. Update Wrangler Configuration

Edit `packages/app-server/wrangler.toml` and update the KV namespace ID:

```toml
[[kv_namespaces]]
binding = "notes"
id = "YOUR_KV_NAMESPACE_ID_HERE"
```

### 4. Build the Application

```bash
pnpm --filter @enclosed/deploy-cloudflare build
```

This command:
- Builds the backend (API)
- Builds the frontend (UI)
- Combines them into `packages/deploy-cloudflare/dist/`

### 5. Deploy to Cloudflare Pages

```bash
cd packages/deploy-cloudflare

# Login to Cloudflare (one-time setup)
npx wrangler login

# Deploy
npx wrangler pages deploy dist \
  --project-name enclosed \
  --branch main
```

### 6. Bind KV Namespace (First Time Only)

After first deployment, bind the KV namespace:

1. Go to Cloudflare dashboard → **"Workers & Pages"** → **"enclosed"**
2. **"Settings"** → **"Functions"** → **"KV namespace bindings"**
3. Add binding:
   - Variable name: `notes`
   - KV namespace: Select your namespace
4. Save

---

## Configuration Options

Enclosed is highly configurable. You can customize behavior using environment variables.

### Setting Environment Variables in Cloudflare Pages

1. Go to your Cloudflare Pages project
2. Click **"Settings"** → **"Environment variables"**
3. Add variables for **"Production"** environment
4. Click **"Save"**
5. **Redeploy** for changes to take effect

### Common Configuration Options

#### Note Settings

```bash
# Maximum encrypted payload size (default: 50MB)
NOTES_MAX_ENCRYPTED_PAYLOAD_LENGTH=52428800

# Default time-to-live in seconds (default: 86400 = 24 hours)
# Options: 3600 (1h), 86400 (24h), 604800 (7d), 2592000 (30d)
PUBLIC_DEFAULT_NOTE_TTL_SECONDS=86400

# Allow notes without expiration (default: true)
PUBLIC_IS_SETTING_NO_EXPIRATION_ALLOWED=true

# Default: delete note after reading (default: false)
PUBLIC_DEFAULT_DELETE_NOTE_AFTER_READING=false
```

#### Authentication (Optional)

To require login before creating notes:

```bash
# Enable authentication
PUBLIC_IS_AUTHENTICATION_REQUIRED=true

# JWT secret for signing tokens (REQUIRED if auth enabled)
AUTHENTICATION_JWT_SECRET=your-super-secret-random-string-here

# User accounts (email:bcrypt-password-hash pairs, comma-separated)
AUTHENTICATION_USERS=user@example.com:$2a$10$HashedPasswordHere,admin@example.com:$2a$10$AnotherHashedPassword
```

**Generate password hashes**: Use the [password hash generator](https://docs.enclosed.cc/self-hosting/users-authentication-key-generator) or:

```bash
npx @enclosed/cli hash-password "your-password-here"
```

#### Server Settings

```bash
# CORS origins (comma-separated, for API access from other domains)
SERVER_CORS_ORIGINS=https://yourdomain.com,https://app.yourdomain.com

# API route timeout in milliseconds (default: 5000)
SERVER_API_ROUTES_TIMEOUT_MS=5000

# Base API URL (if deploying to subdirectory)
PUBLIC_BASE_API_URL=/
```

#### Custom Branding

```bash
# Custom documentation URL
PUBLIC_FALLBACK_DOCUMENTATION_URL=https://docs.yourdomain.com
```

---

## Verify Your Deployment

1. **Find your deployment URL:**
   - Go to Cloudflare dashboard → **"Workers & Pages"** → **"enclosed"**
   - Your URL will be like: `https://enclosed.pages.dev` or your custom domain

2. **Test the application:**
   - Open your deployment URL
   - Create a test note
   - Set a password and expiration
   - Click "Create note"
   - You should get a shareable link
   - Open the link in an incognito window
   - Enter the password and verify the note displays correctly

3. **Check KV storage:**
   - Go to **"Workers & Pages"** → **"KV"** → Your namespace
   - You should see entries for created notes (they'll look like random strings)

---

## Troubleshooting

### Deployment fails with "KV namespace not found"

**Solution**: Make sure you:
1. Created the KV namespace in Cloudflare
2. Updated the namespace ID in `packages/app-server/wrangler.toml`
3. Bound the KV namespace to your Pages project in Settings

### "Failed to fetch" error when creating notes

**Solution**:
1. Check that the KV binding is correctly set up
2. Verify the binding name is exactly `notes` (lowercase)
3. Redeploy the application

### Notes not saving/loading

**Solution**:
1. Open browser DevTools → Network tab
2. Create a note and check for API errors
3. Common issues:
   - KV namespace not bound correctly
   - CORS errors (check `SERVER_CORS_ORIGINS`)
   - Payload too large (check `NOTES_MAX_ENCRYPTED_PAYLOAD_LENGTH`)

### Build fails in GitHub Actions

**Solution**:
1. Check that both secrets are set correctly:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
2. Verify your API token has the correct permissions
3. Check the Actions logs for specific error messages

### 403 Error when deploying

**Solution**:
1. Your API token may have insufficient permissions
2. Create a new token with "Edit Cloudflare Workers" template
3. Make sure the token has access to your account

### Custom domain not working

**Solution**:
1. Go to your Pages project → **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (can take up to 24 hours)

---

## Next Steps

### 1. Set Up a Custom Domain

1. In Cloudflare Pages project, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter your domain (e.g., `notes.yourdomain.com`)
4. Follow the DNS instructions
5. SSL certificate will be automatically provisioned

### 2. Enable Analytics

Cloudflare provides free Web Analytics:

1. Go to your Pages project
2. Click **"Analytics"** tab
3. View traffic, performance, and usage metrics

### 3. Configure Backup Strategy

Notes in KV are durable but consider:
- Exporting KV data periodically using Wrangler
- Setting up alerts for storage limits
- Documenting your configuration

### 4. Keep Your Fork Updated

Stay up-to-date with the main Enclosed repository:

```bash
# Add upstream remote (one-time)
git remote add upstream https://github.com/CorentinTh/enclosed.git

# Fetch and merge updates
git fetch upstream
git merge upstream/main
git push origin main
```

### 5. Customize the UI

You can customize colors, branding, and text:
- Frontend code: `packages/app-client/`
- Styling: Uses UnoCSS (utility-first CSS)
- Components: SolidJS components in `packages/app-client/src/`

### 6. Monitor Usage

Keep an eye on Cloudflare KV limits:
- **Free tier**: 100,000 reads/day, 1,000 writes/day
- **Storage**: 1 GB
- Check usage: Cloudflare Dashboard → **"Workers & Pages"** → **"KV"** → Your namespace

---

## Additional Resources

- **[Official Enclosed Documentation](https://docs.enclosed.cc)**
- **[Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)**
- **[Cloudflare KV Docs](https://developers.cloudflare.com/kv/)**
- **[Enclosed GitHub Repository](https://github.com/CorentinTh/enclosed)**
- **[Enclosed GitHub Issues](https://github.com/CorentinTh/enclosed/issues)** - Get help or report bugs

---

## Summary

You've successfully deployed Enclosed to Cloudflare Pages! Here's what you accomplished:

✅ Forked the Enclosed repository
✅ Set up Cloudflare account and API token
✅ Created a KV namespace for encrypted note storage
✅ Configured automatic deployments via GitHub Actions
✅ Deployed a fully functional encrypted note-sharing application
✅ Learned how to configure and customize your instance

Your instance is now live and ready to share private, encrypted notes with end-to-end encryption!

---

**Need help?** Open an issue on the [Enclosed GitHub repository](https://github.com/CorentinTh/enclosed/issues) or check the [documentation](https://docs.enclosed.cc).

**Enjoying Enclosed?** Consider [supporting the creator](https://buymeacoffee.com/cthmsst) ❤️
