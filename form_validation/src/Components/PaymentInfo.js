


export default function PaymentInfo (props) {

    return (
        <>
            <label class='formElement' id='nameOnCardLabel'>
                Name on card
                <input id='nameOnCardElement' type='text'></input>
            </label>
            <label class='formElement' id='cardNumLabel'>
                Card Number
                <input id='cardNumElement' type='text'></input>
            </label>
            <label class='formElement' id='expLabel'>
                Exp.
                <input id='expElement'></input>
            </label>
            <label class='formElement' id='cvvLabel'>
                CVV
                <input id='cvvElement'></input>
            </label>
        </>
    )
}