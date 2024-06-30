

const Footer = () => {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l3 m6 s6">
                    <ul>
                        <li>
                            <a className="footer-link" href="/about">About</a></li>
                        <li>
                            <a className="footer-link" href="/products">Products</a></li>
                        </ul>
                        </div>
                        <div className="col l3 m6 s6">
                        <ul>
                        <li>
                <a className="social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a className="social-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a className="social-link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
                            </ul>
                            </div>
                            </div>
                            </div>
                            <div className="footer-copyright">
                                <div className="container"> © 2024 Copyright Text</div>
                            </div>
                            </div>
    )
}

export default Footer;