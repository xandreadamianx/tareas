/* EJERCICIO 1 */

/* pegamos el array */
let array1 = ["This", "is", "a", "sentence."];

function printOutString() {
  let completa = array1.join(" ");  // Unir todo en un solo string
  console.log(completa);             // Imprime "This is a sentence."
}

printOutString();

/* EJERCICIO 2 */
// Dado un array [6, 7, 8, 9]. La salida debería ser [12, 14, 16, 18].

let array2 = [6, 7, 8, 9];

function duplicarArray(arr) {
  let duplicar = arr.map(num => num * 2); // Duplicar los valores */
  console.log(duplicar); 
}

duplicarArray(array2); // ejecutar función, IMPRIME 12,14,16,18

/* EJERCICIO 3 */

let array3 = [4, 5, 6, 7];
  
function sumarMultiplicar(arr) {
    let suma = arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);  /* sumar */
    let producto = arr.reduce((acumulador, valorActual) => acumulador * valorActual, 1); /* multiplicar */
    
    console.log("Suma:", suma); //22
    console.log("Producto:", producto); //840
}

sumarMultiplicar(array3); /* ejecutar función */

/* EJERCICIO 4 */

let student1Courses = [ "math", "english", "programming"];
let student2Courses = ["geography", "spanish", "programming"];

/* filter e include encontrará los cursos comunes entre los arrays */

let cursosEnComun = student1Courses.filter (course => student2Courses.includes(course)); /* FILTER crea un nuevo array filtrando los cursos de student1Courses que estén en student2Courses, mientras que INCLUDES busca un elemento de stdent1Couses que esté en student2Courses */
if (cursosEnComun.length > 0) {  /* length cuenta cuántos elementos hay en el array y ">0" nos dirá si hay al menos un curso que comparten */
    console.log("Los cursos en común son:", cursosEnComun); //imprime "Los cursos en comùn son: "programming"
} else {
    console.log("Estos grupos NO tienen cursos en común");
}

/* EJERCICIO 5 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
/* imprimir todos los nombres */
    console.log( "Los invitados son:", people);
/* Quitar a Dani */
    console.log (people.splice (1,1)); //remueve "Dani"
    console.log(people); // "Maria, Luis, Juan, Camila"
/* Quitar a Juan */
    console.log (people.splice (2,1));
    console.log(people); // "Maria, Luis, Camila"
/* Mover Luis al frente */
    console.log (people.splice (1,1)); //Quitamos a Luis
    people.unshift("Luis"); //Lo ponemos al frente
    console.log( "Los invitados son:", people); // "Luis, Maria, Camila"
/* Agregar Andra al final del array */
    people.push("Andrea");
    console.log( "Los invitados son:", people); // "Luis, Maria, Camila, Andrea"
/* Iterar hasta llegar a "Maria" y luego salir del bucle */
for (let i = 0; i < people.length; i++) {
    console.log(people[i]); // Imprime el nombre
    if (people[i] === "Maria") { // Verifica si el nombre es "Maria"
        break; // Sale del bucle si es "Maria"
    }
}
/* Encontrar índice de "Maria" */
let index = people.indexOf("Maria");
    console.log("El índice de Maria es:", index);  //El índce de Maria es 1
/* Deberían quedar 4 personas */
    console.log( "Los invitados son:", people); // "Los invitados son Luis, Maria, Camila, Andrea (4)"

