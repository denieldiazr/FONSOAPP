<?php 
include "config.php";

if(isset($_POST['producto'])){
    $prod = $_POST['producto'];
    $cant = $_POST['cantidad'];
    $prec = $_POST['precio'];

    $sql="insert into pedidos (codigo,producto,cant,precio) values ('00001','$prod','$cant','$prec')";
    $result = mysqli_query($conn,$sql);
    $ret;
    if($result){
        $ret = 1;
    }else $ret = 0;

    echo $ret;
    exit;
}

?>