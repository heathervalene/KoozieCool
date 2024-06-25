import axios from 'axios';
import { useEffect, useState } from 'react';

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    return (
        <div className="product-list">
            <div className="product-list-header">
                <h2>Product List</h2>
            </div>
            </div> )
            
}

export default Productlist;