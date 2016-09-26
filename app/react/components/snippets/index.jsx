import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CodeMirror from 'react-codemirror';
require('../../../../node_modules/codemirror/lib/codemirror.css');

class Snippet extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        const snippet = this.props.snippet;

        const options = {
            lineNumbers: true,
            readOnly: true,
        };

        const code = snippet.text;
        let i = 0, count = 0;
        while(count < 10 && i < code.length) {
            if(code.charAt(i) === '\n')
                count++;
            i++;
        }
        const styles = {
            code: {
                width: 900,
                border: '1px solid black',
                margin: 10,
                overflow: 'hidden',
                height: count >= 10 ? 154 : ((count+1) * 15) + 8,
                zIndex: 100,
                cursor: 'pointer'
            },
            link: {
                display: 'block',
                textDecoration: 'none'
            },
            title: {
                fontFamily: `'Roboto Condensed', sans-serif`,
                fontSize: 17
            },
            main: {
                margin: 20
            }
        };
        return (
            <div style={styles.main}>
                <div style={styles.title}>{snippet.title}</div>
                <a style={styles.link} href="https://github.com">
                    <div style={styles.code}>
                        <CodeMirror value={snippet.text} options={options} />
                    </div>
                </a>
            </div>
        );
    }
}

class Snippets extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        injectTapEventPlugin();
    }

    render() {

        const styles = {
            header: {
                fontFamily: `'Roboto Condensed', sans-serif`,
                fontWeight: 400,
                letterSpacing: -1.7,
            }
        };

        const snippets = this.props.snippets.map((snippet, index) => {

            return <Snippet key={index} snippet={snippet} />;
        });
        return (
            <MuiThemeProvider>
            <div>
                <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet" />
                <a href={this.props.new_snippet_link} >New Snippet</a>
                <h1 style={styles.header}>List all snippets</h1>
                <div>
                    {snippets}
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default Snippets;