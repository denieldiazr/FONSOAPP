

var i=0;
/*function addTable() {
    var name = document.getElementById('name').innerHTML;
    var cant = document.getElementById('value').innerHTML;
    var price = document.getElementById('price').innerHTML;
    var num = document.getElementById('Num').innerHTML;
    document.getElementById('Num').innerHTML = parseInt(num)+parseInt(cant)
    var obser = document.getElementById('observaciones').value; 

    modo = "";
    if(document.getElementById("Modo1").classList.contains('selected')){
        modo = document.getElementById("Modo1").innerHTML;
    }else if(document.getElementById("Modo2").classList.contains('selected')){
        modo = document.getElementById("Modo2").innerHTML;
    }
    
    price = price.split('$')
    p = price[1]
    price = p
    if(obser=="")
    var fila="<tr><td>"+cant+"</td><td>"+name+" - "+modo+"</td><td>"+price+"</td><td><a class='eliminacion' onclick='Javascript:Eliminar(this)'><ion-icon name='trash-outline'></ion-icon></a></td></tr>";
    else var fila="<tr><td>"+cant+"</td><td>"+name+" ("+obser+") - "+modo+"</td><td>"+price+"</td><td><a class='eliminacion' onclick='Javascript:Eliminar(this)'><ion-icon name='trash-outline'></ion-icon></a></td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
    sub = document.getElementById("subtotal");
    suma = sub.textContent;
    document.getElementById("subtotal").innerHTML = parseFloat(suma) + parseFloat(price)*parseFloat(cant);
    document.getElementById('Preview').classList.remove("active")
    }*/

    function Whatsapp(){

        if(document.getElementById("Nombre").value!=""){
            var mensajes = document.getElementById("Nombre").value
        var sub = document.getElementById("subtotal").innerHTML
        mensajes += '%0A';
        var el=false
        for (var s = 0; s<=i;s++) {
              if(document.getElementById("nombres"+s)){
                    var prod = document.getElementById("nombres"+s).innerHTML
                    m = prod.split(" - ")
                    g = m[2]
                    x = m[1]
                    console.log(g+" - "+m)
                    if(g=="AQUI"){
                        var cant = document.getElementById("values"+s).innerHTML
                        mensajes += '%0A'+cant+" "+ prod;
                        el=true;
                    }else if(x=="AQUI"){
                      var cant = document.getElementById("values"+s).innerHTML
                      mensajes += '%0A'+cant+" "+m[0];
                      el=true;
                  }
                    
              }
          }
          if(el==true) mensajes += '%0A AQUI%0A ';

          el=false
          for (var s = 0; s<=i;s++) {
            if(document.getElementById("nombres"+s)){
                  var prod = document.getElementById("nombres"+s).innerHTML
                  m = prod.split(" - ")
                  g = m[2]
                  x = m[1]
                  console.log(g+" - "+x)
                  if(g=="LLEVAR"){
                      var cant = document.getElementById("values"+s).innerHTML
                      mensajes += '%0A'+cant+" "+ prod;
                      el=true;
                  }else if(x=="LLEVAR"){
                    var cant = document.getElementById("values"+s).innerHTML
                    mensajes += '%0A'+cant+" "+ m[0];
                    el=true;
                }
                  
            }
        }
        if(el==true) mensajes += '%0A LLEVAR';
        let tel = "584248335651";
        let fecha = "07/05/2023";
        
        var url = "https://api.whatsapp.com/send?phone="+tel+"&text="+mensajes;

        window.open(url, "_blank");
        }else{
            swal("¡Error!", "Debe ingresar el nombre de la persona o la mesa", "error");
        }
        
    }
    function addTable() {
        var name = document.getElementById('name').innerHTML;
        var cant = document.getElementById('value').innerHTML;
        var price = document.getElementById('price').innerHTML;
        var num = document.getElementById('Num').innerHTML;
        var e = document.getElementById('extrap').innerHTML;
        document.getElementById('Num').innerHTML = parseInt(num)+parseInt(cant)
        var obser = document.getElementById('observaciones').value; 
    
        modo = "";
        if(document.getElementById("Modo1").classList.contains('selected')){
            modo = document.getElementById("Modo1").innerHTML;
        }else if(document.getElementById("Modo2").classList.contains('selected')){
            modo = document.getElementById("Modo2").innerHTML;
        }
        var t
        if(document.getElementById("Precio11").classList.contains('selected')){
            t = document.getElementById("Precio11").innerHTML;
            d = t.split("$")
        t = d[0]
        name = name+" "+t
        }else if(document.getElementById("Precio21").classList.contains('selected')){
            t = document.getElementById("Precio21").innerHTML;
            d = t.split("$")
        t = d[0]
        name = name+" "+t
        }
        
        if(obser!="") name +=" ("+obser+") "
        price = price.split('$')
        p = price[1]
        price = parseFloat(p)+parseFloat(e)
        if(document.getElementById('cantE')){
            var e = document.getElementById('cantE').innerHTML;
                    var m,s=0;
                    var name2="";
                    for(h=1;h<=parseInt(e);h++){
                        if($('#extra'+h).is(':checked')==true){
                            m = document.getElementById('nombree'+h).innerHTML.split("$")
                            if(s==0){
                                name2 += "Extra "
                            }
                            if(s==1){
                                name2 +=", "
                                
                            }
                            s=1
                            name2 +=m[0]
                            
                        }
                       document.getElementById('extra'+h).checked=false;
                    }
                    if(name2!="") name = name+" - "+name2
        }
        document.getElementById("extrap").innerHTML="0"
        name += " - "+modo
            var pe = ' <div class="table" id="table'+i+'">'
             pe +='<img src="'+$("#imgp").attr("src")+'" alt="">'
                                    pe +='<div class="nombres">'
                                        pe +='<div class="nombres2 ">'
                                           pe +='<div><span id="nombres'+i+'">'+name+'</span></div>'
                                        pe +='<div class="cantidad">'
                                        pe +='<div id="dec" class="dec" onclick="Decrementar2('+i+')"><span>-</span></div>'
                                                pe+='<div id="values'+i+'" class="value">'+cant+'</div>'
                                                pe+='<div id="inc" class="inc" onclick="Aumentar2('+i+')"><span>+</span></div>'
                                        pe +='</div> '
                                        pe +='</div>'
                                        
                                    pe +='</div>'
                                    pe +='<div class="precio">'
                                        pe +='<div class="div1"><span onclick="EliminarFila('+i+')"><ion-icon name="close-circle-outline"></ion-icon></span></div>'
                                        pe +='<div class="div2" ><span id="precio'+(i++)+'">$'+price+'</span></div>'
                                    pe +='</div>'
                                 pe +=' </div>'
                                 document.getElementById("food2").innerHTML += pe;
        sub = document.getElementById("subtotal");
        suma = sub.textContent;
        document.getElementById("subtotal").innerHTML = parseFloat(suma) + parseFloat(price)*parseFloat(cant);
        document.getElementById('Preview').classList.remove("active")
        }

        function EliminarFila(i){
            const row = document.getElementById("table"+i);
            console.log(document.getElementById("precio"+i).innerHTML)
            p = document.getElementById("precio"+i).innerHTML;
            s = p.split("$")
            p = s[1]
            document.getElementById("subtotal").innerHTML =  parseFloat(document.getElementById("subtotal").innerHTML) - parseFloat(p)
            if (row) {
                row.remove();
            }
        }
