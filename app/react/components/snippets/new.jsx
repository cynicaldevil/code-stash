import React from 'react';
import CodeMirror from 'react-codemirror';

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
            code: '// your code here...',
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
                border: '1px solid black'
            }
        };

        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" defaultValue={this.state.title}
                    placeholder="Title..." onChange={this.updateTitle} />
                    <div style={styles.codemirror}>
                        <CodeMirror value={this.state.code}
                        onChange={this.updateCode} options={options} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            <a href={this.props.snippet_index_link} >Back</a>
            </div>
        );
    }
}

export default NewSnippet;