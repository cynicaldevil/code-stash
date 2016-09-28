import React from 'react';

class ShowComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const comment = this.props.comment;

        const styles = {
            main: {
                width: 800,
                margin: 5,
                padding: 5
            },
            title: {
                fontSize: 21,
                display: 'inline-block',
                padding: 5,
                height: 15,

            },
            comment: {
                borderLeft: '3px solid blue',
                paddingLeft: 10,
                marginLeft: 30
            }
        }
        return (
            <div style={styles.main}>
                <p style={styles.title}>{comment.commenter}</p>
                <div style={styles.comment}>{comment.body}</div>
            </div>
        );
    }
}
export default ShowComment;
