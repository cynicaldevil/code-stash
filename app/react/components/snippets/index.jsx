import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CodeMirror from 'react-codemirror';
require('../../../../node_modules/codemirror/lib/codemirror.css');

class Snippet extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        const snippet = this.props.snippet;

        const link = {
            show: '/snippets/' + snippet.id,
            edit: '/snippets/' + snippet.id + '/edit'
        };

        const options = {
            lineNumbers: true,
            readOnly: true,
        };

        let code = snippet.text;
        let i = 0, count = 0;
        while(count < 10 && i < code.length) {
            if(code.charAt(i) === '\n')
                count++;
            i++;
            if(count === 10)
            {
                code = code.substr(0, i);
            }
        }

        const styles = {
            code: {
                width: 900,
                border: '1px solid #CDCDCD',
                margin: 10,
                overflow: 'hidden',
                height: count >= 10 ? 157: ((count+1) * 15) + 8,
                cursor: 'pointer'
            },
            title: {
                main: {
                    fontFamily: `'Roboto Condensed', sans-serif`,
                    width: 900,
                    fontSize: 19,
                    letterSpacing: -0.5,
                    color: '#001C57',
                    display: 'flex',
                    justifyContent: 'space-between',
                },
                buttons: {
                    marginRight: 5,
                    width: 75
                }
            },
            main: {
                margin: 30
            },
            bar: {
                height: 2,
                width: 1000,
                background: 'linear-gradient(to right, #6294FF , white)',
                marginBottom: 20,
                marginTop: 5
            }
        };
        return (
            <div style={styles.main}>
                <div style={styles.title.main}>
                    <div>{snippet.title}</div>
                    <div style={{display: 'flex'}}>
                        <div style={styles.title.buttons}>
                            <FlatButton label='Show' href={link.show}/>
                        </div>
                        <div style={styles.title.buttons}>
                            <FlatButton label='Edit' href={link.edit}/>
                        </div>
                    </div>
                </div>
                <div style={styles.bar} />
                <div style={styles.code}>
                    <CodeMirror value={code} options={options} />
                </div>
            </div>
        );
    }
}

class Snippets extends React.Component {
    constructor(props) {
        super(props);
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