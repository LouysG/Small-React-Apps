


export default function PaymentInfo (props) {
    let nameBorder;
    let cardNumberBorder;
    let expirationBorder;
    let cvvBorder

    if (props.state.submitFail) {
        const cardNumberPattern = new RegExp(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/)
        const expirationPattern = new RegExp(/^[0-3]?\d\/?\d\d$/)
        const cvvPattern = new RegExp(/^\d{3}$/)
        if (!props.state.userInput.nameOnCard) {
            nameBorder = {border: '.3vh solid red'}
        }
        if (!cardNumberPattern.test(props.state.userInput.cardNumber)) {
            cardNumberBorder = {border: '.3vh solid red'}
        }
        if (!expirationPattern.test(props.state.userInput.expiration)) {
            expirationBorder = {border: '.3vh solid red'}
        }
        if (!cvvPattern.test(props.state.userInput.cvv)) {
            cvvBorder = {border: '.3vh solid red'}
        }
    }


    return (
        <>
            <label className='formElement' id='nameOnCardLabel'>
                Name on card
                <input id='nameOnCardElement' 
                    type='text'
                    name='nameOnCard'
                    value={props.state.userInput.nameOnCard}
                    onChange={props.state.handleChange}
                    style={nameBorder}>
                </input>
            </label>
            <label className='formElement' id='cardNumLabel'>
                Card Number
                <input id='cardNumElement' 
                    type='text'
                    name='cardNumber'
                    value={props.state.userInput.cardNumber}
                    onChange={props.state.handleChange}
                    style={cardNumberBorder}>
                </input>
            </label>
            <label className='formElement' id='expLabel'>
                Exp.
                <input id='expElement'
                    name='expiration'
                    value={props.state.userInput.expiration}
                    onChange={props.state.handleChange}
                    style={expirationBorder}>
                </input>
            </label>
            <label className='formElement' id='cvvLabel'>
                CVV
                <input id='cvvElement'
                    name='cvv'
                    value={props.state.userInput.cvv}
                    onChange={props.state.handleChange}
                    style={cvvBorder}>
                </input>
            </label>
        </>
    )
}