import fetch from 'node-fetch';
import dotenv from 'dotenv';
import HttpsProxyAgent from 'https-proxy-agent';

dotenv.config();


(async () => {
    // await rotateWithScrapingBee();

    await rotateWithBrightData();

    // await normalScrape();


})();

async function rotateWithScrapingBee() {
    const url = 'https://lumtest.com/myip.json';

    const response = await fetch(`https://app.scrapingbee.com/api/v1?url=${url}&api_key=${process.env.scrapingBeeApiKey}&render_js=false&session_id=${Math.ceil(Math.random() * 10000000)}`);
    // const response = await fetch(`https://app.scrapingbee.com/api/v1?url=${url}&api_key=${process.env.scrapingBeeApiKey}&render_js=false&session_id=7`);

    const json = await response.json();

    console.log('json', json);
}

async function rotateWithBrightData() {
    const url = 'https://lumtest.com/myip.json';

    const response = await fetch(url, {
        agent: new HttpsProxyAgent.HttpsProxyAgent(`https://${process.env.luminatiUsername}-session-rand${Math.ceil(Math.random() * 10000000)}:${process.env.luminatiPassword}@zproxy.lum-superproxy.io:22225`)
        // agent: new HttpsProxyAgent.HttpsProxyAgent(`https://${process.env.luminatiUsername}-session-rand7:${process.env.luminatiPassword}@zproxy.lum-superproxy.io:22225`)
    });

    const json = await response.json();

    console.log('json', json);
}


async function normalScrape() {
    const url = 'https://lumtest.com/myip.json';

    const response = await fetch(url);

    const json = await response.json();

    console.log('json', json);
}
