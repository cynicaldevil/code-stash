import React from 'react';
import CodeMirror from 'react-codemirror';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

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

class EditSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.snippet.title,
            code: props.snippet.text,
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

    render () {
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
                height: 900
            },
            title: {
                fontSize: 15,
                marginBottom: 15
            },
            header: {
                fontFamily: `'Roboto Condensed', sans-serif`,
                fontSize: 23,
                letterSpacing: -1
            },
            main: {
                margin: 20
            },
            submit: {
                marginLeft: 818,
                marginTop: 10
            }
        };
        return (
            <MuiThemeProvider>
            <div style={styles.main}>
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

export default EditSnippet;
