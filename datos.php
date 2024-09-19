<?php
    require "config.php";
    $q="";    
    if(isset($_POST['valor'])){
            $q = $_POST['valor']; $mes="";
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
    }
    if(isset($_POST['valor2'])){
        $q = $_POST['valor2']; 
        $i=1;$x=0;
        $mes="<p>SELECCIONE EXTRAS:</p>";
$select_products = mysqli_query($conn, "SELECT * FROM `extras` where ID_CATEGORIA = $q");
if(mysqli_num_rows($select_products) > 0){
        while($fetch_product = mysqli_fetch_assoc($select_products)){
            $x++;
            if($i==1){
                $mes.='<div class="radio">';
            }
            $mes .= '<div class="botones"><input type="checkbox" id="extra'.$fetch_product['ID_EXTRA'].'" name="e'.$fetch_product['ID_EXTRA'].'" value="'.$fetch_product['PRECIO_EXTRA'].'">
                    <label for="extra'.$fetch_product['ID_EXTRA'].'" id="nombree'.$fetch_product['ID_EXTRA'].'" onclick="AñadirExtra('.$fetch_product['ID_EXTRA'].')">'.$fetch_product['NOMBRE_EXTRA'].' $'.$fetch_product['PRECIO_EXTRA'].'</label></div>';
                if($i==2){
                    $mes.='</div>';
                    $i=0;
                }
                $i++;
                               };
                            };
                        $mes.='<div hidden id="cantE">'.$x.'</div>';
                            echo $mes;
}

                                
?>