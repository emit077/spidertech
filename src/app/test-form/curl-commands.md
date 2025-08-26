# Manual Google Forms Testing with cURL

Use these commands to test your Google Forms integration manually from the command line.

## Current Configuration

Based on your current setup:

**Form URL**: `https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse`

**Entry IDs**:

- Name: `entry.1055265420`
- Email: `entry.1757010331`
- Phone: `entry.1139251409`
- Project Type: `entry.1405723945`
- Message: `entry.1363356056`

## Test Commands

### 1. Test Form URL Accessibility

```bash
curl -I "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse"
```

### 2. Test Individual Fields

#### Test Name Field

```bash
curl -X POST "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse" \
  -d "entry.1055265420=Test%20Name"
```

#### Test Email Field

```bash
curl -X POST "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse" \
  -d "entry.1757010331=test@example.com"
```

#### Test Phone Field

```bash
curl -X POST "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse" \
  -d "entry.1139251409=9876543210"
```

#### Test Project Type Field

```bash
curl -X POST "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse" \
  -d "entry.1405723945=Web%20Development"
```

#### Test Message Field

```bash
curl -X POST "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse" \
  -d "entry.1363356056=Test%20message"
```

### 3. Test Complete Form Submission

```bash
curl -X POST "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse" \
  -d "entry.1055265420=Test%20User" \
  -d "entry.1757010331=test@example.com" \
  -d "entry.1139251409=9876543210" \
  -d "entry.1405723945=Web%20Development" \
  -d "entry.1363356056=This%20is%20a%20test%20message"
```

### 4. Test with Different Values

#### Test with Different Project Type

```bash
curl -X POST "https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse" \
  -d "entry.1055265420=John%20Doe" \
  -d "entry.1757010331=john@example.com" \
  -d "entry.1139251409=9876543210" \
  -d "entry.1405723945=Mobile%20App%20Development" \
  -d "entry.1363356056=Need%20a%20mobile%20app%20for%20my%20business"
```

## How to Use These Commands

1. **Open Terminal/Command Prompt**
2. **Copy and paste** any of the commands above
3. **Press Enter** to execute
4. **Check the response** - you should see a redirect or success message

## Expected Responses

### Success Response

If the form submission is successful, you should see:

- A redirect to a "Thank you" page
- HTTP status code 200 or 302
- No error messages

### Error Responses

#### 400 Bad Request

- Check entry IDs are correct
- Verify form URL is correct
- Ensure all required fields are included

#### 404 Not Found

- Form URL is incorrect
- Form is not published
- Form permissions are wrong

#### 403 Forbidden

- Form is not publicly accessible
- Form requires authentication

## Troubleshooting

### If cURL Commands Work But Website Doesn't

- Check browser CORS settings
- Verify JavaScript is enabled
- Check browser console for errors

### If cURL Commands Don't Work

- Verify entry IDs are correct
- Check form URL is correct
- Ensure form is published and accessible

### URL Encoding Notes

- Spaces become `%20`
- Plus signs become `%2B`
- Special characters need to be URL-encoded

## Alternative Testing

You can also test using online tools:

1. **Postman**: Import the cURL commands
2. **Insomnia**: Use the REST client
3. **Browser**: Manually fill out the form

## Next Steps

1. **Run the cURL commands** to test manually
2. **Check your Google Form responses** to see if submissions appear
3. **Use the debug page** at `/test-form` for automated testing
4. **Compare results** between manual and automated testing
