import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import CodeMirror from 'react-codemirror';
require('../../../../node_modules/codemirror/lib/codemirror.css');
require('../../../assets/stylesheets/codemirror-extend.css');

class ShowSnippet extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        const snippet = this.props.snippet;
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
            },
            title: {
                fontFamily: `'Roboto Condensed', sans-serif`,
                width: 900,
                fontSize: 19,
                letterSpacing: -0.5,
                color: '#001C57',
                display: 'flex',
                justifyContent: 'space-between',
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
            },
            comments: {
                border: '1px solid black'
            }
        };

        return (
            <MuiThemeProvider>
            <div style={styles.main}>
                <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet" />
                <div style={styles.title}>
                    {snippet.title}
                </div>
                <div style={styles.bar} />

                <div style={styles.code}>
                    <CodeMirror value={snippet.text} options={options} />
                </div>
                <RaisedButton label='Edit' href={'/snippets/' + snippet.id + '/edit'}/>
                <RaisedButton label='Back' href={'/snippets'}/>

                <div styles={styles.comments}>
                    {comments}
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default ShowSnippet;
