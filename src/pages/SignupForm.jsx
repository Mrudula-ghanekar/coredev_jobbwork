import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <div className="signupform">
      <img className="color-vec-icon" alt="" src="/color-vec.svg" />
      <div className="left-margin" />
      <b className="tittle">Sign up to hire for a project</b>
      <img
        className="jobwork-logo-png-1"
        alt=""
        src="/jobwork-logo-png-1@2x.png"
      />
      <img className="color-vec-icon1" alt="" src="/color-vec1.svg" />
      <img className="color-vec-icon2" alt="" src="/color-vec2.svg" />
      <img className="color-vec-icon3" alt="" src="/color-vec3.svg" />
      <img className="color-vec-icon4" alt="" src="/color-vec4.svg" />
      <img className="color-vec-icon5" alt="" src="/color-vec5.svg" />
      <b className="projects-simplified">Projects Simplified</b>
      <input className="textinput-firstname" type="text" />
      <button className="apple-signup-button">
        <div className="apple-signup-button-child" />
        <div className="continue-with-apple-wrapper">
          <div className="continue-with-apple">Continue with Apple</div>
        </div>
        <img className="apple-1-icon" alt="" src="/apple-1@2x.png" />
      </button>
      <button className="google-signup-button">
        <div className="apple-signup-button-child" />
        <div className="continue-with-google-wrapper">
          <div className="continue-with-google">Continue with Google</div>
        </div>
        <img className="apple-1-icon" alt="" src="/apple-11@2x.png" />
      </button>
      <input className="textinput-workemail" type="email" />
      <input className="textinput-pass" type="password" />
      <input className="textinputlastname" type="text" />
      <div className="first-name">
        <div className="work-email-address">First name</div>
      </div>
      <div className="work-email">
        <div className="work-email-address">{`Work email address `}</div>
      </div>
      <div className="pass">
        <div className="work-email-address">
          Password (8 or more characters)
        </div>
      </div>
      <div className="ckb1text">
        <div className="work-email-address">
          Send me emails with tips on how to find talent that fits my needs.
        </div>
      </div>
      <div className="ckb2text">
        <div className="work-email-address">
          Yes, I understand and agree to the
        </div>
      </div>
      <div className="including">
        <div className="work-email-address">, including the</div>
      </div>
      <div className="including1">
        <div className="work-email-address">and</div>
      </div>
      <div className="div">
        <div className="work-email-address">.</div>
      </div>
      <div className="lastname">
        <div className="work-email-address">Last name</div>
      </div>
      <div className="or">
        <div className="work-email-address">OR</div>
      </div>
      <img className="hire-talent-1" alt="" src="/hire-talent-1@2x.png" />
      <div className="google-line" />
      <div className="apple-line" />
      <input className="checkbox2" required={true} type="checkbox" />
      <input
        className="checkbox1"
        required={true}
        checked={true}
        type="checkbox"
      />
      <div className="rdr-home">
        <div className="log-in">Jobwork Terms of Service</div>
      </div>
      <a className="rdr-tc">
        <div className="work-email-address">Jobwork Terms of Service</div>
      </a>
      <a className="rdr-user">
        <div className="work-email-address">User Agreement</div>
      </a>
      <a className="rdr-pp">
        <div className="work-email-address">Privacy Policy</div>
      </a>
      <Button className="create-account-button" variant="primary" />
      <div className="create-account">cREATE ACCOUNT</div>
    </div>
  );
};

export default SignupForm;
