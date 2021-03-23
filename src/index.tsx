import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="CardStack">
          <div className="Card">
            <div className="AvatarWrap">
              <img
                className="Avatar"
                src="https://i.imgur.com/rkg8nKE.png"
                alt=""
              />
              <div className="StatusOn" />
            </div>
            <div className="Title">Anh văn lớp K23t</div>
            <div className="Description">
              Connect Facebook as a social media connection for your
              application.
            </div>
            <div className="Actions">
              <a type="button" className="Secondary" href="/">
                Test
              </a>
              <a type="button" className="Primary" href="/">
                Edit
              </a>
            </div>
          </div>
          <div className="Card">
            <div className="AvatarWrap">
              <img
                className="Avatar"
                src="https://i.imgur.com/rkg8nKE.png"
                alt=""
              />
              <div className="StatusOff" />
            </div>
            <div className="Title">Anh văn lớp K23t</div>
            <div className="Description">
              Connect Twitter as a social media connection for your application.
            </div>
            <div className="Actions">
              <a type="button" className="Secondary" href="/">
                Test
              </a>
              <a type="button" className="Primary" href="/">
                Edit
              </a>
            </div>
          </div>
          <div className="Card">
            <div className="AvatarWrap">
              <img
                className="Avatar"
                src="https://i.imgur.com/rkg8nKE.png"
                alt=""
              />
              <div className="StatusOff" />
            </div>
            <div className="Title">Anh văn lớp K23t</div>
            <div className="Description">
              Connect Twitter as a social media connection for your application.
            </div>
            <div className="Actions">
              <a type="button" className="Secondary" href="/">
                Test
              </a>
              <a type="button" className="Primary" href="/">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
