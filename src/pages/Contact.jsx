import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-box">
          <p>
            This is the Contact Page. You can place your contact form, details, or
            any custom content here.
          </p>
          <p>
            Here will paste my linkdin , fitwithsatya wala insta, and other pics also, also will make 
            background pic as page ka wallpaper
          </p>
        </div>
      </div>

      {/* ✅ Social Logos outside contact-container   */}
      {/* images ke pics folder me daalne padenge */}
      <div className="social-logos">
        <img src="/assets/instagram.png" alt="Instagram" />
        <img src="/assets/linkedin.png" alt="LinkedIn" />
        <img src="/assets/youtube.png" alt="YouTube" />
      </div>
    </>
  );
};

export default Contact;
