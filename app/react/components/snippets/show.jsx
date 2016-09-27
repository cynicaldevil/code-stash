import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CodeMirror from 'react-codemirror';
require('../../../../node_modules/codemirror/lib/codemirror.css');
require('../../../assets/stylesheets/codemirror-extend.css');

class ShowSnippet extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
        const options = {
            lineNumbers: true,
            readOnly: true,
        };

        const styles = {
            code: {
                width: 900,
                border: '1px solid #CDCDCD',
                margin: 10,
                height: '100%',
                overflow: 'hidden',
                cursor: 'pointer'
            }
        };

		return (
			<div>
                <div style={styles.code}>
                    <CodeMirror value={this.props.snippet.text} options={options} />
                </div>
			</div>
		);
	}
}

export default ShowSnippet;