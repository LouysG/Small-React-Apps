


export default function EmailInput (props) {


    return (
        <label className='formElement' id='emailLabel'>
            Email
            <input 
                id='emailElement'
                type='text'
                name='email'
                value={props.state.userInput.email}
                onChange={props.state.handleChange}>
            </input>
        </label>
    )
}