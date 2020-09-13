import React, { Component } from "react";

class Copyright extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<section className="copyright py-4 text-center text-white">
				<div className="container">
					<small>
						מגישים &copy; אור יצהרי, דוד ביטון, שלו מרציאנו, קובי
						חורשיד, שי דורון
					</small>
				</div>
			</section>
		);
	}
}

export default Copyright;
