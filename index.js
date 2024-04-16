const { TwitterApi } = require('twitter-api-v2')

const client = new TwitterApi({
    appKey: '***',
    appSecret: '***',
    accessToken: '****',
    accessSecret: '***',
    bearerToken: "***",
});
const rwClient = client.readWrite;
const textTweet = async () => {
    try {
        let result = await rwClient.v2.tweet("hello guys")
            console.log("success");
            console.log("result: ", result);
    } catch (error) {
        console.error(error);
    }
};


textTweet()

const tweetId = '*****'

const deleteTweet = async () => {
    try {
        let result = await client.v2.deleteTweet(tweetId);
        console.log("result: ", result);
        console.log(`Tweet ${tweetId} deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting tweet ${tweetId}:`, error);
    }
}

const tweetId = '*****'
deleteTweet(tweetId)

ReferenceLink :https://www.geeksforgeeks.org/tweet-using-node-js-and-twitter-api/
