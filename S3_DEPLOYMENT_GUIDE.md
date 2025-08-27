# 🚀 S3 Deployment Guide for Spidertech Website

## 📁 **Folder to Deploy: `out/`**

The `out/` directory contains all the static files ready for S3 deployment.

## 🛠️ **Prerequisites**

1. **AWS CLI installed and configured**

   ```bash
   # Install AWS CLI
   brew install awscli  # macOS

   # Configure AWS credentials
   aws configure
   ```

2. **S3 Bucket created with proper permissions**
   - Create an S3 bucket with your domain name
   - Enable static website hosting
   - Configure bucket policy for public read access

## 📦 **Deployment Steps**

### **Option 1: Using the Deployment Script (Recommended)**

1. **Edit the deployment script:**
   ```bash
   nano deploy-s3.sh
   ```
2. **Update the configuration:**

   ```bash
   BUCKET_NAME="your-s3-bucket-name"
   REGION="us-east-1"  # Change to your region
   CLOUDFRONT_DISTRIBUTION_ID=""  # Optional
   ```

3. **Run the deployment:**
   ```bash
   ./deploy-s3.sh
   ```

### **Option 2: Manual Deployment**

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Upload to S3:**

   ```bash
   aws s3 sync out/ s3://your-bucket-name/ --delete --cache-control "max-age=31536000,public"
   ```

3. **Invalidate CloudFront (if using):**
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

## 🔧 **S3 Bucket Configuration**

### **1. Create S3 Bucket**

```bash
aws s3 mb s3://your-domain-name.com
```

### **2. Enable Static Website Hosting**

```bash
aws s3 website s3://your-domain-name.com --index-document index.html --error-document 404.html
```

### **3. Configure Bucket Policy**

Create `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-domain-name.com/*"
    }
  ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy --bucket your-domain-name.com --policy file://bucket-policy.json
```

## 🌐 **CloudFront Setup (Recommended)**

1. **Create CloudFront Distribution:**

   - Origin: Your S3 bucket
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Default Root Object: index.html
   - Error Pages: Redirect 404 to /index.html (for SPA routing)

2. **Custom Domain (Optional):**
   - Add your domain to CloudFront
   - Configure SSL certificate in ACM
   - Update DNS records

## 📋 **Files in the `out/` Directory**

```
out/
├── _next/           # Next.js static assets
├── logo/            # Logo files (all formats)
│   ├── logo-solid.svg
│   ├── logo-white.svg
│   ├── logo.svg
│   ├── favicon.png
│   └── favicon.svg
├── about/           # About page
├── contact/         # Contact page
├── portfolio/       # Portfolio page
├── services/        # Services page
├── why-spidertech/  # Why Spidertech page

├── index.html       # Home page
├── 404.html         # Error page
├── favicon.ico      # Browser favicon
└── [other assets]   # Images, SVGs, etc.
```

## 🔄 **Continuous Deployment**

### **GitHub Actions (Optional)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to S3
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: aws s3 sync out/ s3://your-bucket-name/ --delete
      - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} --paths "/*"
```

## 🚨 **Troubleshooting**

### **Common Issues:**

1. **Build Fails:**

   - Check for TypeScript errors
   - Ensure all dependencies are installed
   - Run `npm run lint` to check for issues

2. **S3 Upload Fails:**

   - Verify AWS credentials: `aws sts get-caller-identity`
   - Check bucket permissions
   - Ensure bucket exists and is accessible

3. **Website Not Loading:**

   - Verify static website hosting is enabled
   - Check bucket policy allows public read access
   - Ensure index.html is set as default document

4. **Logo Not Displaying:**
   - Check file paths in the build output
   - Verify logo files are in the `out/logo/` directory
   - Test direct access to logo URLs

## 📞 **Support**

If you encounter issues:

1. Check the build logs for errors
2. Verify AWS credentials and permissions
3. Test the website locally first: `npm run dev`
4. Check S3 bucket configuration

## 🎉 **Success!**

Once deployed, your website will be available at:

- **S3 Website URL:** `https://your-bucket-name.s3-website-region.amazonaws.com`
- **Custom Domain:** `https://your-domain.com` (if configured)
