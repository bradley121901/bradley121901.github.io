import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <h1 className="homeLabel">
        <div>
          <img src="./logo.jpg" alt="bug" height={250} />
        </div>
        Precision Cuts Since 1999
        <br></br>
        <br></br>
        <div>
          <span>
            <Link to="/book">
              <button class="ntb" type="submit">
                Book Now
              </button>
            </Link>
          </span>
        </div>
      </h1>
      <br></br>
      <br></br>
      <div class="row">
        <div class="col-sm-5">
          <div class="home1">
            <img src="/home1.png" class="home1-photo" alt="bug" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="home2">
            <img src="/home2.png" class="home2-photo" alt="bug" />
            <p>
              "With a rich heritage spanning back to 1999, Prestige Barbershop
              has been a trusted destination for top-notch grooming and enduring
              style for more than two decades."
              <br></br>- Will Hunting <i>TheOnion</i>
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
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
