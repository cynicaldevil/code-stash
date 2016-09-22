import React from 'react';

class Snippets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const snippets = this.props.snippets.map((snippet, index) => {
            return (
                <tr key={index}>
                    <td>{snippet.title}</td>
                    <td>{snippet.text}</td>
                </tr>)
        });
        return (
            <div>
                <a href={this.props.new_snippet_link} >New Snippet</a>
                <h1>List all snippets</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Text</th>
                            {/*<th colspan="3"></th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        {snippets}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Snippets;
