import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Header, PortfolioMap, Footer } from "../components";

function App() {
	return (
		<ScrollableAnchor id="map">
			<div>
				<Header />
				<div>
					<PortfolioMap />
					{/* <Footer /> */}
				</div>
			</div>
		</ScrollableAnchor>
	);
}

export default App;
