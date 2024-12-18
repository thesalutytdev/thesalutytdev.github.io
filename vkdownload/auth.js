// Replace these with your own values
const clientId = '84arU4Jkgk9BqaAdbAHW';
const clientSecret = '828113a4828113a4828113a45581a7b46088281828113a4e5e3f4d4ef3442ca72ca7254';
const redirectUri = 'https://thesalutytdev.github.io';

// Step 1: Redirect the user to the authorization URL
const authorizationUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

// Redirect the user to the authorization URL
window.location.href = authorizationUrl;

// Step 2: Handle the redirect and get the authorization code
// This will depend on your specific application and how you handle redirects
// For example, you might use a library like React Router or Angular Router

// Step 3: Exchange the authorization code for an access token
async function getAccessToken(code) {
  const tokenUrl = 'https://oauth.vk.com/access_token';
  const params = {
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code: code,
  };
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params),
  });
  const data = await response.json();
  return data.access_token;
}

// Step 4: Use the access token to make API requests
async function makeApiRequest(accessToken) {
  const api_url = 'https://api.vk.com/method/users.get';
  const params = {
    access_token: access_token,
    v: '5.131',
  };
  const response = await fetch(api_url, {
    method: 'GET',
    params,
  });
  const data = await response.json();
  return data;
}

async function getUserJsonInfo(accessToken) {
  const api_url = 'https://api.vk.com/method/users.get';
  const params = {
    access_token: accessToken,
    v: '5.131',
  };
  const response = await fetch(api_url, {
    method: 'GET',
    params,
  });
  const data = await response.json();
  return data;
}