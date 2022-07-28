import React from 'react'
const Producto = ({producto,carrito,agregarProducto,productos})=>{
    const{nombre,precio,id}=producto

    // boton que agrega un producto
    const SeleccionarProducto=id=>{
        const producto = productos.filter(producto=>producto.id ===id)[0];
        agregarProducto([
            ...carrito,
            producto
        ])
    }
        // boton que elimina la compra
        const eliminarProducto=id=>{
            const producto = carrito.filter(producto=>producto.id !==id)
            agregarProducto(producto)
    }
    

    return(
        <div>
            <h2>{nombre}</h2>
            <p>{precio}</p>

            {productos

            ?(
            <button type='button'
             onClick={()=>SeleccionarProducto(id)}
             > Comprar  </button>)

            :(<button type='button'
            onClick={()=>eliminarProducto(id)}
            > Eliminar </button>)

            
            }
        </div>
    )
}
export default Producto