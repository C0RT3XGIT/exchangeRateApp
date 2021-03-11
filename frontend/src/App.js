import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="Parrent">
      <div className="Title">
        <h1>Exchange Rate App</h1>
        <h2>
          This app, allows a user to put in a currency and a value and have it
          convert to another currency of a user's choice.
        </h2>
      </div>
      <div className="flex-box">
        <div className="left-group">
          <p>Enter amount:</p>
          <input type="text" name="" id="" placeholder="Enter amount..." />
          <div className="btn-group-sm" role="group">
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group-sm"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-primary">
                  MDL
                </button>
                <button type="button" className="btn btn-primary">
                  USD
                </button>
                <button type="button" className="btn btn-primary">
                  EUR
                </button>
                <button type="button" className="btn btn-primary">
                  RUB
                </button>
                <button type="button" className="btn btn-primary">
                  RON
                </button>

                <div class="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-group">
          <h4>Enter amount:</h4>
          <input type="text" name="" id="" placeholder="Enter amount..." />
          <div className="btn-group">
            <button>MDL</button>
            <button>USD</button>
            <button>EUR</button>
            <button>RUB</button>
            <button>RON</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
