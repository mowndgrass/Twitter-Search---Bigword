$(document).ready(function() {
    function getTweet() {
        $.ajax({
            type:"GET",
            url:"data/tweetlist.json",
            dataType:"json",
            async:false,
            success:function(tweets) {
                function urlify(tweet) {
                    var urlRegex = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
                    return tweet.replace(urlRegex, function(url) {
                        return '<a href="' + url + '" target="_blank" rel="nofollow">' + url + '</a>';
                    })
                }
                // Get the tweet
                var rand = Math.floor(Math.random()*100); // Select a random number up to 100 (since we fetch 100 tweets at a time)
                var tweetText = tweets["statuses"][rand]["text"]; // Use that random number to pick one of the tweets
                // var upperCase = tweetText.toUpperCase(); // Convert to uppercase because WHY THE FUCK NOT
                var tweet = tweetText.split(/I FUCKING LOVE/ig).pop(); // Cut the tweet after "I FUCKING LOVE"
                var tweetWithURLs = urlify(tweet);

                // Now move on to the user
                user = tweets["statuses"][rand]["user"]
                name = user["screen_name"];
                link = user["url"];
                tweetID = tweets["statuses"][rand]["id_str"];

                $(".tweet").append(tweetWithURLs);
                $(".author").html("— <a href='https://twitter.com/3189DM/status/"+tweetID+"' target='_blank'>@" + name + "</a>");
            }
        });
    }
    getTweet();
    });

    window.onload = function(){
        updatetags();
    };