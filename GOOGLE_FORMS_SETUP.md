# Google Forms Integration Setup Guide

This guide will help you set up Google Forms integration for the contact form on your Spidertech website.

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form"
3. Give your form a title (e.g., "Spidertech Contact Form")

## Step 2: Add Form Fields

Add the following fields to your form in this exact order:

### 1. Full Name

- **Type**: Short answer
- **Required**: Yes
- **Question**: "Full Name"

### 2. Email Address

- **Type**: Short answer
- **Required**: Yes
- **Question**: "Email Address"

### 3. Phone Number

- **Type**: Short answer
- **Required**: No
- **Question**: "Phone Number"

### 4. Project Type

- **Type**: Multiple choice
- **Required**: No
- **Question**: "Project Type"
- **Options**:
  - Web Development
  - Mobile App Development
  - UI/UX Design
  - Digital Marketing
  - E-commerce Solution
  - Custom Software
  - Consultation
  - Other

### 5. Project Details

- **Type**: Long answer
- **Required**: Yes
- **Question**: "Project Details"

## Step 3: Get Form URL and Entry IDs

1. Click the "Send" button in your form
2. Copy the form URL (it will look like: `https://docs.google.com/forms/d/e/1FAIpQLSd.../formResponse`)
3. To get entry IDs:
   - Right-click on each field and select "Inspect element"
   - Look for the `entry.` ID in the HTML (e.g., `entry.123456789`)
   - Note down each entry ID

## Step 4: Update Configuration

1. Open `src/config/google-forms.ts`
2. Replace the placeholder values with your actual form URL and entry IDs:

```typescript
export const GOOGLE_FORMS_CONFIG = {
  FORM_URL:
    "https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse",

  ENTRY_IDS: {
    NAME: "entry.123456789", // Replace with actual entry ID for name
    EMAIL: "entry.987654321", // Replace with actual entry ID for email
    PHONE: "entry.111111111", // Replace with actual entry ID for phone
    PROJECT_TYPE: "entry.333333333", // Replace with actual entry ID for project type
    MESSAGE: "entry.666666666", // Replace with actual entry ID for message
  },
};
```

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your Google Form responses to confirm the data is being received

## Step 6: Set Up Email Notifications (Optional)

1. In your Google Form, click the "Responses" tab
2. Click the three dots menu (⋮)
3. Select "Get email notifications for new responses"
4. Enter your email address
5. Click "Save"

## Troubleshooting

### Form not submitting

- Check that all entry IDs are correct
- Ensure the form URL is correct
- Check browser console for any errors

### Data not appearing in Google Forms

- Verify that the form is published
- Check that the entry IDs match the field order
- Ensure the form URL ends with `/formResponse`

### CORS errors

- This is normal with Google Forms integration
- The form will still submit successfully despite CORS warnings

## Security Considerations

- Google Forms are public by default
- Consider adding CAPTCHA to prevent spam
- Monitor form responses for suspicious activity
- Consider rate limiting if needed

## Alternative: Google Apps Script

For more advanced functionality, you can use Google Apps Script:

1. In your Google Form, go to "Responses" → "More" → "Script editor"
2. Write a script to process form submissions
3. Send custom email notifications
4. Store data in Google Sheets
5. Integrate with other Google services

## Support

If you need help with the setup, contact us at info@spidertech.in
