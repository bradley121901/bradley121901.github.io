import { Link } from 'react-router-dom';
export default function Contact() {
  return (
    <div>
      <div class="page-header">Contact Us</div>
      <hr class="header-line"></hr>
      <br></br>
      <div class="contact-page-center" align="center">
        <form class="confirm-form">
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="staticEmail"></input>
            </div>
          </div>

          <br></br>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id="staticEmail"
                placeholder=""
              ></input>
            </div>
          </div>
          <br></br>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Phone Number
            </label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder=""
              ></input>
            </div>
          </div>

          <br></br>
          <div class="form-group row">
            <label for="staticComment" class="col-sm-2 col-form-label">
              Message
            </label>

            <div class="col-sm-10">
              <input
                type="text"
                id="staticComment"
                placeholder=""
                class="comment"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <div class="submitbtn">
        <Link to="/confirmation">
          <div className="submit-button">
            <button class="ntb2" type="submit">
              Submit
            </button>
          </div>
        </Link>
      </div>

      <br></br>
      <br></br>
      <div class="page-footer">
        <div class="container">
          <br></br>
          <div class="row">
            <div class="col-sm-4">
              <p class="footer-header">PHONE NUMBER</p>
              <p>+1 (647) 468-9195</p>
              <br></br>

              <span class="footer-header">SOCIAL </span>
              <span>
                <i>@905prestige</i>
              </span>

              <p>
                <p></p>
                <img src="/ig.png" class="ig-logo" alt=" " />
                <img src="/fb.png" class="social-logo" alt=" " />
                <img src="/twitter.png" class="social-logo" alt=" " />
              </p>
            </div>

            <div class="col-sm-2">
              <span>
                <p class="footer-header">LOCATION</p>
                <p>314 Copper Creek Drive</p>
                <p>Markham, ON </p>
                <p> L6B 1N8</p>
              </span>
            </div>
            <div class="col-sm-3">
              <br></br>
              <span>
                <img src="/location.jpg" class="store-map" alt=" " />
              </span>
            </div>

            <div class="col-sm-3">
              <p class="footer-header"> OPENING HOURS</p>
              <p>Monday: 11am-5pm</p>
              <p>Tuesday-Friday: 10am-6pm</p>
              <p>Saturday: 11am-7pm</p>
              <p>Sunday: CLOSED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
