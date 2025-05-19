import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router";

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
            {cosmetic.map((x) => <ul key={x._id}>
                <li><img src={x.img} alt="cosmetic" /></li>
                <li>{x.title}</li>
                <li>{x.price}</li>
                <li><button><Link to={"detail/"+x._id}>Detail</Link></button></li>
            </ul>)}
        </>
    )
}

export default Home