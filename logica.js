const formu = document.getElementById("formulario");

function validaFormu(event) {
  event.preventDefault();

  const VALOR_TICKET = 200;
  let descuento;
  let subTotal;

  const cantidad = document.getElementById("cantidad").value;
  const categoria = document.getElementById("categoria").value;

  if (!(cantidad != "" )) {
    alert("Ups! es un valor requerido.. 🤭");
  }
  formu.reset();
  document.getElementById("cantidad").focus();

  if (categoria === "estudiante" || categoria === "Estudiante") {
    subTotal = parseInt(cantidad) * VALOR_TICKET;
    descuento = subTotal * 0.8;
    console.log(descuento);
  } else if (categoria === "trainee" || categoria === "Trainee") {
    subTotal = parseInt(cantidad) * VALOR_TICKET;
    descuento = subTotal * 0.5;
    descuento = subTotal - descuento;
  } else if (categoria === "junior" || categoria === "Junior") {
    subTotal = parseInt(cantidad) * VALOR_TICKET;
    descuento = subTotal * 0.15;
    descuento = subTotal - descuento;
  }

  const totalAPagar = document.getElementById("totalAPagar");
  totalAPagar.innerHTML = `Total a pagar:$${descuento}`;
}

formu.addEventListener("submit", validaFormu);
