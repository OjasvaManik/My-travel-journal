export default function Card(props) {
    return (
        <div>
            <div className="card--wrapper">
                <div className="card--image" style={{backgroundImage: `url(${props.image})`}}></div>
                <div className="card--content">
                    <div className="card--location">
                        <i className="fa-solid fa-location-dot card--icon"><span>{props.country}</span></i>
                        <a href={props.url} target="_blank" className="card--location-link">View on Map</a>
                    </div>
                    <div className="card--content">
                        <div className="card--location">
                            <p>{props.location}</p>
                        </div>
                        <p className="card--trip-time">{props.time}</p>
                        <p className="card--description">{props.description}</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}