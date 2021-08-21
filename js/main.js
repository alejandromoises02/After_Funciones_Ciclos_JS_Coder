alert("Bienvenido a tu fruteria online");

do {
  let fruta = parseInt(prompt(menu));
  if (fruta === 4) break;
  let cantidad = parseInt(prompt(cantidadSeleccionada));

  agregarAlCarrito(fruta, cantidad);

  resp = prompt("¿Desea agregar mas productos? S/N");
} while (resp == "S");

if(carrito > 0){
    alert(`Su compra tiene un total de ${carrito}`)
}

alert('Gracias por su visita')
