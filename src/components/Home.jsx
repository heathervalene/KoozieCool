import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import M from 'materialize-css';

const Home = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        // Initialize Materialize Carousel
        const instance = M.Carousel.init(carouselRef.current, {
            fullWidth: true,
            indicators: true
        });

        // Cleanup carousel on component unmount
        return () => {
            if (instance) {
                instance.destroy();
            }
        };
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.popupsmart.com/bundle.js";
        script.setAttribute("data-id", "912761");
        script.async = true;
        script.defer = true;
    
        script.onload = () => {
            console.log("Popupsmart script loaded");
            window.Popupsmart?.init();
            console.log("Popupsmart initialized");
        };
    
        script.onerror = () => console.error("Failed to load Popupsmart script");
    
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div className="carousel carousel-slider custom-carousel" ref={carouselRef}>
                <a className="carousel-item" href="#one!"><img src="https://i.imgur.com/WFIJkMM.jpeg" alt="product1" /></a>
                <a className="carousel-item" href="#two!"><img src="https://i.imgur.com/RkR4p4H.jpeg" alt="product2" /></a>
            </div>
            <div className="container center-align">
                <Link to="/products" className="shop-btn">Shop</Link>
                <section>
                    <p className="introduction">KoozieCool is your ultimate destination for stylish koozies to keep your beverages cold. We offer a wide variety of unique custom designs for every occasion, ensuring your drink is as cool as you are!</p>
                </section>
                <section className="container occasion row">
                    <h3>Occasions</h3>
                    <div className="col s4">
                        <i className="fa-solid fa-cake-candles fa-5x icon"></i>
                        <h6>Birthdays</h6>
                    </div>
                    <div className="col s4">
                        <i className="fa-solid fa-umbrella-beach fa-5x icon"></i>
                        <h6>Beach Days</h6>
                    </div>
                    <div className="col s4">
                        <i className="fa-solid fa-champagne-glasses fa-5x icon"></i>
                        <h6>Party</h6>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
