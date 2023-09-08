import { useEffect } from "react"

export default function Home(props) {
    useEffect(() => {
        document.title = "Home"
    }, []);
    const title = props.creatTitle('Start FrameWork')
    return (
            <div className="container d-flex justify-content-center align-items-center text-center flex-column text-white">
                <img src={require('./img/vector.gif')} classname="img-fluid" alt="Avatar" />
                {title} 
                <p className="muted">Graphic Artist - Web Designer - Illustrator</p>
            </div>
    )
}
