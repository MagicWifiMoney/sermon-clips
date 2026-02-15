const https = require('https');

const username = 'jakegiebel@fermatcommerce.com';
const password = 'fdfa2690ca8fff85';
const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

// Top domains to check based on SERP analysis
const domains = [
  'dailyverses.net',
  'bibledice.com',
  'randomwordgenerator.com',
  'thywordistrue.com',
  'searchthebible.com',
  'trulyrandomverse.com',
  'shepherdchat.com',
  'bibleversegenerator.com',
  'randombibleversegenerator.click',
  'randomscriptureverse.com',
  'randommer.io',
  'sarata.com',
  'bibleverses.net',
  'randombibleizer.spiffy.tech'
];

const tasks = domains.map(domain => ({
  target: domain,
  internal_links_limit: 0,
  external_links_limit: 0
}));

const postData = JSON.stringify(tasks);

const options = {
  hostname: 'api.dataforseo.com',
  port: 443,
  path: '/v3/backlinks/summary/live',
  method: 'POST',
  headers: {
    'Authorization': auth,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log(JSON.stringify(response, null, 2));
    } catch (e) {
      console.error('Error parsing response:', e);
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.write(postData);
req.end();
