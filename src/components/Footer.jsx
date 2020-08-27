import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-4">
                <h3>:כתובת</h3>
                <p class="lead mb-0">
                  ,קריית-שמונה
                  <br />
                  האצ"ל 20 - <br /> אחד-העם 9 -
                </p>
              </div>
              <div className="footer-col col-md-4">
                <h3>:מצא אותנו בפסייבוק</h3>
                <ul className="list-inline">
                  <li>
                    <a href="#" className="btn-social btn-outline">
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} />{" "}
                      </i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="btn-social btn-outline">
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} />{" "}
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-social btn-outline">
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} />{" "}
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-social btn-outline">
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} />{" "}
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn-social btn-outline">
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={faFacebook} />{" "}
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col-md-4">
                <h3>:קצת עלינו</h3>
                <p>.סטודנטים למדעי המחשב שנה אחרונה במכללת תלי-חי </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div class="container">
                <small>
                  מגישים &copy; ודוד ביטון - 301431482 ,אור יצהרי - 204265086,
                  ודוד ביטון - 301431482 ,אור יצהרי - 204265086 ,ודוד ביטון -
                  301431482
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
