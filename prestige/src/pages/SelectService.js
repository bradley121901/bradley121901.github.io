import { Link } from 'react-router-dom';
export default function SelectServices() {
  return (
    <div>
      <div class="page-header">
        Select Service
        <Link to="/policy" style={{ textDecoration: 'none' }}>
          <p class="booking-policy">Booking Policy</p>
        </Link>
      </div>

      <hr class="header-line"></hr>
      <br></br>
      <div class="row">
        <div class="col-sm-5">
          <div class="barbers">
            <div class="col">
              <div class="col-sm-5 ">
                <div class="card">
                  <div class="card-body ss">
                    <div class="service-photo">
                      <img
                        src="/youth.png"
                        class="card-img-top"
                        alt="bug"
                        height="100px"
                        width="90px"
                      />
                    </div>
                    <dv>
                      <p class="card-title">Youth</p>
                      <p class="card-text">
                        <small class="text-muted">
                          Age 7-15 <br></br>$30.00 (45 min)
                        </small>
                      </p>
                    </dv>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div class="col">
              <div class="col-sm-5">
                <div class="card">
                  <div class="card-body ss">
                    <div class="service-photo">
                      <img
                        src="/ssbeard.png"
                        class="card-img-top"
                        alt="bug"
                        height="105px"
                        width="90px"
                      />
                    </div>
                    <dv>
                      <p class="card-title">Beard</p>
                      <p class="card-text">
                        <small class="text-muted">$15.00 (15 min)</small>
                      </p>
                    </dv>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="col">
            <div class="col-sm-5">
              <div class="card">
                <div class="card-body ss">
                  <div class="service-photo">
                    <img
                      src="/haircut.png"
                      class="card-img-top"
                      alt="bug"
                      height="105px"
                      width="90px"
                    />
                  </div>
                  <dv>
                    <p class="card-title">Haircut</p>
                    <p class="card-text">
                      <small class="text-muted">$35.00 (35 min)</small>
                    </p>
                  </dv>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="col">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body ss">
                  <div class="service-photo">
                    <img
                      src="/hairstyle.png"
                      class="card-img-top"
                      alt="bug"
                      height="105px"
                      width="90px"
                    />
                  </div>
                  <dv>
                    <p class="card-title">Haircut + Beard</p>
                    <div class="align-r">
                      <p class="card-text">
                        <small class="text-muted">$45.00 (50 min)</small>
                      </p>
                    </div>
                  </dv>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-2">
          <div class="col">
            <p class="ssheader">Select Date</p>
            <input type="date" id="bookdate" name="bookdate"></input>

            <br></br>
            <br></br>
            <div class="cs-form">
              <label for="time">
                <p class="ssheader">Select Time</p>
              </label>
              <input
                type="time"
                name="time"
                class="form-control"
                value="10:05 AM"
              />
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="ssbtn">
            <Link to="/confirm">
              <button class="ntb2" type="submit">
                Continue
              </button>
            </Link>
          </div>
        </div>
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
