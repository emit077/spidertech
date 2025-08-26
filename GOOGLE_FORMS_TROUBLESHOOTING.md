# Google Forms 404 Error Troubleshooting Guide

If you're getting a 404 error when submitting the contact form, follow these steps to resolve the issue:

## Common Causes and Solutions

### 1. **Incorrect Form URL**

**Problem**: The form URL might be incorrect or the form might not be published.

**Solution**:

1. Go to your Google Form
2. Click the "Send" button
3. Copy the exact URL from the "Link" tab
4. Make sure the URL ends with `/formResponse` (not `/formResponse/`)
5. Update the `FORM_URL` in `src/config/google-forms.ts`

**Correct format**:

```
https://docs.google.com/forms/d/e/FORM_ID/formResponse
```

### 2. **Wrong Entry IDs**

**Problem**: The entry IDs might not match your form fields.

**Solution**:

1. Open your Google Form in a web browser
2. Right-click on each field and select "Inspect element"
3. Look for the `entry.` ID in the HTML
4. Update the `ENTRY_IDS` in `src/config/google-forms.ts`

**How to find entry IDs**:

1. Open your form in Chrome/Firefox
2. Right-click on a field → "Inspect element"
3. Look for something like: `name="entry.1234567890"`
4. The number after `entry.` is your entry ID

### 3. **Form Not Published**

**Problem**: The form might not be published or accessible.

**Solution**:

1. In your Google Form, click "Send"
2. Make sure the form is set to "Anyone with the link can respond"
3. Copy the link and test it in an incognito window

### 4. **CORS Issues**

**Problem**: Browser security policies might block the request.

**Solution**:

- This is normal with Google Forms integration
- The form will still submit successfully despite CORS warnings
- Check the browser console for any actual errors

## Debugging Steps

### Step 1: Test the Form URL

1. Open your browser's developer tools (F12)
2. Go to the Console tab
3. Submit the contact form
4. Look for these log messages:
   - "Testing Google Forms URL..."
   - "Google Forms URL is accessible"
   - "Submitting to Google Forms: [URL]"
   - "Form data: [data]"
   - "Google Forms submission completed"

### Step 2: Verify Form Data

Check that the form data being sent matches your Google Form fields:

```javascript
// Expected form data structure:
{
  "entry.1055265420": "John Doe",           // Name
  "entry.1757010331": "john@example.com",   // Email
  "entry.1139251409": "+91 98765 43210",    // Phone
  "entry.1405723945": "Web Development",    // Project Type
  "entry.1363356056": "Project details..."  // Message
}
```

### Step 3: Test Form Manually

1. Open your Google Form URL directly in a browser
2. Fill out the form manually
3. Submit it
4. Check if the response appears in your Google Form responses

## Quick Fix Checklist

- [ ] Form URL ends with `/formResponse` (no trailing slash)
- [ ] Form is published and accessible
- [ ] Entry IDs match your form fields exactly
- [ ] Form fields are in the correct order
- [ ] No extra spaces or characters in entry IDs

## Alternative Solutions

### Option 1: Use Google Apps Script

If the direct form submission continues to fail, consider using Google Apps Script:

1. In your Google Form, go to "Responses" → "More" → "Script editor"
2. Create a web app that accepts form submissions
3. Update the form submission URL to point to your script

### Option 2: Use a Form Service

Consider using a form service like:

- Formspree
- Netlify Forms
- GetForm
- Web3Forms

### Option 3: Email Fallback

Add an email fallback option:

```javascript
// In case Google Forms fails, send email
if (!google_success) {
  // Send email using a service like SendGrid or EmailJS
  await sendEmailFallback(formData);
}
```

## Testing Your Setup

1. **Test the form URL**:

   ```bash
   curl -I "YOUR_FORM_URL"
   ```

2. **Test form submission**:

   ```bash
   curl -X POST "YOUR_FORM_URL" \
     -d "entry.1055265420=Test&entry.1757010331=test@example.com"
   ```

3. **Check browser console** for any JavaScript errors

## Still Having Issues?

If you're still experiencing problems:

1. **Double-check all entry IDs** - they must be exact
2. **Verify form permissions** - make sure it's publicly accessible
3. **Test in incognito mode** - to rule out browser cache issues
4. **Check network tab** - look for failed requests
5. **Contact support** - at info@spidertech.in

## Common Entry ID Patterns

Google Forms entry IDs typically follow these patterns:

- `entry.1234567890` - Standard format
- `entry.1234567890_sentinel` - Sometimes includes "\_sentinel"
- `entry.1234567890.1234567890` - Sometimes includes additional numbers

**Important**: Remove any `_sentinel` suffix from entry IDs in your configuration.
