import { useImperativeHandle } from "react";



export default function Stage3 (props) {
    let display;
    
    (props.stage === 3) ? display = 'grid' : display = 'none';

    return (
        <form className='formProper' style={{display: `${display}`}} onSubmit={props.state.handleSubmit}>
            <p className='stageName'>Shipping Method</p>
            <label className='formElement' id='shipping'>
                <input type='radio' 
                    name='shipping'
                    value='7.99'
                    onClick={props.state.handleChange}
                    checked={props.state.userInput.shipping === '7.99'}>
                </input>
                {' '}Standard (7 - 10 business days) $7.99
            </label>
            <label className='formElement' id='shipping'>
                <input type='radio' 
                    name='shipping'
                    value='20.99'
                    onClick={props.state.handleChange}
                    checked={props.state.userInput.shipping === '20.99'}>
                </input>
                {' '}Expedited (2 business days) $20.99
            </label>
            <label className='formElement' id='shipping'>
                <input type='radio' 
                    name='shipping'
                    value='0.1'
                    onClick={props.state.handleChange}
                    checked={props.state.userInput.shipping === '0.1'}>
                </input>
                {' '}Dime Membership (get it by tomorrow!) $0.10
            </label>
            <button className='submit' type='submit'>Next</button>
        </form>
    )
}