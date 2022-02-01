import React from "react";
import { Link } from "react-router-dom";

const Splash = (props) => {
    return (
        <div>
            <div className="splash-content-slogan">
                <span> Whether you're buying, selling or renting,</span>
                <span> we can help you move forward.</span>
            </div>

            <div className="splash-options-wrapper">
                <Link to="/listings">
                    <h3>Buy a home</h3>
                    <p className="splash-options-card">
                        Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.
                    </p>
                    <div>
                        <button className="splash-options-button">Search Homes</button>
                    </div>
                </Link>

                <Link to="/sell">
                    <h3>Sell a home</h3>
                    <p className="splash-options-card">
                        No matter what path you take to sell your home, we can help you navigate a successful sale.
                    </p>
                    <div>
                        <button className="splash-options-button">See your options</button>
                    </div>
                </Link>

                <Link to="/listings">
                    <h3>Rent a home</h3>
                    <p className="splash-options-card">
                        We're creating a seamless online experience
                        -from shopping on the largest rental network, to applying, to paying rent.
                    </p>
                    <div>
                        <button className="splash-options-button">Find rentals</button>
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default Splash