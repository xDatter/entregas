window.onload=function(){
    $(".buscador__buscar").click(clickBuscar);

    $(".controles__previo").click(btnPREV);
    $(".controles__siguiente").click(btnNEXT);

    $(".controles__shiny").click(shiny);
    $(".navLateral__opcion1").click(btnNav1);   
    $(".navLateral__opcion2").click(btnNav2);
    $(".navLateral__opcion3").click(btnNav3);
    random();
}

//  --------------funciones Asincronicas
async function consultarPKM(url){
    $(".navDespliegue").toggleClass("navActive",false);
    $(".marcoImagen").toggleClass("imgActive",false);
    $(".nombrePKM__h3").css("color","#000");
    $(".nombrePKM__h4").css("color","#000");

    let colores={
        normal      :"A8A090",
        fighting    :"A05038",
        flying      :"98A8F0",
        poison      :"B058A0",
        ground      :"E9D6A4",
        rock        :"B8A058",
        bug         :"A8B820",
        ghost       :"6060B0",
        steel       :"A8A8C0",
        fire        :"F05030",
        water       :"3899F8",
        grass       :"78C850",
        electric    :"F8D030",
        psychic     :"F870A0",
        ice         :"58C8E0",
        dragon      :"7860E0",
        dark        :"7A5848",
        fairy       :"E79FE7"
    }

    let respuesta= await fetch(url);
    let pokemon= await respuesta.json();
    let habil="";
    let stats="";
    let tipos=[];
    let tipo1;
    let tipo2;
    let color1;
    let color2;
    
    (pokemon.abilities).forEach(element => {
        habil+= `<div class="wrapw">${element.ability.name}<br><br> </div>`;
    });

    (pokemon.stats).forEach(element => {
        stats+= `<div class="wrapw"> ${element.stat.name} <br> ${element.base_stat} <br><br></div>`;
    });

    (pokemon.types).forEach(element => {
        tipos.push(element.type.name);
    });

    if(tipos.length==1){
        tipo1= tipos[0];
        tipo2=""
        color2= `#${colores[`${tipo1}`]}99`;
        color1= color2;
    }
    else{      
        tipo1= tipos[0];
        tipo2= tipos[1];
        color1= `#${colores[`${tipo1}`]}99`;
        color2= `#${colores[`${tipo2}`]}99`;
    }

    $(".nombrePKM").css("background",`linear-gradient(to right, #11111150 40%, ${color1} 70%, ${color2} 85%)`);
    
    $(".nombrePKM__h3").html(`${pokemon.name}`);
    $(".nombrePKM__h4").html(`type ${tipo1} ${tipo2}`);
    $(".imagenPKM1").toggleClass("hidear",false);
    $(".imagenPKM2").toggleClass("hidear",true);
    $(".imagenPKM1").attr("src",`${pokemon.sprites.front_default}`);
    $(".imagenPKM2").attr("src",`${pokemon.sprites.front_shiny}`);
    $(".idPKM").text(pokemon.id);
    $(".info1").html(habil);
    $(".navDespliegue").attr("navDespliegueActive","0");


    $(".info2").html(stats);
    $(".info3").html(`<div class="wrapw">${tipo1}</div><div class="wrapw">${tipo2}</div>`);
}

async function random(){
    let numeroRandom= Math.floor(Math.random()*898);
    console.log(numeroRandom);
    let url="https://pokeapi.co/api/v2/pokemon/"+numeroRandom;
    consultarPKM(url);
}

async function clickBuscar(){
    let buscador= $(".buscador__input").val();
    let url="https://pokeapi.co/api/v2/pokemon/"+buscador;
    consultarPKM(url);
}

//  --------------funciones Sincronicas


function btnPREV(){
    let controlarId= $(".idPKM").text();
    controlarId=Number(controlarId);
    if (controlarId==1){
        controlarId=899;
    }
    let url="https://pokeapi.co/api/v2/pokemon/"+(controlarId-1);
    consultarPKM(url);
}

function btnNEXT(){
    let controlarId= $(".idPKM").text();
    controlarId=Number(controlarId);
    if (controlarId==898){
        controlarId=0;
    }
    let url="https://pokeapi.co/api/v2/pokemon/"+(controlarId+1);
    consultarPKM(url);
}

function shiny(){
    $(".imagenPKM1").toggleClass("hidear");
    $(".imagenPKM2").toggleClass("hidear");
}

function btnNav1(){
    let comparar= $(".navDescripcion1").attr("navDespliegueActive");
    if(comparar==0){
        $(".navDescripcion1").toggleClass("navActive",true);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".navDescripcion1").attr("navDespliegueActive","1");
        $(".navDescripcion3").toggleClass("navActive",false);
        $(".navDescripcion2").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",true);
        $(".nombrePKM__h3").css("color","#fff").css("transition","all 1s");
        $(".nombrePKM__h4").css("color","#fff").css("transition","all 1s");

    }
    else{
        $(".navDescripcion1").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",false);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".nombrePKM__h3").css("color","#000").css("transition","all 1s");
        $(".nombrePKM__h4").css("color","#000").css("transition","all 1s");
    }

}
function btnNav2(){
    let comparar= $(".navDescripcion2").attr("navDespliegueActive");
    if(comparar==0){
        $(".navDescripcion2").toggleClass("navActive",true);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".navDescripcion2").attr("navDespliegueActive","1");
        $(".navDescripcion1").toggleClass("navActive",false);
        $(".navDescripcion3").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",true);
        $(".nombrePKM__h3").css("color","#fff").css("transition","all 1s");
        $(".nombrePKM__h4").css("color","#fff").css("transition","all 1s");

    }
    else{
        $(".navDescripcion2").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",false);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".nombrePKM__h3").css("color","#000").css("transition","all 1s");
        $(".nombrePKM__h4").css("color","#000").css("transition","all 1s");
    }

}
function btnNav3(){
    let comparar= $(".navDescripcion3").attr("navDespliegueActive");
    if(comparar==0){
        $(".navDescripcion3").toggleClass("navActive",true);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".navDescripcion3").attr("navDespliegueActive","1");
        $(".navDescripcion1").toggleClass("navActive",false);
        $(".navDescripcion2").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",true);
        $(".nombrePKM__h3").css("color","#fff").css("transition","all 1s");
        $(".nombrePKM__h4").css("color","#fff").css("transition","all 1s");

    }
    else{
        $(".navDescripcion3").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",false);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".nombrePKM__h3").css("color","#000").css("transition","all 1s");
        $(".nombrePKM__h4").css("color","#000").css("transition","all 1s");
    }
}


