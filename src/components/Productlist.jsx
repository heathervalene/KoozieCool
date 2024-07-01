

const Productlist = () => {
    return (
        <div className="container center-align product-container">
            <h3>Featured Koozies</h3>
            <div className="row">
                <ul className="col s12">
                    <li className="col s4">Product One</li>
                    <li className="col s4">Product Two</li>    
                    <li className="col s4">Product Three</li>
                </ul>
            </div>
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
            <section className="container type row">
                <h3>Types of Koozies</h3>
                <ul className="col s12">
                    <li className="col s4">Can Koozie</li>
                    <li className="col s4">Tall Boy Koozie</li>
                    <li className="col s4">Some other Koozie</li>
                </ul>
            </section>
        </div>
    );
};

export default Productlist;
  



   

