


export default function PaymentInfo (props) {

    return (
        <>
            <label className='formElement' id='nameOnCardLabel'>
                Name on card
                <input id='nameOnCardElement' 
                    type='text'
                    name='nameOnCard'
                    value={props.state.userInput.nameOnCard}
                    onChange={props.state.handleChange}>
                </input>
            </label>
            <label className='formElement' id='cardNumLabel'>
                Card Number
                <input id='cardNumElement' 
                    type='text'
                    name='cardNumber'
                    value={props.state.userInput.cardNumber}
                    onChange={props.state.handleChange}>
                </input>
            </label>
            <label className='formElement' id='expLabel'>
                Exp.
                <input id='expElement'
                    name='expiration'
                    value={props.state.userInput.expiration}
                    onChange={props.state.handleChange}>
                </input>
            </label>
            <label className='formElement' id='cvvLabel'>
                CVV
                <input id='cvvElement'
                    name='cvv'
                    value={props.state.userInput.cvv}
                    onChange={props.state.handleChange}>
                </input>
            </label>
        </>
    )
}