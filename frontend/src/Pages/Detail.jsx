import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios"


function Detail() {
    let { id } = useParams();
    const [cosmetic, setcosmetic] = useState([])

    function getElementById(id) {
        axios.get(`http://localhost:3500/${id}`)
            .then(function (response) {

                setcosmetic(response.data);
            })
            .catch(function (error) {

                console.error(error);
            })
    }

    useEffect(() => {
        getElementById(id)
    }, [])


    if (cosmetic.length === 0) {
        return <p>hele yoxdur</p>
    }
    console.log(cosmetic);

    return (
        <>
            <div>Detail {id}</div>
            {<ul>
                <li><img src={cosmetic.img} alt="cosmetic" /></li>
                <li>{cosmetic.title}</li>
                <li>{cosmetic.price}</li>

            </ul>}

        </>
    )
}

export default Detail