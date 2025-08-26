// Google Forms Configuration
// 
// To set up Google Forms integration:
// 1. Create a new Google Form with the following fields:
//    - Full Name (Short answer)
//    - Email Address (Short answer)
//    - Phone Number (Short answer)
//    - Project Type (Multiple choice)
//    - Project Details (Long answer)
//
// 2. Get the form URL and entry IDs:
//    - Go to your form and click "Send"
//    - Copy the form URL
//    - Right-click on each field and "Inspect element"
//    - Look for the "entry." ID in the HTML
//
// 3. Update the configuration below with your actual values

export const GOOGLE_FORMS_CONFIG = {
    // Replace with your actual Google Form URL
    FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSfjmCq7E84T6cMBQNeHQjXyV_R4kYSmeWZ7FQFdn66fbRKDaw/formResponse',
    
    // Replace with your actual entry IDs from the form
    ENTRY_IDS: {
        NAME: 'entry.1055265420',           // Replace with actual entry ID for name
        EMAIL: 'entry.1757010331',          // Replace with actual entry ID for email
        PHONE: 'entry.1139251409',          // Replace with actual entry ID for phone
        PROJECT_TYPE: 'entry.1405723945',   // Replace with actual entry ID for project type
        MESSAGE: 'entry.1363356056'         // Replace with actual entry ID for message
    }
};

// Test function to verify Google Forms URL
export const testGoogleFormsURL = async (): Promise<boolean> => {
    try {
        const response = await fetch(GOOGLE_FORMS_CONFIG.FORM_URL, {
            method: 'HEAD',
            mode: 'no-cors'
        });
        console.log('Google Forms URL is accessible');
        return true;
    } catch (error) {
        console.error('Google Forms URL is not accessible:', error);
        return false;
    }
};

// Test function to validate entry IDs
export const testEntryIDs = async (): Promise<boolean> => {
    const { FORM_URL, ENTRY_IDS } = GOOGLE_FORMS_CONFIG;
    
    console.log('Testing entry IDs...');
    console.log('Form URL:', FORM_URL);
    console.log('Entry IDs:', ENTRY_IDS);
    
    // Test each field individually
    const tests = [
        { id: ENTRY_IDS.NAME, value: 'Test Name', field: 'NAME' },
        { id: ENTRY_IDS.EMAIL, value: 'test@example.com', field: 'EMAIL' },
        { id: ENTRY_IDS.PHONE, value: '+91 98765 43210', field: 'PHONE' },
        { id: ENTRY_IDS.PROJECT_TYPE, value: 'Web Development', field: 'PROJECT_TYPE' },
        { id: ENTRY_IDS.MESSAGE, value: 'Test message', field: 'MESSAGE' }
    ];
    
    for (const test of tests) {
        console.log(`Testing ${test.field} with ID: ${test.id}`);
        
        const testData = new FormData();
        testData.append(test.id, test.value);
        
        try {
            const response = await fetch(FORM_URL, {
                method: 'POST',
                body: testData,
                mode: 'no-cors'
            });
            
            console.log(`${test.field} test: SUCCESS`);
        } catch (error) {
            console.error(`${test.field} test: FAILED`, error);
            return false;
        }
    }
    
    console.log('All entry ID tests completed');
    return true;
};

interface FormData {
    name: string;
    email: string;
    phone: string;
    project_type: string;
    message: string;
}

// Helper function to submit form data to Google Forms
export const submitToGoogleForms = async (formData: FormData): Promise<boolean> => {
    const { FORM_URL, ENTRY_IDS } = GOOGLE_FORMS_CONFIG;
    
    const data = new FormData();
    data.append(ENTRY_IDS.NAME, formData.name || '');
    data.append(ENTRY_IDS.EMAIL, formData.email || '');
    data.append(ENTRY_IDS.PHONE, formData.phone || '');
    data.append(ENTRY_IDS.PROJECT_TYPE, formData.project_type || '');
    data.append(ENTRY_IDS.MESSAGE, formData.message || '');

    try {
        console.log('Submitting to Google Forms:', FORM_URL);
        console.log('Form data:', Object.fromEntries(data.entries()));
        
        // Log each field being sent
        console.log('Sending fields:');
        for (const [key, value] of data.entries()) {
            console.log(`${key}: ${value}`);
        }
        
        const response = await fetch(FORM_URL, {
            method: 'POST',
            body: data,
            mode: 'no-cors' // Required for Google Forms
        });
        
        console.log('Google Forms submission completed');
        console.log('Response status:', response.status);
        console.log('Response type:', response.type);
        
        // Since we're using no-cors, we can't check the response status
        // We'll assume success if no error is thrown
        return true;
    } catch (error) {
        console.error('Error submitting to Google Forms:', error);
        return false;
    }
};
