<?php
$servername = "localhost";
$username = "root"; // Your database username
$password = "";     // Your database password
$dbname = "login_system"; // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
