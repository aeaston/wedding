<?php

/* Variables */

$name      = trim(stripslashes(htmlspecialchars($_POST['name'])));
$email     = trim(stripslashes(htmlspecialchars($_POST['email'])));
$meal      = trim(stripslashes(htmlspecialchars($_POST['meal'])));
$transport = trim(stripslashes(htmlspecialchars($_POST['transport'])));
$message   = trim(stripslashes(htmlspecialchars($_POST['message'])));

$error = false;

$guestlist = json_decode(file_get_contents("./../guestlist.json"), true);
if (!in_array($name, $guestlist)) {
  print "We couldn't find ".$name." on the guestlist.";
  $error = true;
}
elseif (!$email) {
  print "Please provide an email address.";
  $error = true;
}
elseif (!$meal) {
  print "Please provide a meal preference.";
  $error = true;
}
elseif (!$transport) {
  print "Please provide a transportation preference.";
  $error = true;
}

/* Email Template */

$to_emails = array("placeholder@your.email");

$subject = "Wedding RSVP for ".$name;
if ($error) $subject = "Invalid ".$subject;

$body   .= "Name: ".$name."<br>";
$body   .= "Email: ".$email."<br>";
$body   .= "Meal Preference: ".$meal."<br>";
$body   .= "Transport: ".$transport."<br>";
$body   .= "Message: ".$message."<br>";

$headers  = "From: ".$email."\r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8";

foreach ($to_emails as $to) {
  mail($to, $subject, $body, $headers);
}

if (!$error) {
  print "Success! Your RSVP has been recorded.";
}
?>
