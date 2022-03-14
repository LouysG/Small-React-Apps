import '../CSS/App.css';
import { useState } from 'react'
import Form from './Form';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import candle from '../Resources/candle.jpg'
import bath_salts from '../Resources/bath_salts.jpg'
import petals from '../Resources/petals.jpg'
import gorrila from '../Resources/gorrila_suit.jpg'

function App() {
  const [shipping, setShipping] = useState(0.0)
  const [taxRate, setTaxRate] = useState(0.0)

  function handleShippingChange (e) {
    setShipping(e.target.value)
  }

  return (
    <>
      <Form handleShippingChange={handleShippingChange}/>
      <div id='cart'>
        <CartItem id='cartItem1'
          image={candle}
          name='Scented Candles'
          quantity={2}
          cost='$30.98' />
        <CartItem id='cartItem2'
          image={bath_salts}
          name='Bath Salts'
          quantity={1}
          cost='$24.95' />
        <CartItem id='cartItem3'
          image={petals}
          name='Rose Petals (1000ct.)'
          quantity={1}
          cost='$9.99'/>
        <CartItem id='cartItem4'
          image={gorrila}
          name='Gorilla Suit'
          quantity={1}
          cost='$85.99' />
        <CartTotal shipping={shipping} taxRate={taxRate}/>
      </div>
    </>
  );
}

export default App;