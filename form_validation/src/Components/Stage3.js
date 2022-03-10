


export default function Stage3 (props) {
    let display;
    
    (props.stage === 3) ? display = 'grid' : display = 'none';

    return (
        <form className='formProper' style={{display: `${display}`}}>
            <p className='stageName'>Shipping Method</p>
            <label className='formElement'>
                <input type='radio' name='shipping'></input>
                {' '}Standard (7 - 10 business days) $7.99
            </label>
            <label className='formElement'>
                <input type='radio' name='shipping'></input>
                {' '}Expedited (2 business days) $20.99
            </label>
            <label className='formElement'>
                <input type='radio' name='shipping'></input>
                {' '}Dime Membership (get it by tomorrow!) $0.10
            </label>
            <button className='submit' type='submit'>Next</button>
        </form>
    )
}