import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Koozie Cool</h1>
            <div>Hero banner placeholder</div>
            <p>Info about the site.</p>
            
            <Link to="/products"><button>Shop</button></Link>
        </div>
    )
}

export default Home;