/*Este archivo contiene las funciones relevantes para el desarrollo de la fruteria online*/ 

/*---------------------------------------------------------------------------------------
Esta funcion verifica si existe suficiente stock para poder ejecutar la transaccion
Retorna
true: si el stock es sufiente
false: si el stock no es suficiente
----------------------------------------------------------------------------------------*/
const verificarStock = ( cantidad , stock ) =>{
    if(cantidad > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`)
        return false
    }
    else return true;
}


/*---------------------------------------------------------------------------------------
Esta funcion ejecuta el agregado de productos al carrito
No tiene retorno
----------------------------------------------------------------------------------------*/
const agregarAlCarrito = ( producto, cantidad ) =>{
    switch (producto) {
        case 1:
            if(verificarStock(cantidad,stockMango)){
                carrito += (cantidad * priceMango);
                stockMango -= cantidad;
                alert('Producto agregado al carrito')
            }
          break;
    
        case 2:
            if(verificarStock(cantidad,stockLimon)){
                carrito += (cantidad * priceLimon);
                stockLimon -= cantidad;
                alert('Producto agregado al carrito')
            }
          break;
    
        case 3:
            if(verificarStock(cantidad,stockBanana)){
                carrito += (cantidad * priceBanana);
                stockBanana -= cantidad;
                alert('Producto agregado al carrito')
            }
          break;
    
        default:
            alert('Producto no encontrado')
      }

}





