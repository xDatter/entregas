window.onload=function(){
    $(".buscador__buscar").click(clickBuscar);
    $(".controles__shiny").click(shiny);
}

async function consultarPKM(url){
    let respuesta= await fetch(url);
    let pokemon= await respuesta.json();
    let habil="";
    let stats="";
    let variocolor=pokemon.sprites.front_shiny;

    
    pokemon.abilities.forEach(element => {
        habil+= element.ability.name+"<br><br><br><br>"
    });

    pokemon.stats.forEach(element => {
        stats+= element.stat.name+"<br>"+element.base_stat+"<br><br><br><br>"
    });

    $(".nombrePKM__h3").html(`ID ${pokemon.id} ||  ${pokemon.name}`);
    $(".nombrePKM__h4").html(`ID -${pokemon.id} - ${pokemon.name}`);
    $(".imagenPKM1").toggleClass("hidear",false);
    $(".imagenPKM2").toggleClass("hidear",true);
    $(".imagenPKM1").attr("src",`${pokemon.sprites.front_default}`);
    $(".imagenPKM2").attr("src",`${pokemon.sprites.front_shiny}`);
    $(".info1").html(habil);
    $(".info2").html(stats);
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

