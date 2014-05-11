<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Things that Twitter really likes.</title>
        <link rel="stylesheet" href="screen.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> <!-- Dependency -->
        <script src="/js/add-twitter-links.min.js" type="text/javascript" charset="utf-8"></script> <!-- Dependency, included with original attribution -->
    </head>
    <body>
    	<div class="tweet-container">
    		<h1 class="tweet">I really like </h1> <!-- Put your prefix text here, since we stripped everything up to and including this text in the JS,
                                                        Don't forget to include a space at the end -->
    		<span class="screen-name"></span> <!-- The @user_name will be placed here -->
    	</div>

        <div class="buttons">
            <!-- Sorry guys, these buttons are just to make users refresh the page and serve up another Tweet -->
            <button class="another" onClick="window.location.reload()">I like that too</button>
            <button class="another" onClick="window.location.reload()">I don't really like that</button>
        </div>

    	<div class="contact">
    		<a href="https://twitter.com/3189DM">@3189DM</a>
    	</div>

    <script src="/js/twitter-bigworder.js" type="text/javascript" charset="utf-8"></script>

    </body>
</html>