import React from "react";
import '../header/About.css';

const About = () => {
  return (
    <>
  <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="links">
        <div className="link">
          <a>
          <img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" className="imageAbout"  alt="linkedin" />

          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/YCV2QBJg/github.png" className="imageAbout" alt="github" />
          </a>
        </div>
        <div className="link">
          <a>
            <img
              src="https://i.postimg.cc/W4Znvrry/codepen.png"
              alt="codepen"
              className="imageAbout"
            />
          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"   className="imageAbout"   />
          </a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form>
        <div className="form-item">
          <input type="text" name="sender" required="" />
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" required="" />
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" required="" defaultValue={""} />
          <label>Message:</label>
        </div>
        <button className="submit-btn">Send</button>
      </form>
    </div>
  </div>
</section>

    </>
  );
};

export default About;
