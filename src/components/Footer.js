import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Web design</li>
                            <li>Development</li>
                            <li>Hosting</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li>Company</li>
                            <li>Team</li>
                            <li>Legacy</li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Careers</h3>
                        <ul>
                            <li>Job openings</li>
                            <li>Employee success</li>
                            <li>Benefits</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social"><i className="icon ion-social-facebook"></i><i className="icon ion-social-twitter"></i><i className="icon ion-social-snapchat"></i><i className="icon ion-social-instagram"></i>
                        <p className="copyright">Company Name © 2018</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </div>
  )
}

export default Footer
