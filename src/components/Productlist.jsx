import React, { useState, useEffect } from 'react';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerView, setProductsPerView] = useState(2);

  const products = [
    {
      image: "/crop_top.png",
      title: "Lasagna Del Rey Crop Top",
      link: "https://www.etsy.com/shop/Kooziecool"
    },
    {
      image: "/koozie.png",
      title: "Urethra Franklin Koozie",
      link: "https://www.etsy.com/shop/Kooziecool"
    },
    {
      image: "/trucker_hat.png",
      title: "Billie Eyelash Trucker Hat",
      link: "https://www.etsy.com/shop/Kooziecool"
    },
    {
      image: "/Barnard_tank.png",
      title: "Unisex Barnard Tank",
      link: "https://www.etsy.com/shop/Kooziecool"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setProductsPerView(window.innerWidth < 600 ? 1 : 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProducts = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + productsPerView) % products.length
    );
  };

  const prevProducts = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - productsPerView : prevIndex - productsPerView
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + productsPerView);
  if (visibleProducts.length < productsPerView) {
    visibleProducts.push(...products.slice(0, productsPerView - visibleProducts.length));
  }

  return (
    <div className="product-slider-container">
      <h3 className="featured-title">Featured Items</h3>
      <div className="product-slider">
        <button 
          className="slider-nav prev" 
          onClick={prevProducts}
          aria-label="Previous Products"
        >
          &#10094;
        </button>
        
        <div className="product-display">
          {visibleProducts.map((product, index) => (
            <div 
              key={product.title}
              className="product"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-image" 
              />
              <h5 className="product-title">{product.title}</h5>
              <a 
                href={product.link} 
                className="buy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"  className="heart-icon">
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <button 
          className="slider-nav next" 
          onClick={nextProducts}
          aria-label="Next Products"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;

const styles = `
.product-slider-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
   

}

.featured-title {
  text-align: center;
  margin-bottom: 15px;
  font-size: 60px;
    color: #26a69a;
    font-weight: 600;
}

.product-slider {
  display: flex;
  align-items: center;
  position: relative;
   background-color: lightgray;
    padding: 40px;
}

.product-display {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  overflow: hidden;
  gap: 20px;
}


.product {
  flex: 0 0 calc(50% - 10px);
  text-align: center;
  max-width: 300px;
  transition: transform 0.3s ease;
  padding: 15px;
background-color: white;
}

.product:hover {
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  border: 1px solid black;
}

.product-title {
  margin: 10px 0;
  font-size: 25px!important:

}

.slider-nav {
  background: #43BCCD;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: 0 10px;
  transition: background 0.3s ease;
}

.slider-nav:hover {
  background: #3F2DB2;
  color: #ffffff;
}

.heart-icon {
  fill: #000;
  transition: fill 0.3s ease;
}

.buy:hover .heart-icon path {
  fill: #F86624;
}

@media screen and (max-width: 600px) {
  .product-display {
    flex-direction: column;
    align-items: center;
  }
  
  .product {
    flex: 0 0 100%;
    max-width: 250px;
  }
  
  .product-image {
    height: 250px;
  }
  
  .slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  .slider-nav.prev {
    left: -17px;
  }
  
  .slider-nav.next {
    right: -17px;
  }
}
`;

const styleTag = document.createElement('style');
styleTag.textContent = styles;
document.head.appendChild(styleTag);
