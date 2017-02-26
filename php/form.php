<?php

/* Variables */

$name     = trim(stripslashes(htmlspecialchars($_POST['name'])));
$email    = trim(stripslashes(htmlspecialchars($_POST['email'])));
$phone    = trim(stripslashes(htmlspecialchars($_POST['phone'])));
$message  = trim(stripslashes(htmlspecialchars($_POST['message'])));

/* Email Template */

$to      = "place@your.email";

$subject = "Contact form submitted by:  $name";

$body    = "You have received a new message. <br>";
$body   .= "Name: ".$name."<br>";
$body   .= "Email: ".$email."<br>";
$body   .= "Phone: ".$phone."<br>";
$body   .= "Message: ".$message."<br>";

$headers  = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8";
 
mail($to, $subject, $body, $headers);

die("Success! Your message has been sent.");

?>