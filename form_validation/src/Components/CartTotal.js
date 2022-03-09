import '../CSS/CartTotal.css'

export default function CartTotal (props) {

    let items = 151.91
    let shipping = props.shipping ? props.shipping : '0.00'
    let tax = props.taxRate ? props.taxRate * items : '0.00'
    let total = items 
        + (props.shipping ? props.shipping : 0) 
        + (props.taxRate ? props.taxRate : 0);

    return (
        <div id='cartTotal'>
            <p className='line1' id='left'>Order Summary</p>
            <p className='line2' id='left'>Items</p>
            <p className='line3' id='left'>Shipping</p>
            <p className='line4' id='left'>Tax</p>
            <p className='line5' id='left'>TOTAL</p>

            <p className='line2' id='right'>${items}</p>
            <p className='line3' id='right'>${shipping}</p>
            <p className='line4' id='right'>${tax}</p>
            <p className='line5' id='right'>${total}</p>
        </div>
    )
}