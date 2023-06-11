import { Link } from 'react-router-dom';
export default function Services() {
  return (
    <div>
      <div class="page-header">Services</div>
      <hr class="header-line"></hr>
      <br></br>
      <div class="row">
        <div class="col-sm-5">
          <div class="barbers">
            <div class="col">
              <div class="card border-white">
                <div class="col-sm-20">
                  <div class="card-body">
                    <div class="service-photo">
                      <img src="/hair.png" class="service-photo" alt="bug" />
                    </div>
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                      <dv>
                        <p class="card-title">Hair </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <i> $30.00 (45 min)</i>
                            <br></br>
                            Experience precision and style as we deliver
                            tailored fades that enhance your appearance and
                            exude confidence. Our skilled barbers are masters at
                            seamlessly blending lengths and textures, creating a
                            dynamic and trendy look that suits your individual
                            taste.
                          </small>
                        </p>
                      </dv>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div class="col">
              <div class="card border-white">
                <div class="col-sm-20">
                  <div class="card-body">
                    <div class="service-photo">
                      <img src="beard.png" class="service-photo" alt="bug" />
                    </div>
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                      <dv>
                        <p class="card-title">Beard </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <i>$15.00 (15 min)</i>
                            <br></br>
                            Discover the art of beard grooming in a concise
                            package. Our professional barbers specialize in
                            precise and stylish beard cuts, sculpting and
                            shaping your facial hair to highlight your unique
                            features.
                          </small>
                        </p>
                      </dv>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>

            <br></br>
          </div>
        </div>

        <div class="col-sm-5">
          <div class="barbers">
            <div class="col">
              <div class="card border-white">
                <div class="col-sm-20">
                  <div class="card-body">
                    <div class="service-photo">
                      <img src="color.png" class="service-photo" alt="bug" />
                    </div>
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                      <dv>
                        <p class="card-title">Colour </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <i>starting at $120.00 (60 min)</i>
                            <br></br>
                            Transform your look with our professional hair
                            coloring services. Choose from a spectrum of vibrant
                            shades and let our experienced colorists work their
                            magic. Prices vary based on the complexity of the
                            color technique
                          </small>
                        </p>
                      </dv>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div class="col">
              <div class="card border-white">
                <div class="col-sm-20">
                  <div class="card-body">
                    <div class="service-photo">
                      <img src="braid.png" class="service-photo" alt="bug" />
                    </div>
                    <div class="col-sm-2"></div>
                    <div class="col-sm-8">
                      <dv>
                        <p class="card-title">Braids </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <i>starting at $40.00 (50 min)</i>
                            <br></br>
                            Elevate your style with our exceptional braiding
                            services. Our talented stylists specialize in a
                            variety of braiding techniques to create stunning
                            and intricate designs. Prices are tailored to the
                            complexity and length of the braids.
                          </small>
                        </p>
                      </dv>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sbtn">
          <span></span>
          <Link to="/book">
            <button class="ntb" type="submit">
              Book Appointment Now
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
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
