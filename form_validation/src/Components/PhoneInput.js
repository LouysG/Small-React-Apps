

export default function PhoneInput (props) {
    let style;

    if (props.state.submitFail) {
        const phonePattern = new RegExp(/^\d{3}-?\d{3}-?\d{4}$/)
        if (!phonePattern.test(props.state.userInput.phone)) {
            style={border: '.3vh solid red'}
        }
    }
    
    return (
        <label className='formElement' id='phoneLabel'>
            Phone
            <input 
                id='phoneElement'
                type='text'
                name='phone'
                value={props.state.userInput.phone}
                onChange={props.state.handleChange}
                style={style}>
            </input>
        </label>
    )
}