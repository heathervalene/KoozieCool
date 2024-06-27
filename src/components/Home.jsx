import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="container center-align">
            <h1 className="title">Koozie Cool</h1>
            <section>
            <div>Hero banner placeholder</div>
            </section>
            <section>
            <p className="introduction">Info about the site.</p>
            </section>
            <Link to="/products"><a className="shop-btn">Shop</a></Link>
            </div>
        </div>
    )
}

export default Home;