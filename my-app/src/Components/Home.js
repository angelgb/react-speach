import Speach from './Speach'
function Home(props) {
    const { speachs } = props

    const rows = speachs.map((item, index) => {
        return <Speach speach={item} key={index}/>
    })
    return (
        rows
    )
}

export default Home