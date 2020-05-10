<?php

$to = "audschool21@gmail.com";
$subject = "Website Form Submission";
$from = $_POST["email"];
$name = $_POST["name"];
$school = $_POST["school"];
$msg = $_POST["message"];
$body = "This message comes from: ".$name." from ".$school.".\n The message is: \n".$msg;

$body = wordwrap($body,70);
$headers = "From: ".$from;

mail($to,$subject,$body,$headers);
?>