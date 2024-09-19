<?php

include './config.php';


?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="estilos3.css">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="img/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
   
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;500&display=swap" rel="stylesheet">

    <title>FONSOBURGER</title>
</head>
<body>
    <div class="container">
        <header>
               
                <div><img src="img/favicon.png" alt=""><h2 class="logo">Fonso Burger</h2></div>
            <div class="action"> 
                <a href="#"><ion-icon name="cart-outline"></ion-icon></a> 
            </div>
        </header>
        

        <div class="content">
            <div class="box chats">
                <div class="data">
                    <div class="chatlist">
                        <div class="block unread">
                        
                            <div class="details" >
                             
                                <!--lO NUEVO-->
                                <div class="todo">
                                <div class="food-total">
                                    <?php
                                
                                $select_products = mysqli_query($conn, "SELECT * FROM `categoria`order by ID_CATEGORIA asc");
                                if(mysqli_num_rows($select_products) > 0){
                                   while($row = mysqli_fetch_assoc($select_products)){
                                    echo '<div class="listHead" onclick="traerProductos('.$row["ID_CATEGORIA"].');">
                                                <div><h1 class="seleccion" id="seleccion'.$row["ID_CATEGORIA"].'">'.$row["CATEGORIA"].'</h1></div>
                                    </div>
                                    ';
                                   };
                                };
                                
                                ?>
                                
                                </div>
                                <div class="productos1" id="PRO">
                                <?php
    require "config.php";
    $q="1";    
    if(isset($_POST['valor'])){
            $q = $_POST['valor'];
    }
    $mes="";
    $select_products = mysqli_query($conn, "SELECT * FROM `inventario` where DISPONIBILIDAD = '1' AND CATEGORIA = $q");
    if(mysqli_num_rows($select_products) > 0){
            while($fetch_product = mysqli_fetch_assoc($select_products)){

                $mes .= '<div class="food" data-name="p-'.$fetch_product['ID_PRODUCTO'].'" onclick="Añadir('.$fetch_product['ID_PRODUCTO'].')"> 
                         <div class="derecha">
                         <i class="bx bx-heart" ></i>
                                            <div class="img">
                                                <img id="Img'.$fetch_product['ID_PRODUCTO'].'" src="./img/'.$fetch_product['IMAGEN'].'" alt="">
                                            </div>
                                        </div>
                <div class="izquierda">
                            <div class="name">
                                <h3 id="nombre'.$fetch_product['ID_PRODUCTO'].'">'.$fetch_product['NOMBRE_PRODUCTO'].'</h3>
                                <p hidden id="descripcion'.$fetch_product['ID_PRODUCTO'].'">'.$fetch_product['DESCRIPCION_PRODUCTO'].'</p>    
                                    </div>
                                                    <div class="btn70">';
                                                    if($fetch_product['PRECIO2']!=0){
                                                        $mes .= '<label id="precio'.$fetch_product['ID_PRODUCTO'].'" class="boton" for="">$'.$fetch_product['PRECIO1']." / $".$fetch_product['PRECIO2'].'</label>';
                                                    }else{
                                                        $mes .= '<label id="precio'.$fetch_product['ID_PRODUCTO'].'" class="boton" for="">$'.$fetch_product['PRECIO1'].'</label>';
                                                    }
                                                        
                                                    $mes .= '<label class="plus" id="plus">+</label></div>
                                        </div>
                                        <span id="cate'.$fetch_product['ID_PRODUCTO'].'" hidden>'.$fetch_product['CATEGORIA'].'</span>
                                       
                                </div>';
                                   };
                                };
                                echo $mes;
                                
?>
                                </div>
                                 
                                <div id="Preview" class="products-preview ">

                                    <div class="preview" id="preview" >
                                        <div class="head">
                                        <ion-icon id="close" class="close" onclick="Cerrar()" name="arrow-back-outline"></ion-icon>
                                        <ion-icon name="bag-handle-outline"></ion-icon>
                                        </div>
                                        <img id="imgp" src="" alt="">
                                        <div class="contenido">
                                           
                                        <div class="name-p">
                                            <h3 id="name"></h3>
                                            <p id="descripcion"></p>
                                        </div>
                                        
                                        
                                        <div class="Especificacion" id="Especificacion" hidden="true">
                                            <a id="Precio11" class="precio" onclick="Marcar(1)">CON PAPAS</a>
                                            <a id="Precio21" onclick="Marcar(2)">SIN PAPAS</a>
                                        </div>
                                        <div class="Modo" id="Modo">
                                            <a id="Modo1" class="precio" onclick="MarcarModo(1)">LLEVAR</a>
                                            <a id="Modo2" onclick="MarcarModo(2)">AQUI</a>
                                        </div>
                                        <div class="observa" id="observa">
                                                <textarea name="" id="observaciones" placeholder="Escribir observaciones del pedido..."></textarea>
                                        </div>
                                        <div class="extras" id="extras"></div>
                                        <div class="wrapper">
                                            <div class="cont87">
                                                <div id="dec" class="dec" onclick="Decrementar()">-</div>
                                                <div id="value" class="value">1</div>
                                                <div id="inc" class="inc" onclick="Aumentar()">+</div>
                                            </div><label class="boton" id="price2" hidden></label>
                                            <label class="boton" id="extrap" hidden>0</label>
                                            <label class="boton" id="extrae" hidden></label>
                                            <div class="price">
                                                <label  class="boton" id="price"></label>
                                                
                                            </div>
                                        </div>
                                        <div class="btn29">
                                            
                                            <label class="bot" onclick="addTable()">Añadir a la orden</label>
                                           
                                        </div> 
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                
                                
                                </div>
                                
                            </div>
                                   
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div class="btn39">
                    <label for="" id="verpedido" value="Ver mi pedido" class="bot"><div onclick="Verificar1()" id="opc1" class="marco marco1"><ion-icon name="storefront-sharp"></ion-icon></div>
                    <div class="marco" id="opc2"  onclick="Verificar2()"><ion-icon name="cart-outline"></ion-icon><div class="num" ><span id="Num">0</span></div></div>
                    </label>
            </div>
            
        </div>

        </div>
        <div id="status" class="box status">
                <div class="chatlist">
                    <div class="block">
                        
                        <div class="details" >
                            <div class="listHead">
                            <div class="head">
                                        <ion-icon id="close" class="close" onclick="Cerrar2()" name="arrow-back-outline"></ion-icon>
                                        <span>PEDIDO</span>
                                        <ion-icon name="bag-handle-outline"></ion-icon>
                                        </div>
                            </div>
                            <div class="food2" id="food2">
                               
                            </div>

                            <div class="food2 food3">
                                <div class="part1">
                                        <h3>Subtotal</h3>
                                </div>
                                <div class="part2">
                                        $<h3 id="subtotal">0</h3>
                                </div>
                            </div>
                            <div class="Nombre">
                                <input type="text" id="Nombre" placeholder="Ingrese nombre o ubicación">
                            </div>
                            <div class="food3 food4">
                                <label for="" onclick="Whatsapp()">Procesar Pedido</label>
                            </div>         
                           
                        </div>
                    </div>
                    
                </div>
            </div>
             </div>

    <footer>
        
    </footer>
    <script src="script.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="formulario.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script> 
        <script src='https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.5.2/bootbox.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/5.5.2/bootbox.min.js'></script>
</body>

</html>