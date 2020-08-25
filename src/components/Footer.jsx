import React from "react";
import "./freelancer.css";
import "./freelancer.min.css";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer class="footer text-center" id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 mb-8 mb-lg-0">
                <h4 class="text-center mb-4">:כתובת</h4>
                <p class="lead mb-0">
                  ,קריית-שמונה
                  <br />
                  האצ"ל 20 - <br />
                  אחד-העם 9 -{" "}
                </p>
              </div>

              <div class="col-lg-3 mb-8 mb-lg-0">
                <h4 class="text-center mb-4">:מספר</h4>
                <i class="fas fa fa-phone mr-2"></i>
                <p class="lead mb-0">
                  <br />
                  052-4764379 - אור
                  <br />
                  054-7303575 - דוד
                </p>
              </div>

              <div class="col-lg-3 mb-8 mb-lg-0">
                <h4 class="text-center mb-4">:מצא אותנו בפסייבוק</h4>
                <a
                  class="btn btn-outline-light btn-social mx-1"
                  href="https://www.facebook.com/or.izhari"
                >
                  <i class="fab fa-fw fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-social mx-1"
                  href="https://www.facebook.com/profile.php?id=100000274645145"
                >
                  <i class="fab fa-fw fa-facebook-f"></i>
                </a>
              </div>

              <div class="col-lg-3">
                <h4 class="text-center mb-4">:קצת עלינו</h4>
                <p class="lead mb-0" />
                .סטודנטים למדעי המחשב שנה אחרונה במכללת תלי-חי
              </div>
            </div>
          </div>
        </footer>

        <section class="copyright py-4 text-center text-white">
          <div class="container">
            <small>
              מגישים &copy; אור יצהרי - 204265086 ודוד ביטון - 301431482
            </small>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
