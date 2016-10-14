import React from 'react';
import CodeMirror from 'react-codemirror';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

// import styleCustom from '../../../assets/stylesheets/codemirror-do-not-extend.css';

require('../../../../node_modules/codemirror/lib/codemirror.css');
require('../../../../node_modules/codemirror/mode/jsx/jsx');
require('../../../../node_modules/codemirror/mode/http/http');
require('../../../../node_modules/codemirror/mode/javascript/javascript');

const extUtil = {
    determineLang: (fileName) => {
        const reqString = '../../../../node_modules/codemirror/mode/';
        const extArr = {
            js: 'javascript',
            jsx: 'jsx',
            http: 'http'
        };
        let lang = '';
        Object.keys(extArr).forEach((extension) => {
            let regexObj = new RegExp(extension + '$', 'g');
            if(regexObj.test(fileName)) {
                lang = extArr[extension];
            }
        });
        return lang;
    }
}

class NewSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            code: '\n\n\n\n',
            mode: ''
        };
    }

    updateCode = (newCode) => {
        this.setState({
            code: newCode
        });
    }

    updateTitle = (newTitle) => {
        const fileName = newTitle.target.value;
        const lang = extUtil.determineLang(fileName);
        this.setState({
            title: fileName,
            mode: lang
        });
    }

    submit = (e) => {
        e.preventDefault();

        let self = this;

        let snippet = {
            title: this.state.title,
            text: this.state.code
        };

        $.ajax({
            type: 'POST',
            url: '/snippets',
            data: {snippet: snippet},
        })
        .done(() => {
            console.log('submitted!');
        })
        .fail((err) => {
            console.log('failed to submit!', err);
        });
    }

    render = () => {
        const options = {
            lineNumbers: true,
            readOnly: false,
            mode: this.state.mode
        };

        const styles = {
            codemirror: {
                margin: 10,
                width: 900,
                border: '1px solid #CDCDCD'
            },
            custom: {
                // ...styleCustom,
                // height: 900
            },
            title: {
                fontSize: 15,
                marginBottom: 15
            },
            header: {
                fontFamily: `'Roboto Condensed', sans-serif`,
                fontSize: 25,
                letterSpacing: -1,
                marginBottom: 7
            },
            main: {
                margin: 20,
                marginBottom: 150
            },
            submit: {
                marginLeft: 818,
                marginTop: 10
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
            <MuiThemeProvider>
            <div style={styles.main}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
                <RaisedButton
                label='Back to Snippets'
                href={this.props.snippet_index_link}
                icon={<FontIcon className="material-icons">first_page</FontIcon>}
                />
                <p style={styles.header}>New Snippet:</p>
                <div style={styles.bar} />
                <form onSubmit={this.submit}>
                    <input style={styles.title} type="text" defaultValue={this.state.title}
                    placeholder="Title..." onChange={this.updateTitle} />
                    <div style={styles.codemirror}>
                        <CodeMirror style={styles.custom} value={this.state.code}
                        onChange={this.updateCode} options={options} />
                    </div>
                    <RaisedButton type="submit" style={styles.submit} label="Submit"/>
                </form>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default NewSnippet;