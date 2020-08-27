/* eslint-disable react/prop-types */
import React from "react";
import PortfolioListItem from "./PortfolioListItem.jsx";

class PortfolioList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			portfolioList: [
				{ id: 1, url: "img/portfolio/cabin.png" },
				{ id: 2, url: "img/portfolio/cake.png" },
				{ id: 3, url: "img/portfolio/circus.png" },
				{ id: 4, url: "img/portfolio/game.png" },
				{ id: 5, url: "img/portfolio/safe.png" },
				{ id: 6, url: "img/portfolio/submarine.png" },
			],
		};
		this.state.portfolioList = props.data;
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
							<h2>ערים נבחרות</h2>
							<hr className="star-primary" />
						</div>
					</div>
					<div className="row">
						{this.state.portfolioList.map((list) => {
							return (
								<PortfolioListItem
									imgUrl={list.url}
									key={list.id}
									modalName={"projmodal" + list.id}
									name={list.name}
									lat={list.lat}
									lng={list.lng}
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
