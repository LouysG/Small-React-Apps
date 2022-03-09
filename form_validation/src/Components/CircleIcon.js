
export default function CircleIcon (props) {
    let circle;

    if (props.stage < props.id) {
        circle = <div className='circle' id={'circle' + props.id}></div>
    } else {
        circle = <div className='circle' id={'circle' + props.id}
                    style={{backgroundColor: lightgreen}}></div>
    }


    return (
        {circle}
    )

}