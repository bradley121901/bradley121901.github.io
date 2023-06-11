import { Route, Link, Routes, useNavigate } from 'react-router-dom';
export default function Policy() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div class="policy-spacing">
        <div class="page-header" text-align="center">
          Booking Policy
        </div>
      </div>
      <br></br>

      <div class="policy-spacing">
        <div>
          We highly recommend booking an appointment in advance to ensure
          availability. Walk-ins are also welcome, but priority will be given to
          those with appointments.
        </div>
        <br></br>
        <div>
          Please arrive at least 10 minutes before your scheduled appointment to
          check-in, relax, and enjoy our comfortable waiting area. Late arrivals
          may result in a shortened service or rescheduling, depending on the
          availability of our barbers.
        </div>
        <br></br>
        <div>
          If you need to cancel or reschedule your appointment, we kindly
          request a minimum of 24 hours' notice. This allows us to accommodate
          other clients. Late cancellations or no-shows may be subject to a
          cancellation fee.
        </div>
        <br></br>
        <br></br>
        <div class="policy-spacing">
          <Link to="/book">
            <button class="ntb onClick={goBack}" type="submit">
              Confirm
            </button>
          </Link>
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
