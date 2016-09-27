import React from 'react';

class ShowComment extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		const comment = this.props.comment;
		return (
			<div>
				<p>{comment.commenter}</p>
				<div>{comment.body}</div>
			</div>
		);
	}
}
export default ShowComment;