import React from 'react';
import CodeMirror from 'react-codemirror';

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
                Test!
            {/* IMP TODO: fix style of codemirror component */}
                <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
            </div>
        );
    }
}

export default NewSnippet;
