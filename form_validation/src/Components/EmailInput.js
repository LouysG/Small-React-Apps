


export default function EmailInput (props) {
    let style;

    if (props.state.submitFail) {
        const emailPattern = new RegExp(/.+@.+\..+/)
        if (!emailPattern.test(props.state.userInput.email)) {
            style={border: '.3vh solid red'}
        }
    }

    return (
        <label className='formElement' id='emailLabel'>
            Email
            <input 
                id='emailElement'
                type='text'
                name='email'
                value={props.state.userInput.email}
                onChange={props.state.handleChange}
                style={style}>
            </input>
        </label>
    )
}