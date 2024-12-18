import { getAccessToken, getUserJsonInfo } from './auth.js';

async function main() {
    const accessToken = await getAccessToken();
    const userInfo = await getUserJsonInfo(accessToken);

    document.cookie = accessToken

    console.log(userInfo);
}

async function auth() {
    await main();    
}