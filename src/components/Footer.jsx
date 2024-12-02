

const Footer = () => {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 m6 s12">
                        <ul className="footer-links">
                            <li>
                                <a className="footer-link" href="/about">About</a>
                            </li>
                            <li>
                                <a className="footer-link" href="/products">Products</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col l6 m6 s12 social-media-container">
                        <ul className="social-links">
                            {/* <li>
                                <a className="social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li> */}
                            <li>
                                <a className="social-link" href="https://www.instagram.com/koozie_cool/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a className="social-link" href="https://www.pinterest.com/kooziecool/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">© 2024 KoozieCool</div>
            </div>
        </div>
    );
};

export default Footer;