let data = "1";
function Aumentar(){
    var num = document.getElementById('value').innerHTML;
    document.getElementById('value').innerHTML = parseInt(num)+1;
}

function Decrementar(value){
    var num = document.getElementById('value').innerHTML;
    if(num>1){
        document.getElementById('value').innerHTML = parseInt(num)-1;
    }
}

function Aumentar2(i){
    var num = document.getElementById('values'+i).innerHTML;
    document.getElementById('values'+i).innerHTML = parseInt(num)+1;
}

function Decrementar2(i){
    var num = document.getElementById('values'+i).innerHTML;
    if(num>1){
        document.getElementById('values'+i).innerHTML = parseInt(num)-1;
    }
}

function Eliminar(id){

    var table = document.getElementById('tablita'); 
        
    var cell = id.parentNode;
  // row element
  var row = cell.parentNode;
  precio = table.rows[row.rowIndex-1].cells[2].innerHTML;
  cant = table.rows[row.rowIndex-1].cells[1].innerHTML;
   sub = document.getElementById("subtotal");
    suma = sub.textContent;
    sub.innerHTML = parseFloat(suma) - parseFloat(precio)*parseFloat(cant);
  document.getElementById("tablita").deleteRow(row.rowIndex-1);
    if(sub.innerHTML == 0){
        document.getElementById('verpedido').style.background = "#fff";
        document.getElementById('verpedido').style.color = "rgb(0, 18, 71)";
    }
    console.log(table.rows.length);
}

function Verificar1(){
    if(document.getElementById('status').classList.contains("active")==true){
        document.getElementById('status').classList.remove("active")
    }
    if(document.getElementById('Preview').classList.contains("active")==true){
        document.getElementById('Preview').classList.remove("active")
    }
}

function Verificar2(){
    if(document.getElementById('status').classList.contains("active")==true){
        document.getElementById('status').classList.remove("active")
    }else{
        document.getElementById('status').classList.toggle("active")
    }
    
}


function Cerrar(){
    document.getElementById('Preview').classList.remove('active')
}

