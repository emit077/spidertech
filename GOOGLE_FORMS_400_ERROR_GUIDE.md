# Google Forms 400 Error Troubleshooting Guide

A 400 error means "Bad Request" - the server received the request but couldn't process it due to invalid data.

## Common Causes of 400 Errors

### 1. **Incorrect Entry IDs**

**Most Common Cause**: The entry IDs don't match your Google Form fields.

**How to Fix**:

1. Open your Google Form in a web browser
2. Right-click on each field and select "Inspect element"
3. Look for the `name` attribute in the HTML
4. Copy the exact entry ID

**Example**:

```html
<input name="entry.1055265420" ... />
<!-- Entry ID is: entry.1055265420 -->
```

### 2. **Wrong Form URL Format**

**Problem**: The form URL might be in the wrong format.

**Correct Format**:

```
https://docs.google.com/forms/d/e/FORM_ID/formResponse
```

**Wrong Formats**:

```
https://docs.google.com/forms/d/FORM_ID/formResponse
https://docs.google.com/forms/d/e/FORM_ID/viewform
https://docs.google.com/forms/d/e/FORM_ID/formResponse/
```

### 3. **Missing Required Fields**

**Problem**: Your form might have required fields that aren't being sent.

**Solution**:

1. Check your Google Form for any required fields
2. Make sure all required fields are included in your form data
3. Verify that required fields have values

### 4. **Invalid Field Values**

**Problem**: Some fields might have validation rules that aren't being met.

**Common Issues**:

- Email field doesn't contain a valid email format
- Phone field doesn't match expected format
- Text fields exceed character limits

## Debugging Steps

### Step 1: Verify Your Form Structure

1. **Open your Google Form** in a browser
2. **Check the field order** - it should match your entry IDs
3. **Note any required fields** (marked with \*)
4. **Check field types** (text, email, multiple choice, etc.)

### Step 2: Test Entry IDs Individually

Use this test to verify each entry ID:

```javascript
// Test each field one by one
const testField = async (entryId, value) => {
  const testData = new FormData();
  testData.append(entryId, value);

  try {
    const response = await fetch("YOUR_FORM_URL", {
      method: "POST",
      body: testData,
      mode: "no-cors",
    });
    console.log(`Field ${entryId} test: SUCCESS`);
    return true;
  } catch (error) {
    console.error(`Field ${entryId} test: FAILED`, error);
    return false;
  }
};

// Test each field
await testField("entry.1055265420", "Test Name");
await testField("entry.1757010331", "test@example.com");
await testField("entry.1139251409", "+91 98765 43210");
await testField("entry.1405723945", "Web Development");
await testField("entry.1363356056", "Test message");
```

### Step 3: Check Browser Console

Look for these messages in your browser console:

```
Testing Google Forms URL...
Google Forms URL is accessible
Testing entry IDs...
Entry ID test completed
Submitting to Google Forms: [URL]
Sending fields:
entry.1055265420: John Doe
entry.1757010331: john@example.com
entry.1139251409: +91 98765 43210
entry.1405723945: Web Development
entry.1363356056: Project details...
Google Forms submission completed
```

### Step 4: Manual Form Test

1. **Open your Google Form URL** directly in a browser
2. **Fill out the form manually** with the same data
3. **Submit it** and check if it works
4. **Compare the manual submission** with your automated submission

## Quick Fixes

### Fix 1: Update Entry IDs

If you suspect wrong entry IDs:

1. **Get the correct entry IDs**:

   ```bash
   # Open your form in browser and inspect each field
   # Look for: name="entry.1234567890"
   ```

2. **Update your config**:
   ```typescript
   export const GOOGLE_FORMS_CONFIG = {
     FORM_URL: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
     ENTRY_IDS: {
       NAME: "entry.CORRECT_ID_1",
       EMAIL: "entry.CORRECT_ID_2",
       PHONE: "entry.CORRECT_ID_3",
       PROJECT_TYPE: "entry.CORRECT_ID_4",
       MESSAGE: "entry.CORRECT_ID_5",
     },
   };
   ```

### Fix 2: Check Form Permissions

1. **Go to your Google Form**
2. **Click "Send"**
3. **Make sure it's set to "Anyone with the link can respond"**
4. **Copy the link and test in incognito mode**

### Fix 3: Validate Form Data

Make sure your form data is properly formatted:

```typescript
// Check that all required fields have values
const formData = {
  name: form_data.name.trim(),
  email: form_data.email.trim(),
  phone: form_data.phone.trim(),
  project_type: form_data.project_type,
  message: form_data.message.trim(),
};

// Validate email format
if (!/\S+@\S+\.\S+/.test(formData.email)) {
  console.error("Invalid email format");
  return false;
}
```

## Alternative Solutions

### Option 1: Use Google Apps Script

If direct form submission continues to fail:

1. **Go to your Google Form**
2. **Click "Responses" → "More" → "Script editor"**
3. **Create a web app** that accepts form submissions
4. **Update your form submission URL** to point to your script

### Option 2: Use a Form Service

Consider using a reliable form service:

- **Formspree**: `https://formspree.io/`
- **Netlify Forms**: Built into Netlify hosting
- **GetForm**: `https://getform.io/`
- **Web3Forms**: `https://web3forms.com/`

### Option 3: Email Fallback

Add an email fallback when Google Forms fails:

```typescript
if (!google_success) {
  // Send email using EmailJS or similar service
  await sendEmailFallback(formData);
}
```

## Testing Commands

### Test Form URL

```bash
curl -I "YOUR_FORM_URL"
```

### Test Form Submission

```bash
curl -X POST "YOUR_FORM_URL" \
  -d "entry.1055265420=Test&entry.1757010331=test@example.com"
```

### Test Individual Fields

```bash
# Test name field
curl -X POST "YOUR_FORM_URL" -d "entry.1055265420=Test Name"

# Test email field
curl -X POST "YOUR_FORM_URL" -d "entry.1757010331=test@example.com"
```

## Common Entry ID Issues

### Issue 1: Wrong Entry ID Format

- **Wrong**: `entry.1234567890_sentinel`
- **Correct**: `entry.1234567890`

### Issue 2: Missing Entry IDs

- **Problem**: Some fields don't have entry IDs
- **Solution**: Make sure all form fields have entry IDs

### Issue 3: Extra Characters

- **Problem**: Entry IDs have extra spaces or characters
- **Solution**: Copy entry IDs exactly as they appear

## Still Getting 400 Errors?

If you're still experiencing 400 errors:

1. **Double-check all entry IDs** - they must be exact
2. **Verify form permissions** - make sure it's publicly accessible
3. **Test in incognito mode** - to rule out browser cache issues
4. **Check network tab** - look for the exact request being sent
5. **Compare with manual submission** - see what's different
6. **Contact support** - at info@spidertech.in

## Debug Checklist

- [ ] Form URL is correct and ends with `/formResponse`
- [ ] All entry IDs match your form fields exactly
- [ ] No extra characters or spaces in entry IDs
- [ ] Form is published and publicly accessible
- [ ] All required fields are being sent
- [ ] Field values match expected formats
- [ ] No CORS issues in browser console
- [ ] Manual form submission works
