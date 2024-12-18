import { getAccessToken, getUserJsonInfo } from './auth.js';

async function main() {
    const accessToken = await getAccessToken();
    const userInfo = await getUserJsonInfo(accessToken);
    console.log(userInfo);
}