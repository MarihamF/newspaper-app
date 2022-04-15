const request = require("request");

const news = (callback) => {
    const newsUrl = "https://newsapi.org/v2/everything?q=keyword&apiKey=36415312bbce4f6eb5af60b9592a7e88"

    request({ url:newsUrl, json:true }, (error, response) => {

        if (error) {
            callback("error occurred", undefined);
        }
        else if (response.body.message) {
            callback(response.body.message, undefined);
        }
        else {
            callback(undefined, (response.body.articles))
        }

    })
}

module.exports = news;
