import AddressInput from "./AddressInput";
import PaymentInfo from "./PaymentInfo";

export default function Stage2 (props) {
    let display;
    
    (props.stage === 2) ? display = 'grid' : display = 'none';

    return (
        <form className='formProper' style={{display: `${display}`}} onSubmit={props.state.handleSubmit}>
            <p className='stageName'>Payment Information</p>
            <AddressInput stage={props.stage} state={props.state}/>
            <label id='sameAsShippingLabel'>
                <input type='checkbox' 
                    id='sameAsShippingElement'
                    onClick={props.state.handleUseSameAddress}></input>
                {' '}Use shipping address
            </label>
            <PaymentInfo state={props.state}/>
            <button className='submit' type='submit'>Next</button>
        </form>

    )
}