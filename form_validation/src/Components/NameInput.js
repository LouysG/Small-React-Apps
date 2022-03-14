

export default function NameInput (props) {
    let style;

    if (props.state.submitFail) {
        if (!props.state.userInput.name) {
            style = {border: '.3vh solid red'}
        }
    }
    
    return (
        <label className='formElement' id='nameLabel'>
            Name
            <input 
                id='nameElement'
                type='text'
                name='name'
                value={props.state.userInput.name}
                onChange={props.state.handleChange}
                style={style}>
            </input>
        </label>
    )
}