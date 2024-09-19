

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps =  document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progres-steps")

let formStepsNum = 0;

nextBtns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

prevBtns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

function updateFormSteps(){
    formSteps.forEach((formStep)=>{
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
     });
    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar(){
    progressSteps.forEach((progressStep,idx)=>{
        if(idx<formStepsNum+1){
            progressStep.classList.add("progres-step-active")
        }else{
            progressStep.classList.remove("progres-step-active")
        }
    });

    const progressActive = document.querySelectorAll(".progres-step-active");
    console.log(((progressActive.length-1)/ (progressSteps.length -1))*100 + "%");
    //progress.style.width = ((progressActive.length-1)/ (progressSteps.length -1))*100 + "%";

}

function habilitar(){
    var check1 = document.getElementById("task1");
    var check2 = document.getElementById("task2");
    var check3 = document.getElementById("task3");
    var check4 = document.getElementById("task4");
    var check5 = document.getElementById("task5");
    var check6 = document.getElementById("task6");
    var check7 = document.getElementById("task7");
    var check8 = document.getElementById("task8");
    var check9 = document.getElementById("task9");
    var check10 = document.getElementById("task10");
    var check11 = document.getElementById("task11");
    var check12 = document.getElementById("task12");
    var check13 = document.getElementById("task13");
    var check14 = document.getElementById("task14");
    var val = 0;
    if(check1.checked == true || check2.checked == true || check3.checked == true || 
        check4.checked == true || check5.checked == true || check6.checked == true || 
        check7.checked == true || check8.checked == true || check9.checked == true || 
        check10.checked == true || check11.checked == true || check12.checked == true || 
        check13.checked == true || check14.checked == true){
        val++;
    }
    if(val==0){
        document.querySelector('.btn80').classList.remove('visible');
        document.querySelector('.btn80').classList.remove('novisible');
        document.querySelector('.btn80').classList.toggle('invisible');
        document.querySelector('.btn80').classList.toggle('oculto');
    }else{
        document.querySelector('.btn80').classList.remove('oculto');
        document.querySelector('.btn80').classList.remove('disable');
        document.querySelector('.btn80').classList.remove('invisible');
        document.querySelector('.btn80').classList.toggle('nodisable');
        document.querySelector('.btn80').classList.toggle('visible');
        
    }
}



    function habilitar3(){
        cliente = document.getElementById("cliente").value;
        callecliente = document.getElementById("callecliente").value;
        numerocliente = document.getElementById("numerocliente").value;
        entrecliente = document.getElementById("entrecliente").value;
        telefonocliente = document.getElementById("clientetelefono").value;
        var val = 0;
        if(cliente == ""){
            val++;
        }
        if(callecliente == ""){
            val++;
        }
        if(numerocliente == ""){
            val++;
        }
        if(entrecliente == ""){
            val++;
        }
        if(telefonocliente == ""){
            val++;
        }
        if(val>0){
        }else{
            document.querySelector(".btn20").classList.remove('invisible');
            document.querySelector(".btn20").classList.toggle('visible');
        }
    
        if(val==0 && !document.querySelector(".btn20").classList.contains('visible')){
            document.querySelector(".btn20").classList.toggle('visible');
            
        }
        if(val>0 && document.querySelector(".btn20").classList.contains('visible')){
            document.querySelector(".btn20").classList.remove('visible');
            document.querySelector(".btn20").classList.toggle('invisible');
            
        }
    }
        function habilitar4(){
            local = document.getElementById("local").value;
            cobrar = document.getElementById("cobrar").value;
            select = document.getElementById("select").value;
            var val = 0;
            if(local == ""){
                val++;
            }
            if(cobrar == ""){
                val++;
            }
            if(select == ""){
                val++;
            }
            
            if(val>0){
            }else{
                document.querySelector(".btn30").classList.remove('invisible');
                document.querySelector(".btn30").classList.toggle('visible');

            }
        
            if(val==0 && !document.querySelector(".btn30").classList.contains('visible')){
                document.querySelector(".btn30").classList.toggle('visible');
            }
            if(val>0 && document.querySelector(".btn30").classList.contains('visible')){
                document.querySelector(".btn30").classList.remove('visible');
                document.querySelector(".btn30").classList.toggle('invisible');
            }
        }
            
        

        function EnviarDatos(){
            $.ajax({
                url: 'agregar.php',
                type: 'POST',
                data: {producto: prod,
                cantidad: cant,
                precio: prec},
                success: function (response) {

                    console.log(response)
                    if (response == 1) {
                        console.log("GUARDADO")
                    } else {
                        console.log("ERROR AL GUARDAR")
                    }

                }
            });

            var table = document.getElementById('tablita');
            for (var i = 0, row; row = table.rows[i]; i++) {
                  var prod = table.rows[i].cells[0].innerText;
                  var cant = table.rows[i].cells[1].innerText;
                  var prec = table.rows[i].cells[2].innerText;
                  $.ajax({
                    url: 'agregar.php',
                    type: 'POST',
                    data: {producto: prod,
                    cantidad: cant,
                    precio: prec},
                    success: function (response) {

                        console.log(response)
                        if (response == 1) {
                            console.log("GUARDADO")
                        } else {
                            console.log("ERROR AL GUARDAR")
                        }

                    }
                });

              }
        }
        
        function EnviarTelegram(){
            //Recolectar();
            var cliente = document.getElementById("cliente").value;
            var callecliente = document.getElementById("callecliente").value;
            var numerocliente = document.getElementById("numerocliente").value;
            var entrecliente = document.getElementById("entrecliente").value;
            var clientetelefono = document.getElementById("clientetelefono").value;
            var local = document.getElementById("local").value;
            var cobrar = document.getElementById("cobrar").value;
            var estado = document.getElementById("select").value;
            var precio = document.getElementById("precio").value;
            //var chat_id = 'atupuertaar'
            var chat_id = 'pruebasATP'
            var token = "5587723959:AAGICBCwdKAGYx5QYUs4hsVnp0QsKh_9EtE"
            
            var mensajes = 'Pedido desde atupuertaar.com%0A%0A☑️Entregar: '
            
            mensajes += 'C/Av '+callecliente+' N° '+numerocliente+', Entre calles '+entrecliente+'%0A☑️Pagar en local: $'+local+'%0A☑️Cobrar al cliente: $'+cobrar+'  %0A🏍️Delivery: $'+pre
            mensajes += '%0A🛒*Detalle del Pedido:* %0A';
            var table = document.getElementById('tablita');
            for (var i = 0, row; row = table.rows[i]; i++) {
                  var prod = table.rows[i].cells[0].innerText;
                  var cant = table.rows[i].cells[1].innerText;
                  var prec = table.rows[i].cells[2].innerText;
                  var cate = table.rows[i].cells[3].innerText;
                  mensajes += '%0A     '+cant+"x";
                  if(cate.toUpperCase() == "HAMBURGUESAS" || cate.toUpperCase() == "HAMBURGUESA"){
                    mensajes +='🍔';
                  }else if(cate =="PERROS CALIENTES"){
                    mensajes +='🌭';
                  }else if(cate.toUpperCase() =="PIZZAS" || cate.toUpperCase() =="PIZZA"){
                    mensajes +='🍕';
                  }else if(cate.toUpperCase() =="BEBIDAS" || cate.toUpperCase() =="BEBIDA"){
                    mensajes +='🍔';
                  }else if(cate.toUpperCase() =="ENROLLADOS"|| cate.toUpperCase() =="ENROLLADO"){
                    mensajes +='🌯';
                  }else if(cate.toUpperCase() =="PEPITOS" || cate.toUpperCase() =="PEPITO"){
                    mensajes +='🥤';
                  }else if(cate.toUpperCase() =="PAPAS FRITAS"){
                    mensajes +='🍟';
                  }
                  
                  mensajes += prod+" = "+prec;
              }

            mensajes += '%0A%0A🛍️Estado del Pedido: '+estado+' %0A👤Cliente: '+cliente+'%0A📲Teléfono: '+clientetelefono;
            
            var url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=@'+chat_id+'&text='+mensajes
            
            let api = new XMLHttpRequest();
            api.open("GET", url, true);
            api.send();
            var currentTime = new Date();
            var hora = currentTime.getHours()
            var min = currentTime.getMinutes()
            var hora2 = currentTime.getHours()
            var min2 = currentTime.getMinutes()
            min = min+15;
            if(min>=60){
                min = min-60;
                hora++;
            }
            min2 = min2+45;
            if(min2>=60){
                min2 = min2-60;
                hora2++;
            }
            var mensaje = "Entre las "+hora+":"+min+" y "
            if(hora<10 && min>10) 
            mensaje = "Entre las 0"+hora+":"+min+" y "
            if(hora>10 && min<10) 
            mensaje = "Entre las "+hora+":0"+min+" y "
            if(hora<10 && min<10) 
            mensaje = "Entre las 0"+hora+":0"+min+" y "

            var mensaje2 = hora2+":"+min2;
            if(hora2<10 && min2>10) 
            mensaje2= "0"+hora2+":"+min2;
            if(hora2>10 && min2<10) 
            mensaje2 = hora2+":0"+min2;
            if(hora2<10 && min2<10) 
            mensaje2 = "0"+hora2+":0"+min2;
            
            document.getElementById("recibefactura").innerHTML = cliente+", Teléfono: "+clientetelefono;
            document.getElementById("entregafactura").innerHTML = "C/Av "+callecliente+" N° "+numerocliente+", entre calles "+entrecliente;
            document.getElementById("deliveryfactura").innerHTML = "$"+pre;
            document.getElementById("hora2").innerHTML = mensaje+mensaje2;

            Whatsapp(mensajes);
        }

        /*function Whatsapp(){

            var mensajes = document.getElementById("Nombre").value+':'
            var sub = document.getElementById("subtotal").innerHTML
            mensajes += '%0A';
            var table = document.getElementById('tablita');
            for (var i = 0, row; row = table.rows[i]; i++) {
                  var prod = table.rows[i].cells[1].innerText;
                  var cant = table.rows[i].cells[0].innerText;
                  var prec = table.rows[i].cells[2].innerText;
                  var cate = table.rows[i].cells[3].innerText;
                  mensajes += '%0A'+cant+" "+ prod;
              }
              mensajes += '%0A%0A Total = $'+sub;
            let tel = "584248335651";
            let fecha = "07/05/2023";
            
            var url = "https://api.whatsapp.com/send?phone="+tel+"&text="+mensajes;

            window.open(url, "_blank");
        }*/

        function mostrar(){
            swal("¡Pedido procesado con éxito!", "Su envio se entregará entre 15 y 45 min aprox", "success");
        }
        function Activar(){
            if(document.querySelector(".form").classList.contains('invisible')){
                document.querySelector(".form").classList.remove('invisible');
                document.querySelector(".form").classList.toggle('visible');

                document.querySelector(".botond").style.color = "rgb(0, 18, 71)";
                document.querySelector(".botond").style.boxShadow = "0 0 0 1px rgb(0, 18, 71),0 0 0 2px #fff, 0 0 0 3px #000e36";
            } 
            if(document.querySelector(".form4").classList.contains('visible')){
                document.querySelector(".form4").classList.remove('visible');
                document.querySelector(".form4").classList.toggle('invisible');

                document.querySelector(".botont").style.color = "#ffb507";
                document.querySelector(".botont").style.boxShadow = "0 0 0 1px #ffb507,0 0 0 2px #fff, 0 0 0 3px #e2a517"
            }
            if(document.querySelector(".form3").classList.contains('visible')){
                document.querySelector(".form3").classList.remove('visible');
                document.querySelector(".form3").classList.toggle('invisible');

                document.querySelector(".botons").style.color = "#ffb507";
                document.querySelector(".botons").style.boxShadow = "0 0 0 1px #ffb507,0 0 0 2px #fff, 0 0 0 3px #e2a517"
            }
            
        }

        function Activar2(){
            if(document.querySelector(".form").classList.contains('visible')){
                document.querySelector(".form").classList.remove('visible');
                document.querySelector(".form").classList.toggle('invisible');


                document.querySelector(".botond").style.color = "#ffb507";
                document.querySelector(".botond").style.boxShadow = "0 0 0 1px #ffb507,0 0 0 2px #fff, 0 0 0 3px #e2a517"
                
            }

            if(document.querySelector(".form4").classList.contains('invisible')){
                document.querySelector(".form4").classList.remove('invisible');
                document.querySelector(".form4").classList.toggle('visible');

                document.querySelector(".botont").style.color = "rgb(0, 18, 71)";
                document.querySelector(".botont").style.boxShadow = "0 0 0 1px rgb(0, 18, 71),0 0 0 2px #fff, 0 0 0 3px #000e36";
            }
            
            if(document.querySelector(".form3").classList.contains('visible')){
                document.querySelector(".form3").classList.remove('visible');
                document.querySelector(".form3").classList.toggle('invisible');

                document.querySelector(".botons").style.color = "#ffb507";
                document.querySelector(".botons").style.boxShadow = "0 0 0 1px #ffb507,0 0 0 2px #fff, 0 0 0 3px #e2a517"
            }
            
        }

        function Activar3(){
            if(document.querySelector(".form").classList.contains('visible')){
                document.querySelector(".form").classList.remove('visible');
                document.querySelector(".form").classList.toggle('invisible');

                document.querySelector(".botond").style.color = "#ffb507";
                document.querySelector(".botond").style.boxShadow = "0 0 0 1px #ffb507,0 0 0 2px #fff, 0 0 0 3px #e2a517"
            }

            if(document.querySelector(".form4").classList.contains('visible')){
                document.querySelector(".form4").classList.remove('visible');
                document.querySelector(".form4").classList.toggle('invisible');

                document.querySelector(".botont").style.color = "#ffb507";
                document.querySelector(".botont").style.boxShadow = "0 0 0 1px #ffb507,0 0 0 2px #fff, 0 0 0 3px #e2a517"
            }
            
            if(document.querySelector(".form3").classList.contains('invisible')){
                document.querySelector(".form3").classList.remove('invisible');
                document.querySelector(".form3").classList.toggle('visible');
                
                document.querySelector(".botons").style.color = "rgb(0, 18, 71)";
                document.querySelector(".botons").style.boxShadow = "0 0 0 1px rgb(0, 18, 71),0 0 0 2px #fff, 0 0 0 3px #000e36";
            }
            
        }

        function habilitar30(){
            cliente = document.getElementById("cliente2").value;
            telefonocliente = document.getElementById("clientetelefono2").value;
            var val = 0;
            if(cliente == ""){
                val++;
            }
            if(telefonocliente == ""){
                val++;
            }
            if(val>0){
                console.log("Pasor por 1")
            }else{
                document.querySelector(".btn303").classList.remove('invisible');
                document.querySelector(".btn303").classList.toggle('visible');
                console.log("Pasor por 2")
            }
        
            if(val==0 && !document.querySelector(".btn303").classList.contains('visible')){
                document.querySelector(".btn303").classList.toggle('visible');
                
            }
            if(val>0 && document.querySelector(".btn303").classList.contains('visible')){
                document.querySelector(".btn303").classList.remove('visible');
                document.querySelector(".btn303").classList.toggle('invisible');
                
            }
        }
            

            function habilitar302(){
                cliente = document.getElementById("cliente3").value;
                telefonocliente = document.getElementById("clientetelefono3").value;
                var val = 0;
                if(cliente == ""){
                    val++;
                }
                if(telefonocliente == ""){
                    val++;
                }
                if(val>0){
                    console.log("Pasor por 1")
                }else{
                    document.querySelector(".btn302").classList.remove('invisible');
                    document.querySelector(".btn302").classList.toggle('visible');
                    console.log("Pasor por 2")
                }
            
                if(val==0 && !document.querySelector(".btn302").classList.contains('visible')){
                    document.querySelector(".btn302").classList.toggle('visible');
                    
                }
                if(val>0 && document.querySelector(".btn302").classList.contains('visible')){
                    document.querySelector(".btn302").classList.remove('visible');
                    document.querySelector(".btn302").classList.toggle('invisible');
                    
                }
            }
                

                function Cambiar(){
                    document.getElementById('Callesita').innerHTML = document.getElementById('seleccioncalle').value;
                }