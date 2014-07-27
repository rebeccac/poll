  <?php 
session_start();
  include('includes/dtd.inc'); ?>
     <title>PollieTweets - Contact Us</title>
     
  <?php 
  include('includes/head.inc');
  include('includes/header.inc'); 
  include('includes/nav.inc'); 
  
  $errors = get_user_data($_POST);

  if (isset($_POST['submitBtn'])) {
    
    $email_to = "pollietweets@pollietweets.com";
    $email_subject = "PollieTweets feedback";
    if (count($errors) == 0) { ?>
      <div class="thankyou">Thank you for your feedback</div>
      
      <?php 
      $name = htmlentities($_POST['name']);
      $email = htmlentities($_POST['email']);
      $comments = htmlentities($_POST['comments']);
        
      $email_message = "Form details below.\n\n";
      $email_message .= "Name: ".$name."\n\n";
      $email_message .= "Email: ".$email."\n\n";
      $email_message .= "Comments: ".$comments."\n\n";

      $headers = 'From: '.$email."\r\n".
      'Reply-To: '.$email."\r\n" .
      'X-Mailer: PHP/' . phpversion();
      mail($email_to, $email_subject, $email_message, $headers);  
      exit();
  } 
} ?>

  <div id="contactform">
    <h3>Send an E-mail</h3>
    <div class="clear"></div>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" id="contact" action=autocomplete="on">
      <fieldset>
        <legend>Your details:</legend>
        <br>
          <ol>
            <li class="details">
              <label for="name" class="label">Name:*</label>
              <?php if(!isset($errors['name'])){ ?>
                  <input name="name" id="name" type="text" placeholder="First and last name" value="<?php echo $_SESSION['contact']['name'] ?>" required>
        <?php } else {
                  echo "<div class=\"errors\">".$errors['name']."</div>"; ?>
                <input name="name" id="name" type="text" placeholder="First and last name" required>
        <?php } ?>
            </li>

            <li class="details">
              <label for="email" class="label">E-mail:*</label>
              <?php if(!isset($errors['email'])) { ?>
                  <input name="email" id="email" type="email" placeholder="example@example.com"  value="<?php echo $_SESSION['contact']['email'] ?>" required>
            <?php } else { 
                echo "<div class=\"errors\">".$errors['email']."</div>";?>
            <input name="email" id="email" type="email" placeholder="example@example.com"  required>
            <?php
              } 
              ?>
            </li>
          </ol>
      </fieldset>

      <div class="clear"></div>
      
      <fieldset>
        <legend>Your comments:</legend>
        <br>
          <ol>
            <li class="comments">
              <label for="comments" class="label">Feedback:*</label>
              <?php if(!isset($errors['comments'])) { ?>
                  <textarea name="comments" id="comments"  rows="10" autocomplete="off" required><?php echo $_SESSION['contact']['comments'] ?></textarea>
              <?php } else {
                  echo "<div class=\"errors\">".$errors['comments']."</div>"; ?>
                  <textarea name="comments" id="comments"  rows="10" autocomplete="off" required></textarea>

             <?php 
                } 
            ?>
            </li>
          </ol>
      </fieldset>
      <br>
      
      <fieldset>
        <input type="submit" name="submitBtn" id="submitBtn" value="Submit">
      </fieldset>

    </form>
  </div>


<?php include('includes/footer.inc'); ?>