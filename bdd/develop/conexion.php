<?php
$hostname ='localhost';
$database ='ssdatabase';
$usename= 'root';
$password = '';
$conexion= new mysqli($hostname,$usename,$password,$database)
if($conexion->connect_error){
    echo "conexion problems"
};