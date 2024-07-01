import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <div>
            <img className="hero-image" src="/KoozieCool.png" alt="Koozie Cool" />
        </div>
        <div className="container center-align">
            <section>
                <p className="introduction">Koozie Cool is your ultimate destination for stylish koozies to keep your beverages cold. We offer a wide variety of unique custom designs for every occasion, ensuring your drink is as cool as you are!</p>
            </section>
            <Link to="/products" className="shop-btn">
                Shop
            </Link>
        </div>
    </div>
    )
}

export default Home;