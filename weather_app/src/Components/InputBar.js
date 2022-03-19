import { useEffect } from 'react'


export default function InputBar (props) {

    // Submit on "enter" key-up
    useEffect(() => {
        const bar = document.getElementById('bar')
        bar.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                e.preventDefault()
                document.getElementById('submit').click()
            }
        })
    }, [])

 

    return (
        <>
            <div id='prompt'>
                <p id='text'>What's the weather like in...</p>
            </div>
            <form onSubmit={props.handleSearch}>
                <input
                    id='bar'
                    type='text'>
                </input>
                <button id='submit' type='submit' style={{display: 'none'}}></button>
            </form>
        </>
    )
}