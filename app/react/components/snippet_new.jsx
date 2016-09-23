import React from 'react';
import CodeMirror from 'react-codemirror';
require('../../../node_modules/codemirror/lib/codemirror.css');

class NewSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "// type code here"
        };
    }

    updateCode = (newCode) => {
        this.setState({
            code: newCode
        });
    }

    render = () => {
        const options = {
            lineNumbers: true,
            readOnly: false
        };

        return (
            <div>
                <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
                <a href={this.props.snippet_index_link} >Back</a>
            </div>
        );
    }
}

export default NewSnippet;
