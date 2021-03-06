import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper valign-wrapper">
            <a href="/" className="brand-logo center">
              <i className="material-icons" />Animedia
            </a>

            <ul className="right hide-on-med-and-down">
              <li>
                <form>
                  <div className="input-field">
                    <input id="search" type="search" required />
                    <label className="label-icon" htmlFor="search">
                      <i className="material-icons">search</i>
                    </label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          {/*End Nav Wrapper*/}
        </nav>
        <style jsx>{`
          nav {
            background-position: center;
            height: 40vh;
            background-image: url("https://images.alphacoders.com/606/thumb-1920-606210.jpg");
            z-index: 10;
            overflow: hidden;
          }
          nav:before {
            content: "";
            position: absolute !important;
            width: 100%;
            height: 40vh;
            background: rgba(0, 0, 0, 0.5) !important;
            z-index: 20;
          }

          .brand-logo {
            height: 40vh;
            margin-top: 30px !important;
            color: rgb(255, 255, 255) !important;
            font-family: "Monoton", cursive;
            text-shadow: 10px 10px rgb(94, 61, 43);
            position: relative;
            z-index: 25;
            font-size: 12.5rem !important;
            top: 25%;
          }

          /* When the input field gets focus, change its width to 100% */
          input[type="text"]:focus {
            width: 20% !important;
            height: 10px !important;
          }
        `}</style>
      </div>
    );
  }
}

export default Navbar;
