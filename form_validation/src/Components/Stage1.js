import AddressInput from './AddressInput';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';


export default function Stage1 (props) {
    let display;
    
    (props.stage === 1) ? display = 'grid' : display = 'none';

    return (
        <form className='formProper' style={{display: `${display}`}} onSubmit={props.state.handleSubmit}>
            <p className='stageName'>Shipping Address</p>
            <NameInput state={props.state}/>
            <AddressInput stage={props.stage} state={props.state}/>
            <PhoneInput state={props.state}/>
            <EmailInput state={props.state}/>
            <button className='submit' type='submit'>Next</button>
        </form>
    )
}