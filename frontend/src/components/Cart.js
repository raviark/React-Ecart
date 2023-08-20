import React from 'react'
import { CartState } from './context/Context'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState()
  // const prep = cart.map((prod) => (console.log(prod.name,"test")))
  // prep();
  return (
    <div className='home'>
    <div className='productContainer'>
      <ListGroup>
        {
          cart.map((prod) => (
            <span>{prod.name}</span>
          ))
        }
      {/* <ListGroup.Item>Cras justo odio</ListGroup.Item> */}
      </ListGroup>
    </div>
    </div>
  )
}

export default Cart