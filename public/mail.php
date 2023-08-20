<?php 

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "abhinaysingh525@gmail.com";
    $subject = "Mail From Website";

    $headers = "From: ".$name. "\r\n" .
    "CC: abhinaysingh9696@gmail.com";

    $txt = "You have recieved an email from".$name ."\r\nEmail: " .$email ."\r\nMessage: " .$message;

    if($email!=NULL){
        mail($to, $subject, $message, $headers);
    }

    header('Location:thankyou.html')


?>