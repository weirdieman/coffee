import React from "react";

import "./styles.scss";

const SignUp = () => {
  const [activeCheckbox, setActiveCheckbox] = React.useState(false)
  return (
    <section className="sign-up">
      <div className="sign-up__inner">
        <div className="sign-up__logo">
          <span className="sign-up__title">Create account</span>
        </div>
        <div className="sign-up__content">
          <form className="sign-up__form" action="">
            <input
              className="sign-up__input1"
              name="login"
              type="text"
              required
              placeholder="Username"
            />
            <input
              className="sign-up__input2"
              name="login"
              type="text"
              required
              placeholder="Email"
            />
            <input
              className="sign-up__input3"
              name="password"
              type="password"
              required
              placeholder="Password"
            />
            <svg
              onClick={() => setActiveCheckbox(!activeCheckbox)}
              className={`sign-up__check ${activeCheckbox ? 'is-active' : ''}`}
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="28"
                height="24"
                rx="5"
                fill="white"
                stroke="black"
                stroke-width="2"
              />
              <line
                className="sign-up__check-line1"
                x1="14.2366"
                y1="19.3541"
                x2="25.2366"
                y2="6.35406"
                stroke="white"
                stroke-width="2"
              />
              <line
                className="sign-up__check-line2"
                x1="5.70711"
                y1="11.2929"
                x2="14.7071"
                y2="20.2929"
                stroke="white"
                stroke-width="2"
              />
            </svg>
            <span className="sign-up__agreemant">
              I agree to the <a>Terms</a> and <a>Privacy Policy</a>
            </span>
            <button className="hero__btn sign-up__btn">Sign Up</button>
          </form>
          <span className="sign-up__text">Already have an account?</span>
          <a className="sign-up__link" href="#">
            Sign In
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
