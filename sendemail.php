<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];


$message = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $msg;

	

mail('asutrane@gmail.com', 'ChrisPerko.net Request', $message, 'From: noreply@chrisperko.net\n');

?>



<!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

    <!-- Custom styling -->
    <link rel="stylesheet" href="styles/custom.css"/>



<div class='container text-center'>
<h1>Thank you!</h1>
<h3>I will get back to you shortly!</h3>
</div>
