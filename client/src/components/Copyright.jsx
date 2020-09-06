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
						מגישים &copy; אור יצהרי - 204265086 ודוד ביטון -
						301431482
					</small>
				</div>
			</section>
		);
	}
}

export default Copyright;
