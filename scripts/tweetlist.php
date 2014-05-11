<?php 
	include('twitter-auth.php');
	file_put_contents("../data/tweetlist.json", $tweets);
?>