import { Link } from 'react-router-dom';

export default function Book() {
  return (
    <div>
      <div>
        <div class="page-header">
          Select Barber
          <Link to="/policy" style={{ textDecoration: 'none' }}>
            <p class="booking-policy">Booking Policy</p>
          </Link>
        </div>

        <hr class="header-line"></hr>
        <div class="barbers">
          <div class="row">
            <div class="col-sm-4">
              <Link to="/select" style={{ textDecoration: 'none' }}>
                <div class="card bcard">
                  <p class="bcard-select">SELECT</p>
                  <img src="/lerma.png" class="barber-photo" alt="bug" />
                  <div class="card-body">
                    <div class="row">
                      <h5 class="card-title">Jacob Lerma</h5>

                      <span class="card-text">
                        <p class="card-service">Services</p>
                        Beard <br></br>
                        Haircut + Style <br></br>
                        Haircut + Style & Beard
                        <br></br>Colouring
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-sm-4">
              <Link to="/select" style={{ textDecoration: 'none' }}>
                <div class="card bcard">
                  <p class="bcard-select">SELECT</p>
                  <img src="/parayno.png" class="barber-photo" alt="bug" />
                  <div class="card-body">
                    <div class="row">
                      <h5 class="card-title">Tyler Parayno</h5>

                      <span class="card-text">
                        <p class="card-service">Services</p>
                        Beard <br></br>
                        Haircut + Style <br></br>
                        Haircut + Style & Beard
                        <br></br>Braiding
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-sm-2">
              <Link to="/select" style={{ textDecoration: 'none' }}>
                <div class="card bcard">
                  <p class="bcard-select">SELECT</p>
                  <img src="/vera.png" class="barber-photo" alt="bug" />
                  <div class="card-body">
                    <div class="row">
                      <p class="bcardhover">
                        <h5 class="card-title">Isaiah De Vera</h5>

                        <span class="card-text">
                          <p class="card-service">Services</p>
                          Beard <br></br>
                          Haircut + Style <br></br>
                          Haircut + Style & Beard
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
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
