


export default function AddressInput (props) {
    let style;
    (props.stage === 2) ? style = {gridRow: '10 / span 5'} : style ={};

    return (
        <label className='formElement' id='addressLabel' style={style}>
            Address
            <input 
                className='addressElement'
                type='text'>
            </input>
            <input 
                className='addressElement'
                type='text'>
            </input>
            <div className='stateLine'>
                <input id='city' type='text'></input>
                <select id='state'>
                    <option value=''> </option>
                    <option value='AZ'>AZ</option>
                    <option value='CA'>CA</option>
                    <option value='FL'>FL</option>
                    <option value='NY'>NY</option>
                    <option value='TX'>TX</option>
                </select>
                <input id='zip' type='text'></input>
            </div>
        </label>
    )
}