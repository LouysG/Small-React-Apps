import '../CSS/CartTotal.css'

export default function CartTotal (props) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let items = 151.91
    let shipping = parseFloat(props.shipping)
    let tax = parseFloat(0.07 * items)
    let total = items + shipping + tax
    console.log(items, shipping, tax, total)

    return (
        <div id='cartTotal'>
            <p className='line1' id='left'>Order Summary</p>
            <p className='line2' id='left'>Items</p>
            <p className='line3' id='left'>Shipping</p>
            <p className='line4' id='left'>Tax</p>
            <p className='line5' id='left'>TOTAL</p>

            <p className='line2' id='right'>{formatter.format(items)}</p>
            <p className='line3' id='right'>{formatter.format(shipping)}</p>
            <p className='line4' id='right'>{formatter.format(tax)}</p>
            <p className='line5' id='right'>{formatter.format(total)}</p>
        </div>
    )
}