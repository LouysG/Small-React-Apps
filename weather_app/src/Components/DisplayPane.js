


export default function DisplayPane (props) {
    const forecast = props.forecast
    console.log(forecast)

    function getTempColor (temp) {
        if (temp < 10) {return {color: 'navy'}}
        else if (10 <= temp && temp < 20) {return {color: 'navy'}}
        else if (20 <= temp && temp < 30) {return {color: 'mediumblue'}}
        else if (30 <= temp && temp < 40) {return {color: 'blue'}}
        else if (40 <= temp && temp < 50) {return {color: 'steelblue'}}
        else if (50 <= temp && temp < 60) {return {color: 'lightskyblue'}}
        else if (60 <= temp && temp < 70) {return {color: 'yellow'}}
        else if (70 <= temp && temp < 80) {return {color: 'gold'}}
        else if (80 <= temp && temp < 90) {return {color: 'orange'}}
        else if (90 <= temp && temp < 100) {return {color: 'orangered'}}
        else if (100 <= temp) {return {color: 'red'}}
    }


    return (
        <div id='displayPane'>
            <div id='currentTemp' style={getTempColor(forecast.temp)}>
                <p className='label'>{forecast.city}</p>
                <p className='bigText'>{forecast.temp}</p>
            </div>
            <div id='highTemp' style={getTempColor(forecast.high)}>
                <p className='label'>{forecast.high ? 'High' : ''}</p>
                <p className='smallText'>{forecast.high}</p>
            </div>
            <div id='lowTemp' style={getTempColor(forecast.low)}>
                <p className='label'>{forecast.low ? 'Low' : ''}</p>
                <p className='smallText'>{forecast.low}</p>
            </div>
        
        </div>
    )
}