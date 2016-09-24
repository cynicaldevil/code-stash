import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CodeMirror from 'react-codemirror';
require('../../../../node_modules/codemirror/lib/codemirror.css');

class Snippets extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        injectTapEventPlugin();
    }

    render() {
        const options = {
            lineNumbers: true,
            readOnly: true,
        };
        const snippets = this.props.snippets.map((snippet, index) => {
            return (
                <div key={index}>
                    <div>{snippet.title}</div>
                    <CodeMirror value={snippet.text} options={options} />
                </div>)
        });
        return (
            <MuiThemeProvider>
            <div>
                <a href={this.props.new_snippet_link} >New Snippet</a>
                <h1>List all snippets</h1>
                <div>
                    {snippets}
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default Snippets;