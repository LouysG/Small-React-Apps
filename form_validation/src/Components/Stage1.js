import AddressInput from './AddressInput';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';


export default function Stage1 (props) {
    let display;
    
    (props.stage === 1) ? display = 'grid' : display = 'none';

    return (
        <form className='formProper' style={{display: `${display}`}}>
            <p className='stageName'>Shipping Address</p>
            <NameInput/>
            <AddressInput stage={props.stage}/>
            <PhoneInput/>
            <EmailInput/>
            <button className='submit' type='submit'>Next</button>
        </form>
    )
}