import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import "./../css/style.css"


function Contact(props) {
  return (

    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="contact-container">
            <h1 className="contact-title">Contacts</h1>

            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>


              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
              </div>
              <button className="submit"> submit </button>

            </form>

          </div>

          <div>


            <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
              Learn More
      </Link>{" "}
            <Link to="/contact" role="button" className="btn btn-link">
              Learn Less
      </Link>
            <Route exact path={`${props.match.url}/learn`} component={Learn} />
          </div>


        </div>
      </div>
    </div>


  );
}

export default Contact;
