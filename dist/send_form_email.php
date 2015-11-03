<?php
$data = array();
$errors = array();
if(isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED

  $email_to = "chloe@s1t2.com.au,yuchao.sydneyuni@gmail.com";

  $email_subject = "S1T2 Landing Page";


  function died($errors) {

    // your error code can go here

    $data['success'] = false;
    $data['errors']  = $errors;

    // return all our data to an AJAX call
    echo json_encode($data);

    die();

  }



  //validation expected data exists

  if(!isset($_POST['name']) ||

  !isset($_POST['email']) ||

  !isset($_POST['phone']) ||

  !isset($_POST['message'])) {

    $errors['required_form'] = 'Severe problem, Please post this to developer!';

    died($errors);

  }



  $name = $_POST['name']; // required

  $email = $_POST['email']; // required

  $phone = $_POST['phone']; // required

  $message = $_POST['message'];

  $error_message = "";

  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email)) {

    //$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    $errors['email'] = 'Please enter a valid email address';
  }

  $string_exp = "/[\s\S]/";

  if(!preg_match($string_exp,$name)) {

    //$error_message .= 'The First Name you entered does not appear to be valid.<br />';
    $errors['name'] = 'Please enter your name';
  }

  //$phone_exp = '/^\D*0(\D*\d){9}\D*$/';
  $phone_exp = '/[\s\S]/';

  if(!preg_match($phone_exp,$phone)) {

    //$error_message .= 'The Last Name you entered does not appear to be valid.<br />';
    $errors['phone'] = 'Please enter a valid phone number';
  }

  if(strlen($message) < 2) {

    //$error_message .= 'The Comments you entered do not appear to be valid.<br />';
    $errors['message'] = 'Please leave a message';
  }

  // if(strlen($error_message) > 0) {
  //
  //   died($error_message);
  //
  // }

  if(!empty($errors)) {
    died($errors);
  }

  $email_message = "";



  function clean_string($string) {

    $bad = array("content-type","bcc:","to:","cc:","href");

    return str_replace($bad,"",$string);

  }


  $email_message .= "From: ".clean_string($name)."\n\n";

  $email_message .= "E-Mail: ".clean_string($email)."\n\n";

  $email_message .= "Phone: ".clean_string($phone)."\n\n";

  $email_message .= "Message: ".clean_string($message)."\n\n";

  // create email headers

  $headers = 'From: '.$email."\r\n".

  'Reply-To: '.$email."\r\n" .

  'X-Mailer: PHP/' . phpversion();

  @mail($email_to, $email_subject, $email_message, $headers);

  $data['success'] = true;
  $data['errors'] = 'Success!';
  // return all our data to an AJAX call
  echo json_encode($data);

}else {
  $data['success'] = false;
  $data['errors'] = 'No email is set!';
  // return all our data to an AJAX call
  echo json_encode($data);
}

?>
