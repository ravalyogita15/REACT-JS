import React from 'react';
import './Header.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <div className="container main">
        <div className="row">
          <div className="col-md-6">
            <h1 className="m-5">Hi, Hi, I'm John Deo</h1>
            <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla. Beatae nobis fuga corporis earum hic dolore doloribus quisquam animi laboriosam cum qui accusantium, quaerat consectetur error atque laudantium voluptatum.</p>
            <button>I'M AVAILABLE</button>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagramSquare className="icon" />
              <FaGithub className="icon" />
            </div>
          </div>
          <div className="col-md-6 img">
            <img src="https://img.freepik.com/premium-photo/young-handsome-man-isolated-white-background_185193-82024.jpg" alt="John Deo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
