import './Job.css'

function Job(props) {
    return(
        <div className="jobContent">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default Job