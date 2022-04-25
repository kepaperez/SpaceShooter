<?php

include 'conexion.php';

$username = $_POST['username'];
$score = $_POST['score'];
$date = $_POST['date'];


$consulta = "insert into partidas('" .$username. "','".$score."','" .$date. "')";

mysqli_query($conexion, $consulta) or die (mysqli_error());

mysqli_close($conexion);


