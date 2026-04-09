function destructurationTableauexo4() {
    const [premier, deuxieme, troisieme] = [1, 2, 3]
    console.log(premier, deuxieme, troisieme)
}
destructurationTableauexo4()


console.log("\n\n\___________________________________________\n\n")
function exo5() {
    const [deuxieme, ...restArray] = [1, 2, 3]
    console.log(restArray)
}
exo5()


console.log("\n\n\___________________________________________\n\n\n\n")

function exo7() {
    const acteurs = {
        user: {
            nom: "john",
            age: 30
        }
    }
    const { user: { nom, age } } = acteurs
    console.log(nom + ",", age)
}
exo7()


console.log("\n\n\___________________________________________\n\n")

const lettres = {
    a: 1,
    b: 2,
    c: 3
}

function afficherReste({ a, ...rest }) {
    console.log(a)
    console.log(rest)
}
afficherReste(lettres)


console.log("\n\n\___________________________________________\n\n\n\n")
const lettres2 = {
    a: 1,
    b: undefined
}

const {a, b} = lettres2
console.log(a, b)

console.log("\n\n\___________________________________________\n\n\n\n")

const valeurs = {
    a: 15,
    b: 25,
    somme: undefined
}

const {a:a2, b:b2, somme = a2 +b2} = valeurs
console.log("la somme est égale à " + somme)


console.log("\n\n\___________________________________________\n\n\n\n")
//exo10
const [premiere, deuxiememe, ...restArray] = [1, 2, 3, 4]
console.log(premiere)
console.log(deuxiememe)
console.log(restArray)


console.log("\n\n\___________________________________________\n\n\n\n")
//exo9
 const nombres = {
    x: 40,
    y: 60
 }

 let {x:y, y:x} = nombres
 console.log(x + " ,", y)


 console.log("\n\n\___________________________________________\n\n\n\n")
//exo8
function displayNumbers({x, y}){
    console.log(x)
    console.log(y)
}
displayNumbers(nombres)


console.log("\n\n\___________________________________________\n\n\n\n")
//exo