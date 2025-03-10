<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */
// an email address that will receive the email with the output of the form
 $sendTo = 'de05164@naver.com';
// // message that will be displayed when everything is OK :)
// $okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
// // If something goes wrong, we will display this message.
// $errorMessage = 'There was an error while submitting the form. Please try again later';

/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
//error_reporting(E_ALL & ~E_NOTICE);
//error_reporting(0);
// try{
//
//     if (count($_POST) == 0 && !isset($_POST['name']) && !isset($_POST['email']) && !isset($_POST['message'])){
//         throw new Exception('Form is empty'); //Exception 앞에 \ 없앰
//     }
//   }
//
    // an email address that will be in the From field of the email.
    $from = $_POST['email'];
    // The message send in email
    $message = $_POST['message'];
    // subject of the email
    $subject = $_POST['name'];
    $headers = 'From: ' . $from . "\r\n" .
        'Reply-To:' . $sendTo . "\r\n" .
        'X-Mailer: PHP/' . phpversion();



    // Send email
    $result = mail($sendTo, $subject, $message, $headers);



if($result){$msg='메일을 전송했습니다';  echo "<script>alert('{$msg}'); window.location.href='https://leekyungminweb.kr/'; </script>"; }else{echo "실패";}
?>
