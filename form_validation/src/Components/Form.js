import '../CSS/Form.css';
import StageVisualizer from './StageVisualizer';
import { useState } from 'react';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';

export default function Form () {
    const [stage, setStage] = useState(1)
    const [userInput, setUserInput] = useState({
        name: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip: null,
        phone: null,
        email: null,
        billing_address1: null,
        billing_address2: null,
        billing_city: null,
        billing_state: null,
        billing_zip: null,
        nameOnCard: null,
        cardNumber: null,
        expiration: null,
        cvv: null,
        shippingMethod: null
    })
    

    function handleChange(e) {
        const target = e.target
        const name = target.name

        setUserInput({
            ...userInput,
            [name]: target.value,
        })
    }

    function handleUseSameAddress (e) {
        if (e.target.checked) {
            setUserInput({
                ...userInput,
                billing_address1: userInput.address1,
                billing_address2: userInput.address2,
                billing_city: userInput.city,
                billing_state: userInput.state,
                billing_zip: userInput.zip,
            })
        } else {
            setUserInput({
                ...userInput,
                billing_address1: '',
                billing_address2: '',
                billing_city: '',
                billing_state: '',
                billing_zip: '',
            })
        }
    }

    function handleSubmit(e) {
        setStage(stage + 1)
        //e.preventDefault()
    }

    let state = {
        userInput: userInput,
        handleChange: handleChange,
        handleUseSameAddress: handleUseSameAddress,
        handleSubmit: handleSubmit
    }


    let display;
    if (stage === 1) {display = <Stage1 stage={stage} state={state}/>}
    else if (stage === 2) {display = <Stage2 stage={stage} state={state}/>}
    else if (stage === 3) {display = <Stage3 stage={stage} state={state}/>}
    else if (stage === 4) {display = <Stage4 stage={stage}/>}

    return (
        <div id='form'>
            <StageVisualizer stage={stage} />
            {display}
        </div> 
    )
}