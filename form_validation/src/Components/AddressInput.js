


export default function AddressInput (props) {
    let style;
    let nameSet;

    if (props.stage === 1) {
        nameSet = {
            address1: 'address1',
            address2: 'address2',
            city: 'city',
            state: 'state',
            zip: 'zip'
        }
    } else if (props.stage === 2) {
        nameSet = {
            address1: 'billing_address1',
            address2: 'billing_address2',
            city: 'billing_city',
            state: 'billing_state',
            zip: 'billing_zip'
        }
    }

    (props.stage === 2) ? style = {gridRow: '10 / span 5'} : style ={};



    return (
        <label className='formElement' id='addressLabel' style={style}>
            Address
            <input 
                className='addressElement'
                id='addressElement1'
                name={nameSet.address1}
                type='text'
                value={props.state.userInput[nameSet.address1]}
                onChange={props.state.handleChange}>
            </input>
            <input 
                className='addressElement'
                id='addressElement2'
                name={nameSet.address2}
                type='text'
                value={props.state.userInput[nameSet.address2]}
                onChange={props.state.handleChange}>
            </input>
            <div className='stateLine'>
                <input 
                    id='city' 
                    type='text'
                    name={nameSet.city}
                    value={props.state.userInput[nameSet.city]}
                    onChange={props.state.handleChange}>
                </input>
                <select id='state'
                        name={nameSet.state}
                        value={props.state.userInput[nameSet.state]}
                        onChange={props.state.handleChange}>
                    <option value=''> </option>
                    <option value='AL'>AL</option>
                    <option value='AK'>AK</option>
                    <option value='AZ'>AZ</option>
                    <option value='AR'>AR</option>
                    <option value='CA'>CA</option>
                    <option value='CO'>CO</option>
                    <option value='CT'>CT</option>
                    <option value='DE'>DE</option>
                    <option value='DC'>DC</option>
                    <option value='FL'>FL</option>
                    <option value='GA'>GA</option>
                    <option value='HI'>HI</option>
                    <option value='ID'>ID</option>
                    <option value='IL'>IL</option>
                    <option value='IN'>IN</option>
                    <option value='IA'>IA</option>
                    <option value='KS'>KS</option>
                    <option value='KY'>KY</option>
                    <option value='LA'>LA</option>
                    <option value='ME'>ME</option>
                    <option value='MD'>MD</option>
                    <option value='MA'>MA</option>
                    <option value='MI'>MI</option>
                    <option value='MN'>MN</option>
                    <option value='MS'>MS</option>
                    <option value='MO'>MO</option>
                    <option value='MT'>MT</option>
                    <option value='NE'>NE</option>
                    <option value='NV'>NV</option>
                    <option value='NH'>NH</option>
                    <option value='NJ'>NJ</option>
                    <option value='NM'>NM</option>
                    <option value='NY'>NY</option>
                    <option value='NC'>NC</option>
                    <option value='ND'>ND</option>
                    <option value='OH'>OH</option>
                    <option value='OK'>OK</option>
                    <option value='OR'>OR</option>
                    <option value='PA'>PA</option>
                    <option value='RI'>RI</option>
                    <option value='SC'>SC</option>
                    <option value='SD'>SD</option>
                    <option value='TN'>TN</option>
                    <option value='TX'>TX</option>
                    <option value='UT'>UT</option>
                    <option value='VT'>VT</option>
                    <option value='VA'>VA</option>
                    <option value='WA'>WA</option>
                    <option value='WV'>WV</option>
                    <option value='WI'>WI</option>
                    <option value='WY'>WY</option>
                </select>
                <input 
                    id='zip' 
                    name={nameSet.zip}
                    type='text'
                    value={props.state.userInput[nameSet.zip]}
                    onChange={props.state.handleChange}>
                </input>
            </div>
        </label>
    )
}