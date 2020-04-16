import React from "react";
import "./../css/style.css"


function Portfolio() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="portfolio-container">

            <h1 className="portfolio-title">Portfolio</h1>
             <img className="portfolio-image1" src="/assets/portfolio-image-1.jpg" alt="e" />
              <img className="portfolio-image2" src="/assets/portfolio-image-2.jpg" alt="e" />
              <img className="portfolio-image3" src="/assets/portfolio-image-3.jpg" alt="e" />
              <img className="portfolio-image4" src="/assets/portfolio-image-4.jpg" alt="e" />
           </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
