import album from '../Resources/album.jpg';
import banana from '../Resources/banana.jpg';
import wellMeaningSuggestion from '../Resources/therapy.jpg';


export default function Stage4 (props) {
    let display;
    
    (props.stage === 4) ? display = 'grid' : display = 'none';

    return (
        <form className='formProper' style={{display: `${display}`}}>
            <p className='stageName'>Thank you for your order!</p>
            <p id='trackingNumber'>Your tracking number is: x9d2mPas7d456</p>
            <p id='recText'>You might also like:</p>
            <div id='recs'>
                <img src={album}></img>
                <img src={banana}></img>
                <img src={wellMeaningSuggestion}></img>
            </div>
        </form>
    )
}