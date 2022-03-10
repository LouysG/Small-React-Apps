import CircleIcon from './CircleIcon.js'

export default function StageVisualizer (props) {


    return (
        <div id='visualizer'>
            <CircleIcon id={1} stage={props.stage}></CircleIcon>
            <CircleIcon id={2} stage={props.stage}></CircleIcon>
            <CircleIcon id={3} stage={props.stage}></CircleIcon>
            <CircleIcon id={4} stage={props.stage}></CircleIcon>
        </div>
    )
}