const formu = document.getElementById("formulario");

function validaFormu(event) {
  event.preventDefault();

  const VALOR_TICKET = 200;
  let descuento;
  let subTotal;

  const cantidad = document.getElementById("cantidad").value;
  const categoria = document.getElementById("categoria").value;

  if (!(cantidad != "" )) {
  
    document.getElementById("cantidad").focus();
  }
  formu.reset();
  document.getElementById("cantidad").focus();

  if (categoria === "estudiante" || categoria === "Estudiante") {
    subTotal = parseInt(cantidad) * VALOR_TICKET;
    descuento = subTotal * 0.80;
    descuento = subTotal - descuento;
  } else if (categoria === "trainee" || categoria === "Trainee") {
    subTotal = parseInt(cantidad) * VALOR_TICKET;
    descuento = subTotal * 0.50;
    descuento = subTotal - descuento;
  } else if (categoria === "junior" || categoria === "Junior") {
    subTotal = parseInt(cantidad) * VALOR_TICKET;
    descuento = subTotal * 0.15;
    descuento = subTotal - descuento;
  }

if (cantidad === "") {
   const totalAPagar = document.getElementById("totalAPagar");
   totalAPagar.innerHTML = `Cantidad es obligatorio &#129045;`;
} else {
  const totalAPagar = document.getElementById("totalAPagar");
  totalAPagar.innerHTML = `Total a pagar:&#36; ${descuento} &#10087;`;
}


  
}

formu.addEventListener("submit", validaFormu);
