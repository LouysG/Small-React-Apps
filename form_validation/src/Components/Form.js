import '../CSS/Form.css';
import StageVisualizer from './StageVisualizer';
import { useState } from 'react';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';

export default function Form (props) {
    const [stage, setStage] = useState(1)
    const [submitFail, setSubmitFail] = useState(false)
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
        shipping: null
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
        const zipPattern = new RegExp(/^\d\d\d\d\d$/)
        const phonePattern = new RegExp(/^\d{3}-?\d{3}-?\d{4}$/)
        const emailPattern = new RegExp(/.+@.+\..+/)
        const cardNumberPattern = new RegExp(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/)
        const expirationPattern = new RegExp(/^[0-3]?\d\/?\d\d$/)
        const cvvPattern = new RegExp(/^\d{3}$/)
        let isValid = false;
        if (stage === 1) {
            if (
                userInput.name
                && userInput.address1
                && userInput.city
                && userInput.state
                && (zipPattern.test(userInput.zip))
                && (phonePattern.test(userInput.phone))
                && (emailPattern.test(userInput.email))
            ) {isValid = true}
        } else if (stage === 2) {
            if (
                userInput.address1
                && userInput.city
                && userInput.state
                && (zipPattern.test(userInput.zip))
                && userInput.nameOnCard
                && (cardNumberPattern.test(userInput.cardNumber))
                && (expirationPattern.test(userInput.expiration))
                && (cvvPattern.test(userInput.cvv))
            )
            isValid = true
        } else if (stage === 3) {
            if (userInput.shipping) {isValid = true}
        }

        if (!isValid) {
            e.preventDefault()
            setSubmitFail(true)
            return false
        }
        setStage(stage + 1)
        setSubmitFail(false)
    }

    let state = {
        userInput: userInput,
        handleChange: handleChange,
        handleUseSameAddress: handleUseSameAddress,
        handleSubmit: handleSubmit,
        handleShippingChange: props.handleShippingChange,
        submitFail: submitFail
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