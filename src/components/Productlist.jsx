

const Productlist = ({ products }) => {
    return (
        <div className="container product-container">
            <div className="row">
            {products.map((product, index) => (
                <div key={index} className="card">
                    <span>{product.TITLE}</span>
                    <img src={product.IMAGE1} className="responsive-img centered-image product-image" alt={product.TITLE}/>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Productlist;
  



   

