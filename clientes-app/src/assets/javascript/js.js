


function cambiarimagen1(x){
    
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../../assets/imagenes/tw1.jpg");
    bt1h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen2(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../../assets/imagenes/tw2.jpg");
    bt2h.setAttribute("class", n+" "+h);
    bt1h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen3(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../../assets/imagenes/tw3.jpg");
    bt3h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen4(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../../assets/imagenes/tw4.jpg");
    bt4h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
    bt5h.setAttribute("class",n);
}
function cambiarimagen5(x){
    var n = x.getAttribute("class");
    var h = elementohidden.getAttribute("class");
    imagenC.setAttribute("src","../../assets/imagenes/tw5.jpg");
    bt5h.setAttribute("class", n+" "+h);
    bt2h.setAttribute("class",n);
    bt3h.setAttribute("class",n);
    bt4h.setAttribute("class",n);
    bt1h.setAttribute("class",n);
}

function maszoom(x){
    var h = elementohidden2.getAttribute("class");
    x.setAttribute("class","card mt-3 shadow-lg border border-"+h);
    
}
function menoszoom(x){
    var h = elementohidden2.getAttribute("class");
    x.setAttribute("class","card  border border-"+h);
}

function mostrarChat(){
    bodyChat.setAttribute("class","card-body ");
    footerChat.setAttribute("class","card-footer");
    cardchat.setAttribute("style","transition: 1s; height: 365px; ");
}
function ocultarChat(){
    bodyChat.setAttribute("class","d-none card-body ");
    footerChat.setAttribute("class","d-none card-footer");
    cardchat.setAttribute("style"," height:70px; ");
}

function cambiartema(texto){

    var color;
    var colorC;

    if(texto.localeCompare("dropdowncolor1")==0){
        color = "warning";
        colorC = "Warning";
    }
    if(texto.localeCompare("dropdowncolor2")==0){
        color = "danger";
        colorC = "Danger";
    }
    if(texto.localeCompare("dropdowncolor3")==0){
        color = "primary";
        colorC = "Primary";
    }
    if(texto.localeCompare("dropdowncolor4")==0){
        color = "dark";
        colorC = "Dark";
    }

    var hElemt = "bg-"+color;

    var navxlvar = document.getElementById("navthxl");
    if (isInPage(navxlvar)) {
        if ($("#navthxl").offset().top > 800) {
            navthxl.setAttribute("class"," d-none d-xl-block navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
        } else {
            $("#navthxl").removeClass(hElemt);
        }
    }

    var navsmvar = document.getElementById("navthsm");
    if (isInPage(navsmvar)) {
        if ($("#navthsm").offset().top > 800) {
            navthxl.setAttribute("class","d-none d-sm-block d-md-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
        } else {
            $("#navthsm").removeClass(hElemt);
        }
    }

    var navlgvar = document.getElementById("navthlg");
    if (isInPage(navlgvar)) {
        if ($("#navthlg").offset().top > 450) {
            navthlg.setAttribute("class","d-none d-lg-block d-xl-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
        } else {
            $("#navthlg").removeClass(hElemt);
        }
    }

    var navmdvar = document.getElementById("navthmd");
    if (isInPage(navmdvar)) {
        if ($("#navthmd").offset().top > 300) {
            navthmd.setAttribute("class","d-none d-md-block d-lg-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
        } else {
            $("#navthmd").removeClass(hElemt);
        }
    }

    var navxsvar = document.getElementById("navthxs");
    if (isInPage(navxsvar)) {
        if ($("#navthxs").offset().top > 500) {
            navthxs.setAttribute("class","d-block d-sm-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
        } else {
            $("#navthxs").removeClass(hElemt);
        }
    }




      //nav bar modificado id
      var navxlvar2 = document.getElementById("navxl");
      if (isInPage(navxlvar2)) {
          navxl.setAttribute("class","d-none d-xl-block navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
      }
  
      var navsmvar2 = document.getElementById("navsm");
      if (isInPage(navsmvar2)) {
          navsm.setAttribute("class","d-none d-sm-block d-md-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
      }
  
      var navlgvar2 = document.getElementById("navlg");
      if (isInPage(navlgvar2)) {
          navlg.setAttribute("class","d-none d-lg-block d-xl-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
      }
  
      var navmdvar2 = document.getElementById("navmd");
      if (isInPage(navmdvar2)) {
          navmd.setAttribute("class","d-none d-md-block d-lg-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
      }
  
      var navxsvar2 = document.getElementById("navxs");
      if (isInPage(navxsvar2)) {
          navxs.setAttribute("class","d-block d-sm-none navbar navbar-expand-md navbar-dark nav-transition-color fixed-top bg-"+color);
      }



    var card1Prueba = document.getElementById("card1h");
    if (isInPage(card1Prueba)) {
        card1h.setAttribute("onmouseover","maszoom(card1h)");
        card1h.setAttribute("onmouseout","menoszoom(card1h)");
        card1h.setAttribute("class","card  border border-"+color+"");
        cardTitle1.setAttribute("class","card-title text-"+color+"");
        card2h.setAttribute("onmouseover","maszoom(card2h)");
        card2h.setAttribute("onmouseout","menoszoom(card2h)");
        card2h.setAttribute("class","card  border border-"+color+"");
        cardTitle2.setAttribute("class","card-title text-"+color+"");
        card3h.setAttribute("onmouseover","maszoom(card3h)");
        card3h.setAttribute("onmouseout","menoszoom(card3h)");
        card3h.setAttribute("class","card  border border-"+color+"");
        cardTitle3.setAttribute("class","card-title text-"+color+"");
    }

    var cardchatvar = document.getElementById("cardchat");
    if (isInPage(cardchatvar)) {
        cardchat.setAttribute("class","card bg-"+color+" text-primary");
    }

    var btnChatEspaciadovar = document.getElementById("btnChatEspaciado");
    if (isInPage(btnChatEspaciadovar)) {
        btnChatEspaciado.setAttribute("class","btn btn-"+color+" col-5");
        
        if (color.localeCompare("danger")==0) {
            btnchatcerrar.setAttribute("class","btn btn-outline-light  mr-4 col-2");
        }else{
            btnchatcerrar.setAttribute("class","btn btn-outline-danger  mr-4 col-2");
        }
    }

    var titlePrinCaroucel = document.getElementById("blocktexttoplg");
    if (isInPage(titlePrinCaroucel)) {
        if (color.localeCompare("dark")==0) {
            $("#blocktexttoplg").css("color", "#ffffff");
        }
        if (color.localeCompare("danger")==0) {
            $("#blocktexttoplg").css("color", "#dc3545");
        }
        if (color.localeCompare("primary")==0) {
            $("#blocktexttoplg").css("color", "#007bff");
        }
        if (color.localeCompare("warning")==0) {
            $("#blocktexttoplg").css("color", "#ffc107");
        }

    }



    var titlePrinCaroucel = document.getElementById("blocktexttopxl");
    if (isInPage(titlePrinCaroucel)) {
        if (color.localeCompare("dark")==0) {
            $("#blocktexttopxl").css("color", "#ffffff");
        }
        if (color.localeCompare("danger")==0) {
            $("#blocktexttopxl").css("color", "#dc3545");
        }
        if (color.localeCompare("primary")==0) {
            $("#blocktexttopxl").css("color", "#007bff");
        }
        if (color.localeCompare("warning")==0) {
            $("#blocktexttopxl").css("color", "#ffc107");
        }

    }

    var titlePrinCaroucel = document.getElementById("blocktexttopsm");
    if (isInPage(titlePrinCaroucel)) {
        if (color.localeCompare("dark")==0) {
            $("#blocktexttopsm").css("color", "#ffffff");
        }
        if (color.localeCompare("danger")==0) {
            $("#blocktexttopsm").css("color", "#dc3545");
        }
        if (color.localeCompare("primary")==0) {
            $("#blocktexttopsm").css("color", "#007bff");
        }
        if (color.localeCompare("warning")==0) {
            $("#blocktexttopsm").css("color", "#ffc107");
        }

    }

    var titlePrinCaroucel = document.getElementById("blocktexttopxs");
    if (isInPage(titlePrinCaroucel)) {
        if (color.localeCompare("dark")==0) {
            $("#blocktexttopxs").css("color", "#ffffff");
        }
        if (color.localeCompare("danger")==0) {
            $("#blocktexttopxs").css("color", "#dc3545");
        }
        if (color.localeCompare("primary")==0) {
            $("#blocktexttopxs").css("color", "#007bff");
        }
        if (color.localeCompare("warning")==0) {
            $("#blocktexttopxs").css("color", "#ffc107");
        }

    }

    var titlePrinCaroucel = document.getElementById("blocktexttopmd");
    if (isInPage(titlePrinCaroucel)) {
        if (color.localeCompare("dark")==0) {
            $("#blocktexttopmd").css("color", "#ffffff");
        }
        if (color.localeCompare("danger")==0) {
            $("#blocktexttopmd").css("color", "#dc3545");
        }
        if (color.localeCompare("primary")==0) {
            $("#blocktexttopmd").css("color", "#007bff");
        }
        if (color.localeCompare("warning")==0) {
            $("#blocktexttopmd").css("color", "#ffc107");
        }

    }

    var listCss = document.getElementById("listClientesCSS");
    if (isInPage(listCss)) {
        cardListaUsuariosPrincipal.setAttribute("class","card border-"+color+" mb-3");
        cardListaUsuariosBody.setAttribute("class","card-body text-light bg-"+color);
        var btnListaUsuariosCrearVAR = document.getElementById("btnListaUsuariosCrear");
        if (isInPage(btnListaUsuariosCrearVAR)) {
            btnListaUsuariosCrear.setAttribute("class","btn btn-rounded btn-"+color+" border-success");
        }
        tbodyListaUsuariosDatos.setAttribute("class","bg-white text-"+color);
    }
    
    var formCSS = document.getElementById("cardFormClienteNew");
    if (isInPage(formCSS)) {
        cardFormClienteNew.setAttribute("class","card bg-"+color+" text-white border-success");
        btnFormClienteNew.setAttribute("class","btn text-white bg-"+color+" border-success");
    }

    var formCSS = document.getElementById("cardFormLogin");
    if (isInPage(formCSS)) {
        cardFormLogin.setAttribute("class","col-12 col-md-6 card bg-"+color+" text-white border-light");
        btnFormLogin.setAttribute("class","btn btn-lg btn-block text-white bg-"+color+" border-light");
    }

    if (color.localeCompare("dark")==0) {
        d3text.setAttribute("class","display-3 text-light");
        jumbtn1.setAttribute("class","btn btn-light btn-lg");       
    } else {
        d3text.setAttribute("class","display-3 text-"+color+"");
        jumbtn1.setAttribute("class","btn btn-"+color+" btn-lg");
    }

    elementohidden2.setAttribute("class",color);
    elementohidden.setAttribute("class","bg-"+color+"");
    bt4h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt5h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt3h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt2h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");
    bt1h.setAttribute("class","hbutton"+colorC+" list-group-item list-group-item-action ");

    footer.setAttribute("class","py-1 bg-"+color+" text-light rounded-top");
    btnfooter.setAttribute("class","btn btn-outline-light btn-lg ");

    headingOne.setAttribute("class","card-header bg-"+color+"");
    acordeonBtn1.setAttribute("class","btn btn-"+color+" collapsed");
    headingTwo.setAttribute("class","card-header bg-"+color+"");
    acordeonBtn2.setAttribute("class","btn btn-"+color+" collapsed");
    headingThree.setAttribute("class","card-header bg-"+color+"");
    acordeonBtn3.setAttribute("class","btn btn-"+color+" collapsed");


    var formularioRegvarvar = document.getElementById("formularioRegvar");
    if (isInPage(formularioRegvarvar)) {
        
        if (color.localeCompare("dark")==0) {
            textRegistroBig.setAttribute("class","d-none d-sm-block display-1 text-white text-center my-4");
            textRegistroSmall.setAttribute("class","d-block d-sm-none display-3 text-white text-center my-4");
            inputusername.setAttribute("class","form-control border-light");
            inputpassword.setAttribute("class","form-control border-light");
            inputnombre.setAttribute("class","form-control border-light");
            inputapellido.setAttribute("class","form-control border-light");
            inputemail.setAttribute("class","form-control border-light");
            btnregNewUser.setAttribute("class","btn btn-lg btn-block text-white bg-dark border-white");
        }else{
            textRegistroBig.setAttribute("class","d-none d-sm-block display-1 text-"+color+" text-center my-4");
            textRegistroSmall.setAttribute("class","d-block d-sm-none display-3 text-"+color+" text-center my-4");
            inputusername.setAttribute("class","form-control border-"+color);
            inputpassword.setAttribute("class","form-control border-"+color);
            inputnombre.setAttribute("class","form-control border-"+color);
            inputapellido.setAttribute("class","form-control border-"+color);
            inputemail.setAttribute("class","form-control border-"+color);
            btnregNewUser.setAttribute("class","btn btn-lg btn-block text-white bg-"+color+" border-white");
        }
      
    }


}

function concervarColorEspaciado(){
    var colorG = elementohidden2.getAttribute("class");
    setTimeout(()=>{
        btnChatEspaciado.setAttribute("class","btn btn-"+colorG+" col-5");
        if (colorG.localeCompare("danger")==0) {
            btnchatcerrar.setAttribute("class","btn btn-outline-light  mr-4 col-2");
        }else{
            btnchatcerrar.setAttribute("class","btn btn-outline-danger  mr-4 col-2");
        }
        
    },150);
}

let colorHidden = "";
function conservartema(){

    colorHidden = elementohidden2.getAttribute("class");

    if(colorHidden.localeCompare("warning")==0){
        colorHidden="dropdowncolor1";
    }
    if(colorHidden.localeCompare("danger")==0){
        colorHidden="dropdowncolor2";
    }
    if(colorHidden.localeCompare("primary")==0){
        colorHidden="dropdowncolor3";
    }
    if(colorHidden.localeCompare("dark")==0){
        colorHidden="dropdowncolor4";
    }
    
    setTimeout ('cambiartema(colorHidden);', 150); 
}

function conservartema2(){

    colorHidden = elementohidden2.getAttribute("class");

    if(colorHidden.localeCompare("warning")==0){
        colorHidden="dropdowncolor1";
    }
    if(colorHidden.localeCompare("danger")==0){
        colorHidden="dropdowncolor2";
    }
    if(colorHidden.localeCompare("primary")==0){
        colorHidden="dropdowncolor3";
    }
    if(colorHidden.localeCompare("dark")==0){
        colorHidden="dropdowncolor4";
    }
    
    setTimeout ('cambiartema(colorHidden);', 1000); 
}

function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}

function actualizarbg(){
    var h = elementohidden.getAttribute("class");
    var elementonavxl = document.getElementById("navthxl");
    var elementonavsm = document.getElementById("navthsm");
    var elementonavmd = document.getElementById("navthmd");
    var elementonavxs = document.getElementById("navthxs");
    var elementonavlg = document.getElementById("navthlg");
    if (isInPage(elementonavxl) || isInPage(elementonavsm) || isInPage(elementonavmd)  || isInPage(elementonavxs)  || isInPage(elementonavlg)) {
    $("#navthxl").addClass(h);
    navthxl.setAttribute("id","navxl");
    $("#navthlg").addClass(h);
    navthlg.setAttribute("id","navlg");
    $("#navthmd").addClass(h);
    navthmd.setAttribute("id","navmd");
    $("#navthsm").addClass(h);
    navthsm.setAttribute("id","navsm");
    $("#navthxs").addClass(h);
    navthxs.setAttribute("id","navxs");
    }

}

function restaurarbg(){
    var h = elementohidden.getAttribute("class");
    var elementonavxl = document.getElementById("navxl");
    var elementonavsm = document.getElementById("navsm");
    var elementonavmd = document.getElementById("navmd");
    var elementonavxs = document.getElementById("navxs");
    var elementonavlg = document.getElementById("navlg");
    if (isInPage(elementonavxl) || isInPage(elementonavsm) || isInPage(elementonavmd)  || isInPage(elementonavxs)  || isInPage(elementonavlg)) {
    $("#navxl").removeClass(h);
    navxl.setAttribute("id","navthxl");
    $("#navlg").removeClass(h);
    navlg.setAttribute("id","navthlg");
    $("#navmd").removeClass(h);
    navmd.setAttribute("id","navthmd");
    $("#navsm").removeClass(h);
    navsm.setAttribute("id","navthsm");
    $("#navxs").removeClass(h);
    navxs.setAttribute("id","navthxs");
    }
}

new WOW().init();

$(window).scroll(function(){
    var h = elementohidden.getAttribute("class");
    var elementonavxl = document.getElementById("navthxl");
    var elementonavsm = document.getElementById("navthsm");
    var elementonavmd = document.getElementById("navthmd");
    var elementonavxs = document.getElementById("navthxs");
    var elementonavlg = document.getElementById("navthlg");
    if (isInPage(elementonavxl) || isInPage(elementonavsm) || isInPage(elementonavmd)  || isInPage(elementonavxs)  || isInPage(elementonavlg)) {

        if ($("#navthxl").offset().top > 800) {
            $("#navthxl").addClass(h);
        } else {
            $("#navthxl").removeClass(h);
        }

        if ($("#navthlg").offset().top > 450) {
            $("#navthlg").addClass(h);
        } else {
            $("#navthlg").removeClass(h);
        }

        if ($("#navthmd").offset().top > 300) {
            $("#navthmd").addClass(h);
        } else {
            $("#navthmd").removeClass(h);
        }

        if ($("#navthsm").offset().top > 800) {
            $("#navthsm").addClass(h);
        } else {
            $("#navthsm").removeClass(h);
        }

        if ($("#navthxs").offset().top > 500) {
            $("#navthxs").addClass(h);
        } else {
            $("#navthxs").removeClass(h);
        }
    }
});


setTimeout(()=>{
    var URLactual = window.location.href;
    if (URLactual.localeCompare("https://springboot2-rest-chat-backend.herokuapp.com/clientes")==0 || URLactual.localeCompare("https://springboot2-rest-chat-backend.herokuapp.com/login")==0 ) {
        actualizarbg();
    }
    if (URLactual.localeCompare("http://localhost:4200/clientes")==0 || URLactual.localeCompare("http://localhost:4200/login")==0 ) {
        actualizarbg();
    }

},"1000");







