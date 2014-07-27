<?php 

/*Get page's filename and retrieve Twitter list's ID */
function getListIds() {
	$url = "http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	$filename = basename($url); 
	

	switch($filename) {
		
		case "pollietweets.com":
			$list_id = 95526688;
			break;
		case "index.php":
			$list_id = 95526688;
			break;
		case "fed-lower-house.php":
			$list_id = 95526688;
			break;
		case "fed-upper-house.php":
			$list_id = 95856722;
			break;
		case "act.php":
			$list_id = 96400390;
			break;
		case "nsw-lower-house.php":
			$list_id = 95585022;
			break;
		case "nsw-upper-house.php":
			$list_id = 95860103;
			break;
		case "nt.php":
			$list_id = 95583402;
			break;
		case "qld.php":
			$list_id = 96580862;
			break;
		case "sa-lower-house.php":
			$list_id = 95526395;
			break;
		case "sa-upper-house.php":
			$list_id = 95858261;
			break;
		case "tas-lower-house.php":
			$list_id = 95811627;
			break;
		case "tas-upper-house.php":
			$list_id = 96180420;
			break;
		case "vic-lower-house.php":
			$list_id = 95532623;
			break;
		case "vic-upper-house.php":
			$list_id = 96181475;
			break;
		case "wa-lower-house.php":
			$list_id = 96239446;
			break;
		case "wa-upper-house.php":
			$list_id = 96241997;
			break;
		default:
			$list_id=0;
			break;
	}
	return $list_id;
}
	
/* Get cached tweets in JSON format from list ID */
function getJsonTweets() {
	$list_id = getListIds();
	$json_data = file_get_contents('cache/'.$list_id.'-tweets-cache.txt');
	$json = json_decode($json_data, true);
	return $json;
}


/* Find most recent tweeters from a cached Twitter list & create select menu */
function getRecentTweeters() {
	$json = getJsonTweets();
    $recenttweeters = array();
    $recenttweeters[0] = $json[0]['user']['screen_name'];
    
    for($i = 0; $i < count($json); $i++) {
      if($json[$i]['user']['screen_name']) {
          $screen_name = $json[$i]['user']['screen_name'];
      	
          $found = -1;
          for($j = 0; $j < count($recenttweeters); $j++) {
            if ($recenttweeters[$j] != $screen_name) {
              	$found = -1;
            }
            else {
              $found = 1;
              break;
            }
          }
          if ($found == -1) {
            $recenttweeters[] = $screen_name;
          }
        }
        else {
          break;
        }
      }
      natcasesort($recenttweeters);
?>
<form name="recenttweeters">
<select name="recenttweeters" size="1">
	<?php
      foreach($recenttweeters as $user) {
        echo "<option value=\"http://www.twitter.com/".$user."\">@".$user."</option>";
      }
      ?>
    </select>
    <input type="button" name="Submit" value="Go" onClick="window.open(recenttweeters.value,'newtab'+recenttweeters.value)">
</form>
    <?php
}


function getRecentTweetersB() {
	$json = getJsonTweets();
	$recenttweeters = array();
	$recenttweeters[$json[0]['user']['screen_name']] = $json[0]['user']['name'];

	/* *********************************************************************** */

	for ($i = 0; $i < count($json); $i++) {
		if($json[$i]['user']['screen_name']) {
          $screen_name = $json[$i]['user']['screen_name'];
          //echo $screen_name;
          $found = -1;
          
          foreach ($recenttweeters as $username => $name) {
          	if ($screen_name != $username) {
          		$found = -1;
          	}
          	else {
          		$found = 1;
          		break;
          	}
          }
          if ($found == -1) {
          	$recenttweeters[$screen_name] = $json[$i]['user']['name'];
          }
		}
		else {
			break;
		}
	}
	sort($recenttweeters);
	 print_r($recenttweeters);

	?>
<form name="recenttweeters">
<select name="recenttweeters" size="1">
	<?php
      foreach($recenttweeters as $screenname => $name) {
        echo "<option value=\"http://www.twitter.com/".$screenname."\">".$name."</option>";
      }
      ?>
    </select>
    <input type="button" name="Submit" value="Go" onClick="window.open(recenttweeters.value,'newtab'+recenttweeters.value)">
</form>
    <?php
}


function get_user_data($userdata) {

	   $email_pattern = "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/";

	   $errors = array();

	if(isset($userdata['submitBtn'])) {
		$_SESSION['contact']['name'] = htmlentities($userdata['name']);
        if (empty($_SESSION['contact']['name'])) {
            $errors['name']="Please enter your name";
        }

        $_SESSION['contact']['email'] = htmlentities($userdata['email']);
        if (empty($_SESSION['contact']['email']) || !preg_match($email_pattern, $userdata['email'])) {
            $errors['email']="Please enter a valid e-mail address";
        }

        $_SESSION['contact']['comments'] = htmlentities($userdata['comments']);
        if (empty($_SESSION['contact']['comments'])) {
            $errors['comments']='Please enter some comments';
        }
	}
	return $errors;
}

?>