function Cerrar2(){
    document.getElementById('status').classList.remove('active')
}
function Verificar3(){
        document.getElementById('inicio').checked = true;
        
}

function Verificar4(){
    document.getElementById('menu').checked = true;
}



function traerProductos(id){
        $.ajax({
            url: 'datos.php',
            type: 'POST',
            datatype: 'html',
            data: {valor: id},
        })

        .done(function(respuesta){
            $("#PRO").html(respuesta);
        })
        .fail(function(respuesta){
            console.log("Error");
        })
        const divs = document.querySelectorAll('.seleccion');
        divs.forEach(function(div) {
            div.style.borderBottom = 'none'; 
            div.style.color = "#fff"
            
        });
        document.getElementById('seleccion'+id).style.color = "#e2a517"
        document.getElementById('seleccion'+id).style.borderBottom="2px solid #e2a517"
        document.getElementById('seleccion'+id).style.fontWeight = '800';
}

function Añadir(id){
    document.getElementById('Preview').classList.toggle('active')
    document.getElementById("imgp").setAttribute("src",$("#Img"+id).attr("src"));
    document.getElementById('name').innerHTML = document.getElementById('nombre'+id).innerHTML
    document.getElementById('price').innerHTML = document.getElementById('precio'+id).innerHTML
    document.getElementById('price2').innerHTML = document.getElementById('precio'+id).innerHTML
    document.getElementById('descripcion').innerHTML = document.getElementById('descripcion'+id).innerHTML
    var cate = document.getElementById('cate'+id).innerHTML
    var obser = document.getElementById('observaciones').value; 
    var pre = document.getElementById('price').innerHTML;
    p = pre.split("/")
    p1 = p[0]
    p2 = p[1]
    document.getElementById("Precio11").classList.remove('selected')
    document.getElementById("Precio21").classList.remove('selected')
    if(document.getElementById("Modo1").classList.contains('selected')==false ){
        document.getElementById("Modo1").classList.toggle('selected')
        document.getElementById("Modo2").classList.remove('selected')
    }
    $("#extras").html("");
    if(cate==2){
        
        document.getElementById("Especificacion").removeAttribute("hidden");
        document.getElementById("Precio11").innerHTML = "CON PAPAS "+p1
        document.getElementById("Precio21").innerHTML = "SIN PAPAS "+p2
        document.getElementById("Precio11").classList.toggle('selected')
        document.getElementById('price').innerHTML = p1
    }else if(cate==1){
        document.getElementById("Especificacion").removeAttribute("hidden");
        document.getElementById("Precio11").innerHTML = "GRANDE "+p1
        document.getElementById("Precio21").innerHTML = "MEDIANA"+p2
        document.getElementById("Precio11").classList.toggle('selected')
        document.getElementById('price').innerHTML = p1
        Buscar_Extras();
    }else{
        if(document.getElementById("Especificacion").hidden==false){
            document.getElementById("Especificacion").toggleAttribute("hidden");
        }
        
    }
}

function Buscar_Extras(){
    $.ajax({
        url: 'datos.php',
        type: 'POST',
        datatype: 'html',
        data: {valor2: 1},
    })

    .done(function(respuesta){
        $("#extras").html(respuesta);
    })
    .fail(function(respuesta){
        console.log("Error");
    })
}

function Marcar(num){
    var pre = document.getElementById('price2').innerHTML;
    p = pre.split("/")
    p1 = p[0]
    p2 = p[1]
    if(num==1){
        document.getElementById("Precio11").classList.toggle('selected')
        document.getElementById("Precio21").classList.remove('selected')
        document.getElementById('price').innerHTML = p1
    }else{
        document.getElementById("Precio21").classList.toggle('selected')
        document.getElementById("Precio11").classList.remove('selected')
        document.getElementById('price').innerHTML = p2
    }
}
function MarcarModo(num){
    if(num==1){
        document.getElementById("Modo1").classList.toggle('selected')
        document.getElementById("Modo2").classList.remove('selected')
    }else{
        document.getElementById("Modo2").classList.toggle('selected')
        document.getElementById("Modo1").classList.remove('selected')
    }
}
function AñadirExtra(id){
    pre = document.getElementById('price').innerHTML;
    p = pre.split("$")
    p1 = p[1]
    if($('#extra'+id).is(':checked')==false){
       document.getElementById("extrap").innerHTML = parseInt(document.getElementById("extrap").innerHTML)+
        parseInt(document.getElementById("extra"+id).value) 
       
    }else{
        if(parseInt(document.getElementById("extrap").innerHTML)>0){
        document.getElementById("extrap").innerHTML = parseInt(document.getElementById("extrap").innerHTML)-
        parseInt(document.getElementById("extra"+id).value)
        }

    }
        
}
