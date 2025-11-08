import './Lengs.css'

const Lengs = ( props ) => {
    return(
        <div className="LengsContent">
            <h2 className='LengTitle'>{props.title}</h2>
            <div className="Leng-container">
                <p className='Lengs'>{props.content}</p>
                <p className='Lengs'>{props.content1}</p>
            </div>
        </div>
    )
}

export default Lengs