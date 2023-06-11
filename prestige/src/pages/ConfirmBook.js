import { Link } from 'react-router-dom';
export default function ConfirmBook() {
  return (
    <div>
      <div class="page-height">
        <div class="page-header">
          Confirmation
          <Link to="/policy" style={{ textDecoration: 'none' }}>
            <p class="booking-policy">Booking Policy</p>
          </Link>
        </div>
        <hr class="header-line"></hr>
        <div class="row cform">
          <div class="col-sm-10">
            <form class="confirm-form">
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="staticEmail"
                    placeholder="Name"
                  ></input>
                </div>
              </div>
              <br></br>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">
                  Phone
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="staticEmail"
                    placeholder="Phone Number"
                  ></input>
                </div>
              </div>
              <br></br>
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Email"
                  ></input>
                </div>
              </div>

              <br></br>
              <label for="staticComment" class="col-sm-4 col-form-label">
                Extra Comments
              </label>
              <div class="form-group row">
                <div class="col-sm-1">
                  <input
                    type="text"
                    id="staticComment"
                    placeholder="Comments"
                    class="comment"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div class="confirmfrm">
            <div class="col-sm-1">
              <div class="card">
                <div class="card-body">
                  <span>
                    <p class="card-title"> Booking Summary</p>
                    <br></br>
                    Jacob Lerma
                    <br></br>
                    Haircut + Beard (30 min)
                    <br></br>
                    01/01/2024
                    <br></br>
                    09:50 AM
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="confirmbtn">
          <Link to="/confirmation">
            <button class="ntb" type="submit">
              Confirm
            </button>
          </Link>
        </div>
      </div>

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
