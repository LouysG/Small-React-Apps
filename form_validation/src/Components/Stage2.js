import AddressInput from "./AddressInput";
import PaymentInfo from "./PaymentInfo";

export default function Stage2 (props) {
    let display;
    
    (props.stage === 2) ? display = 'grid' : display = 'none';

    return (
        <form className='formProper' style={{display: `${display}`}}>
            <p className='stageName'>Payment Information</p>
            <AddressInput stage={props.stage}/>
            <label id='sameAsShippingLabel'>
                <input type='checkbox' id='sameAsShippingElement'></input>
                {' '}Use shipping address
            </label>
            <PaymentInfo/>
            <button className='submit' type='submit'>Next</button>
        </form>

    )
}