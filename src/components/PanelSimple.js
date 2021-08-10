import { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let totalProduct = {
    title: 'Total Productos',
    color: 'primary', 
    cuantity: '0',
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalCategory = {
    title:' Total Categorias', 
    color:'success', 
    cuantity: '0',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let totalUser = {
    title:'Total Usuarios' ,
    color:'warning',
    cuantity:'0',
    icon:'fa-user-check'
}



const carts = [totalProduct, totalCategory, totalUser];

function PanelSimple(){
    const [cartProps, setCardProps] = useState([carts]);
    

   useEffect(() => {
        fetch('http://localhost:3002/api/products')
        .then(Response => Response.json())
        .then(data => {
            totalProduct.cuantity = data.length;
            fetch('http://localhost:3002/api/categories')
            .then(Response => Response.json())
            .then(data => {
                totalCategory.cuantity = data.length;
                 fetch('http://localhost:3002/api/users')
                 .then(Response => Response.json())
                 .then(data => {
                    totalUser.cuantity = data.length;
                    setCardProps(carts)
                      })
              })
       })
      .catch(error => console.log(error));

   },[]);



    useEffect(() => {
        console.log('actualizo el componete')
         },[cartProps])


    useEffect(() => {
       return () => console.log('se desmonto el componente')
    },[])

    return (
    
        <div className="row">
            { cartProps.length === 0 && <p>Cargando...</p>}
            
            {cartProps.map( (card, i) => {

                return <SmallCard {...card} key={i}/>
            
            })}
            
        </div>
    )
}

export default PanelSimple;;