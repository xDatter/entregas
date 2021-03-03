window.onload=function(){
    $(".buscador__buscar").click(clickBuscar);
    $(".controles__shiny").click(shiny);
    $(".navLateral__opcion1").click(btnNav1);   
    $(".navLateral__opcion2").click(btnNav2);
    $(".navLateral__opcion3").click(btnNav3);

}





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

    // let hhhhola="fire";
    // console.log(`#${colores[`${hhhhola}`]}99`)


    let respuesta= await fetch(url);
    let pokemon= await respuesta.json();
    let habil="";
    let stats="";
    let tipos=[];
    


    
    pokemon.abilities.forEach(element => {
        habil+= `<div class="wrapw">${element.ability.name}<br><br> </div>`
    });

    pokemon.stats.forEach(element => {
        stats+= `<div class="wrapw"> ${element.stat.name} <br> ${element.base_stat} <br><br></div>`
    });

    pokemon.types.forEach(element => {
        tipos.push(element.type.name);
    });
    console.log(tipos)

    $(".nombrePKM").css("background",`linear-gradient(to right, #33333339 40%, #00000090 70%, #2222ff99 85%)`);
    
    $(".nombrePKM__h3").html(`ID ${pokemon.id} ||  ${pokemon.name}`);
    $(".nombrePKM__h4").html(`ID -${pokemon.id} - ${pokemon.name}`);
    $(".imagenPKM1").toggleClass("hidear",false);
    $(".imagenPKM2").toggleClass("hidear",true);
    $(".imagenPKM1").attr("src",`${pokemon.sprites.front_default}`);
    $(".imagenPKM2").attr("src",`${pokemon.sprites.front_shiny}`);
    $(".info1").html(habil);
    $(".navDespliegue").attr("navDespliegueActive","0");


    $(".info2").html(stats);
    $(".info3").html(tipos);

}

async function clickBuscar(){
    let buscador= $(".buscador__input").val();
    let url="https://pokeapi.co/api/v2/pokemon/"+buscador;
    let cambios= consultarPKM(url);
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
        $(".nombrePKM__h3").css("color","#fff");
        $(".nombrePKM__h4").css("color","#fff");

    }
    else{
        $(".navDescripcion1").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",false);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".nombrePKM__h3").css("color","#000");
        $(".nombrePKM__h4").css("color","#000");
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
        $(".nombrePKM__h3").css("color","#fff");
        $(".nombrePKM__h4").css("color","#fff");

    }
    else{
        $(".navDescripcion2").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",false);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".nombrePKM__h3").css("color","#000");
        $(".nombrePKM__h4").css("color","#000");
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
        $(".nombrePKM__h3").css("color","#fff");
        $(".nombrePKM__h4").css("color","#fff");

    }
    else{
        $(".navDescripcion3").toggleClass("navActive",false);
        $(".marcoImagen").toggleClass("imgActive",false);
        $(".navDespliegue").attr("navDespliegueActive","0");
        $(".nombrePKM__h3").css("color","#000");
        $(".nombrePKM__h4").css("color","#000");
    }
}

