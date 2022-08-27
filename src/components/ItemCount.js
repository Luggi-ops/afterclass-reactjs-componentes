import React, { useState } from 'react'
import { Button } from 'reactstrap'

const ItemCount = ({stock, addToCart}) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

    const handleSubstract = () => {
        if(count > 0) {
            setCount(count-1)
        }
    }


  return (
    <div>
        <Button onClick={handleSubstract}> - </Button>
        <h3> { count } </h3>
        <Button onClick={handleAdd}> + </Button>
        <Button  style={{width: "100%", marginTop: "1rem"}} disabled={stock<=0} onClick={() => addToCart(count)}>Añadir al carrito</Button>
    </div>
  )
}

export default ItemCount