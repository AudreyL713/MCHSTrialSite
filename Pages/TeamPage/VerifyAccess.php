<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$access_hash = '$2y$10$yB8FrpmKqOzF6drJlL0S2OOvrCA/8R4bGWpnS0MWXsmGlXN7Wba66';

if(isset($_SESSION['access'])) {
    $hidden_page = file_get_contents("Protected.html");
    echo $hidden_page;
} else {
    $default_page = file_get_contents("Team.html");
    echo $default_page;
}
?>