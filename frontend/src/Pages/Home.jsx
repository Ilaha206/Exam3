import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router";
import './style.css'

function Home() {
    const [cosmetic, setcosmetic] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3500/')
            .then(function (response) {

                setcosmetic(response.data);
            })
            .catch(function (error) {

                console.error(error);
            })
    }, [])

    return (
        <>
        <title>Home</title>
        <div className="cosmetics">
            {cosmetic.map((x) => <div className="cosmetic" key={x._id}>
                <img src={x.img} alt="cosmetic" />
                <h2>{x.title}</h2>
                <p>{x.price}</p>
                <button><Link to={"detail/"+x._id}>Detail</Link></button>
            </div>)}
            </div>
        </>
    )
}

export default Home