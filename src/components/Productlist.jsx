import axios from 'axios';
import { useEffect, useState } from 'react';
import OAuth from './OAuth';

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);


    const fetchProducts = async (token) => {
        try {
          const response = await axios.get('https://api.etsy.com/v3/application/shops/YOUR_SHOP_ID/listings/active', {
            headers: {
              Authorization: `Bearer ${token.access_token}`,
            },
          });
          setProducts(response.data.results);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
    
      useEffect(() => {
        if (token) {
          fetchProducts(token);
        }
      }, [token]);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      return (
        <div>
          <OAuth onAuthenticated={setToken} />
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.MainImage.url_fullxfull} alt={product.title} />
                <h2>{product.title}</h2>
                
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Productlist;