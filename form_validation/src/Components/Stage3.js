import { useImperativeHandle } from "react";



export default function Stage3 (props) {
    let display;
    let hiddenMessage;
    (props.stage === 3) ? display = 'grid' : display = 'none';

    if (props.state.submitFail) {
        hiddenMessage = <p id='hiddenShippingMessage'>Select a shipping method</p>
    }

    function handleRadioSelect (e) {
        props.state.handleShippingChange(e)
        props.state.handleChange(e)
    }

    return (
        <form className='formProper' style={{display: `${display}`}} onSubmit={props.state.handleSubmit}>
            <p className='stageName'>Shipping Method</p>
            <label className='formElement' id='shipping'>
                <input type='radio' 
                    name='shipping'
                    value={7.99}
                    onClick={handleRadioSelect}>
                </input>
                {' '}Standard (7 - 10 business days) $7.99
            </label>
            <label className='formElement' id='shipping'>
                <input type='radio' 
                    name='shipping'
                    value={20.99}
                    onClick={handleRadioSelect}>
                </input>
                {' '}Expedited (2 business days) $20.99
            </label>
            <label className='formElement' id='shipping'>
                <input type='radio' 
                    name='shipping'
                    value={0.1}
                    onClick={handleRadioSelect}>
                </input>
                {' '}Dime Membership (get it by tomorrow!) $0.10
            </label>
            {hiddenMessage}
            <button className='submit' type='submit'>Next</button>
        </form>
    )
}