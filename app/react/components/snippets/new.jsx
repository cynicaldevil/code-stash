import React from 'react';
import CodeMirror from 'react-codemirror';
import $ from 'jquery';
require('../../../../node_modules/codemirror/lib/codemirror.css');

class NewSnippet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            code: '// your code here...'
        };
    }

    updateCode = (newCode) => {
        this.setState({
            code: newCode
        });
    }

    updateTitle = (newTitle) => {
        this.setState({
            title: newTitle.target.value
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
            readOnly: false
        };

        return (
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" defaultValue={this.state.title}
                    placeholder="Title..." onChange={this.updateTitle} />
                    <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
                    <button type="submit">Submit</button>
                </form>
            <a href={this.props.snippet_index_link} >Back</a>
            </div>
        );
    }
}

export default NewSnippet;