import axios from "axios";
import { useEffect, useState } from "react";


function Admin() {

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


    function deleteByIdCosmetic(id) {
        axios.delete('http://localhost:3500/' + id, { method: "delete" })
            .then(function (response) {
                axios.get('http://localhost:3500/')
                    .then(function (response) {

                        setcosmetic(response.data);
                    })
                    .catch(function (error) {

                        console.error(error);
                    })
            })
            .catch(function (error) {

                console.error(error);
            })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cosmetic.map((x) => <tr key={x._id}>
                        <td><img width={"40px"} src={x.img} alt="cosmetic" /></td>
                        <td>{x.title}</td>
                        <td>{x.price}</td>
                        <td><button onClick={() => deleteByIdCosmetic(x._id)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default Admin