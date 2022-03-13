

export default function PhoneInput (props) {

    return (
        <label className='formElement' id='phoneLabel'>
            Phone
            <input 
                id='phoneElement'
                type='text'
                name='phone'
                value={props.state.userInput.phone}
                onChange={props.state.handleChange}>
            </input>
        </label>
    )
}