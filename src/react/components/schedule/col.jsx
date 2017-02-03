import React, { Component } from 'react'

export default class extends Component {
	stopPropagation(e) {
	    e.stopPropagation()
	    e.nativeEvent.stopImmediatePropagation()
	}

	render() {
		const data = this.props.data
		if(data == undefined) {
			return (
				<div className="col">
				</div>
			)
		}
		const photo = {
			backgroundImage: "url(images/stone-sm.png)",
		}
		return (
			<div className="col">
				<div role="talk-title">{data.subject}</div>
				<div role="talk-speaker">
					<div role="photo" style={photo}></div>
					{data.speaker.name}
				</div>
				<div role="talk-slide">
					<a href={data.slides} target="blank" onClick={this.stopPropagation}>#簡報連結</a>
				</div>
			</div>
		)
	}
}
