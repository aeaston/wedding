<?php

/* Variables */

$name      = trim(stripslashes(htmlspecialchars($_POST['name'])));
$email     = trim(stripslashes(htmlspecialchars($_POST['email'])));
$meal      = trim(stripslashes(htmlspecialchars($_POST['meal'])));
$transport = trim(stripslashes(htmlspecialchars($_POST['transport'])));
$message   = trim(stripslashes(htmlspecialchars($_POST['message'])));


$guestlist = json_decode(file_get_contents("./../guestlist.json"), true);
if (!in_array($name, $guestlist)) {
  print "We couldn't find ".$name." on the guestlist.";
  return;
}

if (!$email) {
  print "Please provide an email address.";
  return;
}
if (!$meal) {
  print "Please provide a meal preference.";
  return;
}
if (!$transport) {
  print "Please provide a transportation preference.";
  return;
}

/* Email Template */

$to      = "placeholder@your.email";

$subject = "Wedding RSVP for ".$name;

$body   .= "Name: ".$name."<br>";
$body   .= "Email: ".$email."<br>";
$body   .= "Meal Preference: ".$meal."<br>";
$body   .= "Transport: ".$transport."<br>";
$body   .= "Message: ".$message."<br>";

$headers  = "From: ".$email."\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8";
 
mail($to, $subject, $body, $headers);

print "Success! Your RSVP has been recorded.";

?>