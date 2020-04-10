<?php session_start(); ?>
<?php require 'funkcje.php' ?>
<?php
if(isSet($_POST["send"])) {
  $login = test_input($_POST["login"]);
  $password = test_input($_POST["password"]);
  header("Location: logowanie.php");
  //echo "Twój login: $login, Twoje hasło: $password";
if($login == $osoba1->login){
  if($password == $osoba1->haslo){
    $_SESSION['zalogowanyAdam'] = 1;
    $_SESSION['zalogowany'] = 1;
    header("Location: user.php");
  }
}
else if($login == $osoba2->login){
  if($password == $osoba2->haslo){
    $_SESSION["zalogowanaAgata"] = 1;
    $_SESSION["zalogowany"] = 1;
    header("Location: user.php");
  }
}
else header("Location: index.php");
};
?>
