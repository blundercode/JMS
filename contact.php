<?php

/*
 * Script for sending E-Mail messages.
 * 
 * Note: Please edit $sendTo variable value to your email address.
 * 
 */

// please change this to your E-Mail address
$sendTo = "support@pixel-industry.com";

$action = $_POST['action'];
if ($action == 'contact') {
    $name = $_POST['form_data'][0]['Name'];
    $email = $_POST['form_data'][0]['Email'];
    
    if(!isset($_POST['form_data'][0]['Subject']) && empty($_POST['form_data'][0]['Subject'])){
        $subject = 'Contact form Message.';
    }else{
        $subject = $_POST['form_data'][0]['Subject'];
    }
    
    $message = $_POST['form_data'][0]['Message'];

    if ($name == "" || $email == "" || $message == "") {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }
} else if ($action == 'newsletter') {
    $email = $_POST['form_data'][0]['Email'];
    $name = $email;

    if ($email == "") {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }
    $subject = 'Newsletter Subscribe!';
    $message = 'Newsletter Subscribe for User: ' . $email;
} else if ($action == 'comment') {
    $name = $_POST['form_data'][0]['Name'];
    $email = $_POST['form_data'][0]['Email'];
    $website = $_POST['form_data'][0]['Website'];
    $message = $_POST['form_data'][0]['Message'];
    // you can change default Subject for comment form here
    $subject = 'New comment!';
    
    $message = "Website: " . $website . "\r\n"
            . "Message: " . $message . "\r\n"; 
    
    if ($name == "" || $email == "" || $message == "") {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }
} else if ($action == 'review') {
    $name = $_POST['form_data'][0]['Name'];
    $email = $_POST['form_data'][0]['Email'];    
    $message = $_POST['form_data'][0]['Message'];
    
    // you can change default Subject for comment form here
    $subject = 'New review!';
    
    if ($name == "" || $email == "" || $message == "") {
        echo "There was problem while sending E-Mail. Please verify entered data and try again!";
        exit();
    }
}

$headers = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

if (mail($sendTo, $subject, $message, $headers)) {
    echo "Message sent succesfully.";
} else {
    echo "There was problem while sending E-Mail.";
}
?>
