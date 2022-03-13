

export default function NameInput (props) {
    let style;
    
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