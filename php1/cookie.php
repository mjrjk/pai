<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
  <title>PHP</title>
  <meta charset='UTF-8' />
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php
    require_once("funkcje.php");
    if(isSet($_GET["czas"])){
      $czas = $_GET["czas"];
      setcookie("ciasteczko", "mniam", time() + ($czas), "/");
      echo "Dodano cookie! ";
      if(isSet($_COOKIE["ciasteczko"])) {echo $_COOKIE["ciasteczko"];}
    }
  ?>
  <legend>Wstecz button</legend>
  <form action="index.php" method="post">
    <button type="submit" name="button">Wstecz</button>
  </form>
</body>
</html>
