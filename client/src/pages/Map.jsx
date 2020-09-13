import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Header, PortfolioMap } from "../components";

function App() {
	return (
		<ScrollableAnchor id="map">
			<div>
				{/* <Header /> */}
				<div>
					<PortfolioMap />
				</div>
			</div>
		</ScrollableAnchor>
	);
}

export default App;
