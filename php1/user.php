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
    if ($_SESSION["zalogowany"] == 1){
          echo "Zalogowano jako ";
          if ($_SESSION['zalogowanyAdam'] == 1){
            echo "$osoba1->imieNazwisko";
          }
          elseif ($_SESSION['zalogowanaAgata'] == 1) {
              echo "$osoba2->imieNazwisko";
          }
    }
    else header("Location: index.php"); ?>

  <legend>Plik</legend>
  <form class="upload" action="user.php" method="post" enctype='multipart/form-data'>
    <input type="file" name="myfile" accept="image/gif, image/jpeg, image/png">
    <button type="submit" name="button">Prześlij</button>
  </form>
  <?php if ($_FILES["myfile"]["name"] != ""): ?>
    <img src="photo.jpg">
  <?php else:
    echo "na razie nie ma tu zdjęcia"
  ?>
    <?php endif ?>



  <legend>Wylogowywanie</legend>
  <form class="logout" action="index.php" method="post">
    <button type="submit" name="logout" value="wyloguj">Wyloguj</button>
  </form>


</body>
</html>
