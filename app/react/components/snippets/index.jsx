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

        const styles = {
            codemirror: {
                width: 900,
                border: '1px solid black',
                margin: 10,
                overflow: 'hidden'
            }
        };

        const snippets = this.props.snippets.map((snippet, index) => {

            const code = snippet.text;
            let i = 0, count = 0;
            while(count < 10 && i < code.length) {
                if(code.charAt(i) === '\n')
                    count++;
                i++;
            }
            const innerStyles = {
                code: {
                    ...styles.codemirror,
                    height: count >= 10 ? 154 : ((count+1) * 15) + 8,
                    cursor: 'pointer'
                }
            };

            return (
                <div key={index}>
                    <div>{snippet.title}</div>
                        <div style={innerStyles.code}>
                            <CodeMirror value={snippet.text} options={options} />
                        </div>
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