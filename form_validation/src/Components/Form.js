import '../CSS/Form.css';
import StageVisualizer from './StageVisualizer';
import { useState } from 'react';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';

export default function Form () {
    const [stage, setStage] = useState(4)
    let display;

    if (stage === 1) {display = <Stage1 stage={stage}/>}
    else if (stage === 2) {display = <Stage2 stage={stage}/>}
    else if (stage === 3) {display = <Stage3 stage={stage}/>}
    else if (stage === 4) {display = <Stage4 stage={stage}/>}

    return (
        <div id='form'>
            <StageVisualizer stage={stage} />
            {display}
        </div> 
    )
}