import React from "react";
import PortfolioListItem from "./PortfolioListItem.jsx";
<<<<<<< HEAD
=======
import "./freelancer.css";
import "./freelancer.min.css";
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420

class PortfolioList extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD

=======
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
    this.state = {
      portfolioList: [
        { id: 1, url: "img/portfolio/cabin.png" },
        { id: 2, url: "img/portfolio/cake.png" },
        { id: 3, url: "img/portfolio/circus.png" },
        { id: 4, url: "img/portfolio/game.png" },
        { id: 5, url: "img/portfolio/safe.png" },
        { id: 6, url: "img/portfolio/submarine.png" }
      ]
    };
<<<<<<< HEAD
    this.state.portfolioList = props.data;
=======
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
  }

  render() {
    if (!this.state.portfolioList) {
      return <div>loading...</div>;
    }

    return (
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
<<<<<<< HEAD
              <h2>ערים נבחרות</h2>
=======
              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
                ערים נבחרות
              </h2>
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            {this.state.portfolioList.map(list => {
              return (
                <PortfolioListItem
                  imgUrl={list.url}
                  key={list.id}
                  modalName={"projmodal" + list.id}
<<<<<<< HEAD
                  name={list.name}
                  lat={list.lat}
                  lng={list.lng}
=======
>>>>>>> 9bfe51e9ccae6bb98f21e4e2d7a0917cf68cd420
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioList;
