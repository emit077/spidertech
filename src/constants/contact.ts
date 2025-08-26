export const CONTACT_INFO = {
    // Phone Numbers
    PHONE: {
        PRIMARY: '+91 8305050674',
        SECONDARY: '+91 9993317172',
        PRIMARY_TEL: '+918305050674',
        SECONDARY_TEL: '+919993317172'
    },
    
    // WhatsApp
    WHATSAPP: {
        NUMBER: '+91 8305050674',
        TEL: '+918305050674',
        LINK: 'https://wa.me/918305050674'
    },
    
    // Email Addresses
    EMAIL: {
        PRIMARY: 'info@spidertech.in',
        SECONDARY: 'hello.spidertechindia@gmail.com',
        
        PRIMARY_MAILTO: 'mailto:info@spidertech.in',
        SECONDARY_MAILTO: 'mailto:hello.spidertechindia@gmail.com'
    },
    
    // Address
    ADDRESS: {
        LOCATION: 'Raipur, Chhattisgarh, India',
        DESCRIPTION: 'Our main office location'
    },
    
    // Working Hours
    WORKING_HOURS: {
        SCHEDULE: 'Mon - Fri: 9AM - 6PM',
        TIMEZONE: 'IST (Indian Standard Time)',
        SHORT: 'Mon-Fri, 9AM-6PM'
    },
    
    // Social Media (if needed)
    SOCIAL: {
        FACEBOOK: 'https://facebook.com/spidertech',
        TWITTER: 'https://twitter.com/spidertech',
        INSTAGRAM: 'https://instagram.com/spidertech',
        LINKEDIN: 'https://linkedin.com/company/spidertech'
    }
} as const;

// Helper functions for common contact operations
export const getContactInfo = () => ({
    phone: CONTACT_INFO.PHONE.PRIMARY,
    whatsapp: CONTACT_INFO.WHATSAPP.NUMBER,
    email: CONTACT_INFO.EMAIL.PRIMARY,
    address: CONTACT_INFO.ADDRESS.LOCATION,
    workingHours: CONTACT_INFO.WORKING_HOURS.SCHEDULE
});

export const getContactLinks = () => ({
    phone: `tel:${CONTACT_INFO.PHONE.PRIMARY_TEL}`,
    whatsapp: CONTACT_INFO.WHATSAPP.LINK,
    email: CONTACT_INFO.EMAIL.PRIMARY_MAILTO,
    address: '#'
});
