var existanceClient = document.getElementById("existance_client");
var typeClient = document.getElementById("type_client");
var typeCompte = document.getElementById("type_compte");
var compteCourant = document.getElementById("compte_courant");
var newClientSal = document.getElementById("newCustomer");
var compteSimpleNonSal = document.getElementById("compteSimple");
var clientMoral = document.getElementById("clientMoral");
var compteBloque = document.getElementById("compteBloque");
var submit = document.getElementById("validation")
var rechercher = document.getElementById("search_id");
var boutton = document.getElementById("bouton");

var nvCompte = document.getElementById("nouvCompte");
var accountExistant = document.getElementById("compteExistant");

var clientPhysique = document.getElementById("physiqueClient");
var entreprise = document.getElementById("clientEntreprise");

var compteXeweel = document.getElementById("simple");
var compteSalarie = document.getElementById("courant");
var bloque = document.getElementById("bloque");


window.onload = function(){
   typeClient.style.display = "none";
   typeCompte.style.display = "none";
   compteCourant.style.display = "none";
   newClientSal.style.display = "none";
   compteSimpleNonSal.style.display = "none";
   clientMoral.style.display = "none";
   compteBloque.style.display = "none";
   submit.style.display = "none";
   rechercher.style.display = "none";
   boutton.style.display = "none";
}

function exist(){
      if(nvCompte.checked == true){
            typeClient.style.display = "block";
            rechercher.style.display = "none";
            boutton.style.display = "none";
      }if(accountExistant.checked == true){
            alert("Veuillez saisir votre identifiant, vous avez dejà un compte Existant")
            typeCompte.style.display = "none"; 
            compteSimpleNonSal.style.display = "none";
            compteBloque.style.display = "none";
            compteCourant.style.display = "none";
            clientMoral.style.display = "none";
            typeClient.style.display = "none";
            submit.style.display = "none";
            rechercher.style.display = "block";
            boutton.style.display = "block";
      }
          
}

function physique(){
      if(clientPhysique.checked == true){
           typeCompte.style.display = "block"; 
           clientMoral.style.display = "none";
           submit.style.display = "none";
      }
      if(entreprise.checked ==true){
            clientMoral.style.display = "block";
            typeCompte.style.display = "none"; 
            compteSimpleNonSal.style.display = "none";
            compteBloque.style.display = "none";
            compteCourant.style.display = "none";
            submit.style.display = "block"; 
      }
}

function compte_simple(){
      if(compteXeweel.checked == true){
            compteSimpleNonSal.style.display = "block";
            compteCourant.style.display = "none";
            compteBloque.style.display = "none";
            submit.style.display = "block";
      }
      if(compteSalarie.checked == true){
            compteCourant.style.display = "block"; 
            compteSimpleNonSal.style.display = "none"; 
            compteBloque.style.display = "none";
            submit.style.display = "block";
      }
      if(bloque.checked == true){
            compteBloque.style.display = "block";
            compteCourant.style.display = "none"; 
            compteSimpleNonSal.style.display = "none"; 
            submit.style.display = "block";
      }
}



submit.addEventListener("click",function(e) {
   e.preventDefault();
      var prenom = document.getElementById("username");
      var nom = document.getElementById("name");
      var numCompte = document.getElementById("numcompte");
      var numAgence = document.getElementById("numagence");
      var numCni = document.getElementById("numcni");
      var telephone = document.getElementById("tel");
      var adresse = document.getElementById("mail");
      var format_email =  /^[a-zA-Z0-9.-]+@[a-z0-9._-]{2,}.[a-z]{2,4}$/;
      var residence = document.getElementById("residence");

      var dateOuv = document.getElementById("dateouv");
      var dateferme = document.getElementById("dateferme");

          if(!prenom.value){
            prenom.style.borderColor = "red";
      }
      if(!nom.value){
            nom.style.borderColor = "red";
      }
      if(!numCompte.value){
            numCompte.style.borderColor ="red";
      }
      if(!numAgence.value){
            numAgence.style.borderColor = "red";
      }
      if(!numCni.value){
            numCni.style.borderColor = "red";
      }
      if(!telephone.value){
            telephone.style.borderColor = "red";
      }
      if(!adresse.value){
            adresse.style.borderColor = "";
      }
      if(!residence.value){
            residence.style.borderColor = "red";
      }
      else{
            alert("Formulaire envoyé")
            prenom.style.borderColor = "";
            nom.style.borderColor = "";
            numCompte.style.borderColor ="";
            numAgence.style.borderColor = "";
            numCni.style.borderColor = "";
            telephone.style.borderColor = "";
            residence.style.borderColor = "";
      }
 
});

boutton.addEventListener("click", function(e){
      e.preventDefault();
      if(!rechercher.value){
            alert("Veuillez saisir votre ID de compte!");
            rechercher.style.borderColor = "red";
      }
      else{
            alert("Connection réussi, Soyez la Bienvenue!");
            rechercher.style.borderColor = "greenyellow";
      }
});

submit.addEventListener("click", function(e){
      e.preventDefault();
      var raisonSocial = document.getElementById("raison_social");
      var salaire = document.getElementById("salaire");
      var employeur = document.getElementById("employeur");
      var adresses = document.getElementById("adresses");

      if(!raisonSocial.value){
            raisonSocial.style.borderColor = "red";
      }
      if(!salaire.value){
            salaire.style.borderColor = "red";
      }
      if(!employeur.value){
            employeur.style.borderColor = "red";
      }
      if(!adresses.value){
            adresses.style.borderColor = "red";
      }
      else{
            alert("Formulaire envoyé")
            raisonSocial.style.borderColor = "";
            employeur.style.borderColor = "";
            adresses.style.borderColor = "";
            salaire.style.borderColor = "";   
      }
});


  
//    function testNumero(champ){
//        var formatNum = /^[77]{2}[0-9]{3}[0-9]{2}[0-9]{2}|[78]{2}[0-9]{3}[0-9]{2}[0-9]{2}|[70]{2}[0-9]{3}[0-9]{2}[0-9]{2}|[76]{2}[0-9]{3}[0-9]{2}[0-9]{2}$/;
//        if(formatNum.test(champ.value)){
//            if(champ.value.length == 9){
//                champ.style.borderColor = "#004d00";
//                return true;
//            }else{
//                champ.style.borderColor = "#791A1A";
//                return false;
//            }
//        }else{
//            champ.style.borderColor = "#791A1A";
//            return false;
//        }
//     }

 










 