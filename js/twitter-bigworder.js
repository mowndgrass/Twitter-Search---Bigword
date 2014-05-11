$(document).ready(function() {
    function getTweet() {
        $.ajax({
            type:"GET",
            url:"../data/tweetlist.json", // This JSON file is automatically created and filled by tweetlist.php
            dataType:"json",
            async:false,
            success:function(tweets) {

                function urlify(tweet) {
                    var urlRegex = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g; // Regex, we're only concerned with http & https since Twitter will only feed us http://t.co/ links
                    return tweet.replace(urlRegex, function(url) { // Run the string through the regex and return the url
                        return '<a href="' + url + '" target="_blank" rel="nofollow">' + url + '</a>'; // Wrap that url in an anchor tag
                    })
                }

                // Let's get the tweet from the JSON array
                var rand = Math.floor(Math.random()*100); // Get a random number up to 100 (since 100 tweets are stored at any one time)
                var tweetText = tweets["statuses"][rand]["text"]; // Use that random number to pick the "text" value from one of the tweets
                var tweet = tweetText.split(/i really like/ig).pop(); // Split the tweet text at the point you want, and output everything after that

                var tweetWithURLs = urlify(tweet); // Run the tweet through the URLifier.

                // Now move on to the user's information
                var user = tweets["statuses"][rand]["user"] // declare user as a variable to save time typing it out below

                var screen_name = user["screen_name"]; // Fetch the user's handle
                var tweetID = tweets["statuses"][rand]["id_str"]; // The ID of the post so we can construct a link

                // I suck with JavaScript (sorry) - this part can easily be achieved 
                // without jQuery, but this was made in a hurry, and we have jQuery for AJAX anyway. 
                // I'll come back to this when I have time.
                $(".tweet").append(tweetWithURLs); // Replace .tweet with your text container
                $(".screen-name").html("— <a href='https://twitter.com/" + screen_name + "/status/" + tweetID + "' target='_blank'>@" + screen_name + "</a>");
            }
        });
    }
    getTweet();
    });

    window.onload = function(){
        updatetags(); // Wrap hashtags and at-links with anchor tags
    };