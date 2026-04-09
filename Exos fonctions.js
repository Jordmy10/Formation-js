//exo 29
(function(){
    alert("bienvenue dans mon code")
}())

//exo28
function factoriel(n){
    if(n===0){
        return 1
    }
    return n * factoriel(n-1)
}

//exo27
const tab = [2,4,6,8,10]
const doubleTab = tab.map((x) => x*2)
console.table(doubleTab)

//exo24
function multiplier(nombre1, nombre2){
    return nombre1*nombre2
}

function effectuerOperation(nombreA, nombreB, operation){
    return operation(nombreA, nombreB)
}
console.log(effectuerOperation(5,10,multiplier))

//exo23
const displayMsg = function(message){
    return message
}
console.log(displayMsg("bonjour"))

//exo30
function display(){
    const message2 = "Salut"
    const message3 = 456
    return message2, message3
}
console.log(message2) // il ne va rien s'afficher car la portée de message2 se limite à la fonction display

//exo21
function executer(action){

}
executer(display())

//exo22
function mettreEnMajuscule(valeur){
    const maj = valeur.toUppercase()
    return maj
}

function displayMaj(mot, mettreEnMajuscule){
    console.log(mettreEnMajuscule(mot))
}
console.log(displayMaj("bonjour", mettreEnMajuscule))

//exo25
function creerMultiplicateur(facteur){
    return function(nombre){
        return nombre*facteur
    }

}
const multiplierPar2 = creerMultiplicateur(2)
console.log(multiplierPar2(5)) 

//exo26
//fonction callback avecparamètres
function effectuerOperation2(nombreA, nombreB, operation){
    return operation(nombreA, nombreB)
}









