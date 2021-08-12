
function Speach(props) {
    const { speach, key } = props

    return (
        <div className='speach' key={key}>
            <h2>{speach.title}</h2>
            <div>{speach.desc}</div>
            <div>{speach.date}</div>
        </div>
    )
}

export default Speach