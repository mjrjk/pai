<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
<title>PHP</title>
<meta charset='UTF-8' />
<link rel="stylesheet" href="style.css">
<?php require 'funkcje.php' ?>
</head>
<body>
</body>
  <?php
    echo "<h1>Nasz system</h1>";
    if (isSet($_POST["logout"])){
      $zalogowany = 0;
    }
  ?>
  <legend>Formularz logowania</legend>
  <form class="login" action="logowanie.php" method="post">
    <div>
      <label>Login:</label>
      <input type="text" name="login">
    </div>
    <div>
      <label>Hasło:</label>
      <input type="password" name="password">
    </div>
    <button type="submit" name="send">Zaloguj</button>
  </form>
  <legend>Obsługa cookies</legend>
  <form action="cookie.php" method="get">
    <div><label>Czas życia cookie: </label><input type="number" name="czas"></div>
    <button type="submit">Utwórz Cookie</button>
    <?php
      if(isSet($_COOKIE["ciasteczko"])){
        echo "Twoje ciasteczko:\n".$_COOKIE["ciasteczko"];

      }
    ?>
  </form>
</html>
