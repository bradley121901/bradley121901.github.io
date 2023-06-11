import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div>
      <div>
        <div class="page-header">About Us</div>
      </div>
      <hr class="header-line"></hr>
      <div class="description">
        <div class="row">
          <div class="col-sm-5">
            <br></br>
            Established in 1999, Prestige Barbershop has become a cornerstone of
            the Markham community in Ontario, Canada. With a legacy of over two
            decades, we have garnered a reputation for delivering precision
            haircuts and exceptional customer satisfaction. At Prestige, we
            understand that a haircut is more than just a style; it's an
            expression of your individuality. Our skilled barbers are trained in
            the art of creating the perfect cut, paying attention to every
            detail to ensure you leave our barbershop feeling confident and
            satisfied. Customer satisfaction is our top priority.
            <br></br>
            <br></br>
            We believe in providing an exceptional experience from the moment
            you step into our barbershop. Our friendly and skilled team of
            professionals are dedicated to delivering personalized services,
            taking the time to understand your preferences and providing expert
            advice to help you achieve your desired look.
            <br></br>
            <br></br>Since our inception, Prestige Barbershop has established
            itself as a trusted name in the industry, recognized for our
            commitment to excellence, precision, and customer satisfaction. We
            invite you to visit our barbershop and experience the prestige of
            our services firsthand. Step into a world of impeccable grooming,
            where your style and satisfaction are our top priorities.
            <br></br>
            <br></br>
            <br></br>
            <div class="bookbtn">
              <Link to="/book">
                <button class="ntb2" type="submit">
                  Book Appointment Now
                </button>
              </Link>
            </div>
          </div>

          <div class="col-sm-5">
            <br></br>
            <div class="biggie">
              <img
                src="./biggieprestige.png"
                alt="bug"
                width="650"
                height="610"
              />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <div>
        <div class="page-header">Our Barbers</div>
      </div>
      <hr class="header-line"></hr>

      <div class="row about-card-spacing">
        <div class="col">
          <div class="card">
            <div class="card-title about-spacing">
              <h1>Jacob Lerma</h1>
            </div>
            <div class="card-body">
              <img src="./lerma.png" alt="bug" width="200" height="200" />
              <div class="about-spacing">
                <img src="/ig.png" class="ig-logo" alt=" " />
                <span>@jacoblerma</span>
                <br></br>
                <br></br>
                <div class="ssheader">About</div>
                Brief description of barber inserted here as well as any unique
                services offered (colouring)
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-title about-spacing">
              <h1>Tyler Parayno</h1>
            </div>
            <div class="card-body">
              <img src="./parayno.png" alt="bug" width="200" height="200" />
              <div class="about-spacing">
                <img src="/ig.png" class="ig-logo" alt=" " />
                <span>@tylerparayno</span>
                <br></br>
                <br></br>
                <div class="ssheader">About</div>
                Brief description of barber inserted here as well as any unique
                services offered (colouring / braiding)
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-title about-spacing">
              <h1>Isaiah De Vera</h1>
            </div>
            <div class="card-body">
              <img src="./vera.png" alt="bug" width="200" height="200" />
              <div class="about-spacing">
                <img src="/ig.png" class="ig-logo" alt=" " />
                <span>@isaiahdevera</span>
                <br></br>
                <br></br>
                <div class="ssheader">About</div>
                Brief description of barber inserted here as well as any unique
                services offered (colouring / braiding)
              </div>
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
