# Water Information Collection Form

This form collects information from users of the Indian Free Water Initiative. The data is stored in a Google Sheet for easy tracking and management.

## Features

- Phone number validation
- Automatic location detection using geolocation
- Automatic IP address collection
- Google Sheets integration
- Responsive design
- Form validation
- Error handling

## Setup Instructions

1. The form is already connected to a Google Sheet. The data will be stored with the following columns:
   - Timestamp
   - Phone
   - Batch
   - UPI
   - Location
   - Latitude
   - Longitude
   - IP Address

2. To view the collected data:
   - Open the associated Google Sheet
   - Data will be automatically appended to new rows as forms are submitted

## Usage

1. Open the form in a web browser
2. Allow location access when prompted
3. Fill in the required fields:
   - Phone Number (10 digits)
   - Batch Number
   - UPI ID
4. Click Submit
5. The form will automatically collect:
   - Current location (city/state)
   - Latitude and longitude
   - IP address
   - Timestamp

## Security Notes

- The form uses HTTPS for secure data transmission
- Location data is only collected with user permission
- Form submissions are validated before processing
