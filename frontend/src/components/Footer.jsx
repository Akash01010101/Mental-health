const Footer = () => {  
    return (  
        <footer className="footer">  
            <div className="footer-content">  
                <h2 className="footer-header">Mental Health Resources</h2>  
                <p className="footer-paragraph">Your well-being is our priority. Here are some resources that may help.</p>  
            </div>  
            
           

            <div className="footer-links">  
                <h3 className="footer-header">Connect with Us</h3>  
                <ul className="footer-list">  
                <li><a href="https://github.com/Akash01010101" className="footer-link">Github</a></li>  
                    <li><a href="https://x.com/Akashjha0101" className="footer-link">Twitter</a></li>  
                    <li><a href="https://www.instagram.com/akash.est_/" className="footer-link">Instagram</a></li>  
                    <li><a href="https://www.linkedin.com/in/akash-jha-3302522a2/" className="footer-link">LinkedIn</a></li>  
                </ul>  
            </div>  

            <div className="footer-bottom">  
                <p className="footer-bottom-text">© {new Date().getFullYear()} Uplift. <a href="https://github.com/Akash01010101/Mental-health">Github repo</a></p>  
            </div>  
        </footer>  
    );  
};  

export default Footer;