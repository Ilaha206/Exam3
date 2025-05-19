import { Link } from "react-router"


function Navbar() {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="basket">Basket</Link></li>
            <li><Link to="favorite">Favorite</Link></li>
            <li><Link to="admin">Adminpanel</Link></li>
            <li><Link to="adminadd">AdminAdd</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar