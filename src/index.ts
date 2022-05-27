let cantidadButacas: number = Number(prompt("Ingrese número de butacas disponibles"));

let butacas: boolean[] = new Array(cantidadButacas);

let butacasLibres: number = 0;
for(let indice: number = 0; indice < cantidadButacas; indice++){
  butacas[indice] = Boolean(
  prompt("¿La butaca " + (indice + 1) + " esta ocupada? (Vacio: No)" )
  )
  if butacas[indice] === false {
    butacasLibres++; 
}

}

console.log("la cantidad de butacas libres es " + butacasLibres);
