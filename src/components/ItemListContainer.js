import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import ItemCard from './ItemCard';

const products = [
    {
      id: 1,
      name: "Anteojos",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "./img/products/anteojos.jpg",
      price: "10000",
      stock: 5,
      rate: 5
    },
    {
      id: 2,
      name: "Auriculares",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "./img/products/auriculares.jpg",
      price: "10000",
      stock: 10,
      rate: 5
    },
    {
      id: 3,
      name: "Botella",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "./img/products/botella.jpg",
      price: "10000",
      stock: 20,
      rate: 5
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "./img/products/smartwatch-negro.jpg",
      price: "10000",
      stock: 7,
      rate: 5
    },
    {
      id: 5,
      name: "Smartwatch",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "./img/products/smartwatch-rojo.jpg",
      price: "10000",
      stock: 3,
      rate: 5
    },
    {
      id: 6,
      name: "Alexa",
      description: "With supporting text below as a natural lead-in to additional content.",
      img: "./img/products/alexa.jpg",
      price: "10000",
      stock: 0,
      rate: 5
    }
]

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        const error = false;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(!error) {
                    resolve(products)
                }else{
                    reject("Hubo un error")
                }
            }, 5000)
        }
            
        )
    }

    useEffect(() => {
        getData()
        .then(res => {
            setData(res);
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error)
        })
    }, [])

    return (
        <>
        
        {
            loading? 
                <Spinner
                    color="primary"
                    type="grow"
                ></Spinner>
                :
                <div className="row">
            
                    {
                        data.map((product) => (
                            <div className="col-4" key={product.id}>
                                <ItemCard nombre={product.name} descripcion={product.description} img={product.img} precio={product.price} stock={product.stock}/>
                            </div>
                        ))
                    }
                </div>
        }
        
        </>
        


        
    )
}

export default ItemListContainer