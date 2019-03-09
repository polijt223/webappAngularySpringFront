


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
    console.log(h);
    x.setAttribute("class","card mt-3 shadow-lg border border-"+h);
    
}
function menoszoom(x){
    var h = elementohidden2.getAttribute("class");
    x.setAttribute("class","card  border border-"+h);
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


    navth.setAttribute("class","navbar navbar-expand-sm navbar-dark bg-"+color+" fixed-top ");
    btnf1.setAttribute("class","btn btn-outline-light my-2 my-sm-0");

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
        
    var listCss = document.getElementById("listClientesCSS");
    if (isInPage(listCss)) {
        cardListaUsuariosPrincipal.setAttribute("class","card border-"+color+" mb-3");
        cardListaUsuariosBody.setAttribute("class","card-body text-light bg-"+color);
        btnListaUsuariosCrear.setAttribute("class","btn btn-rounded btn-"+color+" border-success");
        tbodyListaUsuariosDatos.setAttribute("class","bg-white text-"+color);
    }
    
    var formCSS = document.getElementById("cardFormClienteNew");
    if (isInPage(formCSS)) {
        cardFormClienteNew.setAttribute("class","card bg-"+color+" text-white border-success");
        btnFormClienteNew.setAttribute("class","btn text-white bg-"+color+" border-success");
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

function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}





