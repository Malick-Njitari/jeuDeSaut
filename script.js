var personne=document.querySelector(".personne");
var obstacle=document.querySelector(".obstacle");

var compteur=document.querySelector('#btn');//Pour le compteur
// la fonction qui permet de faire sauter le bonhomme
function sauter() {
   
    if(personne.classList !="animation"){
        personne.classList.add("animation");
       
    }
    setTimeout(function(){
        personne.classList.remove("animation");
        
    },500)
}

// /*

var i=0;

var incrementer=(e )=>{// Fonction flechee
e.preventDefault();
    i++;
    var span=compteur?.querySelector('span');
    if(span){
        span.innerText=i.toString();
    }
//
}
compteur?.addEventListener('click',incrementer);

var btn1=document.getElementById('btn');

btn1.addEventListener("click",charger);

function charger(){
    history.go(-2);
}

//*/

//Ici c'est pour verrifier si le bonhomme a sauté la balle
var verification=setInterval(function(){
    var p=parseInt(window.getComputedStyle(personne).getPropertyValue("top"));
    var obstacleGauche=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
 
    if(obstacleGauche<20 && obstacleGauche>0 &&  p>=130 ){

        obstacle.style.animation ="none";
        alert("vous avez perdu désoler / Cliquez sur le boutton Start pour recommencer")

   }


},1)


