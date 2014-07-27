<?
//retrieve posts
$q = $_POST['q'];
$count = $_POST['count'];
$list_id = $_POST['list_id'];
$expiry = 180;
$api = $_POST['api'];
$screen_name = $_POST['screen_name'];
$name = $_POST['name'];
$photo = $_POST['photo'];
$img = $_POST['img'];
$timeAgo = $_POST['timeAgo'];
$url = $_POST['url'];

$cache = 'cache/'.$list_id.'-tweets-cache.txt';
$date = 'cache/'.$list_id.'-tweets-date.txt';

$currentTime = time();

// Get cache time
$datefile = fopen('cache/'.$list_id.'-tweets-date.txt', 'r');
$cacheDate = fgets($datefile);
fclose($datefile);

/*
check if cache is older than 6 minutes (360 seconds). If not, read 
tweets from cache and output data in json format. 
 */

if (floor(abs(($currentTime-$cacheDate))) <= $expiry && $cacheDate) {

	$cachefile = fopen('cache/'.$list_id.'-tweets-cache.txt', 'r');
	$data = fgets($cachefile);
	fclose($cachefile);
	echo $data;
}

else { // if cache is older than 6 minutes, renew the cache


//We use already made Twitter OAuth library
//https://github.com/mynetx/codebird-php
require_once ('codebird.php');


//Twitter OAuth Settings, enter your settings here:
$CONSUMER_KEY = 'nU8eVyjZRX3hNhs7sL0Yg';
$CONSUMER_SECRET = 'EV4mZiCeaAXZ5lAclMxaYfTtWbajC4LQ8Ljl8hBXJA';
$ACCESS_TOKEN = '1727667812-Rt6VE2Ae94aMuzB4638GfDlfESI5gG54FpDSvnq';
$ACCESS_TOKEN_SECRET = 'VdwlRVZq3UlvbPCoQeDektbSpYjuPNR6XnucNiPHpI';


//Get authenticated
Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);
$cb = Codebird::getInstance();
$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);


//https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
//https://dev.twitter.com/docs/api/1.1/get/search/tweets
$params = array(
	
	'q' => $q,
	'count' => $count,
	'list_id' => $list_id,
	'screen_name' => $screen_name,
	'name' => $name,
	'photo' => $photo,
	'img' => $img,
	'timeAgo' => $timeAgo,
	'url' => $url,
	// 'api' => $api
);

//Make the REST call
$data = (array) $cb->$api($params);

// update the cache file
$cachefile = fopen($cache, 'wb');
fwrite($cachefile,utf8_encode(json_encode($data)));
fclose($cachefile);

// update date file
$datefile = fopen($date, 'wb');
fwrite($datefile, utf8_encode(time()));
fclose($datefile);


//Output result in JSON, getting it ready for jQuery to process
echo json_encode($data);
}
?>