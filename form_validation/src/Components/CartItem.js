
export default function CartItem (props) {
    
    
    return (
        <div className='cartItem' id={props.id}>
            <div className='imgWrapper'>
                <img src={props.image} className='itemImage'></img>
            </div>
            <p className='itemName'>{props.name}</p>
            <p className='itemQuantity'>QTY: {props.quantity}</p>
            <p className='itemCost'>{props.cost}</p>
        </div>
    )
}