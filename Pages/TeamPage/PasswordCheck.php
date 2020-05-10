<?php
$pass = '$2y$10$nDm/3ebP/LNBZl4LZuhl3.ROFxu/sZMR0lLm.Svhspco.u/CkpyKW';

echo session_status();

if(password_verify($_POST["password"],$pass)) {
    $_SESSION['access'] = "IMYUNJL";
    $hidden_page = file_get_contents("ProtectedPage/Protected.html");
    echo $hidden_page;
} else {
    $default_page = file_get_contents("Team.html");
    echo $default_page;
    echo '<script>alert("The password is invalid.")</script>';
}
?>