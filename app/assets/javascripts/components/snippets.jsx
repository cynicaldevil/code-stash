class Snippets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const snippets = this.props.snippets.map((snippet, index) => {
            return (
                <tr>
                    <td>{snippet.title}</td>
                    <td>{snippet.text}</td>
                </tr>)
        });
        return (
            <div>
                <a href={this.props.new_snippet_link} >New Snippet</a>
                <h1>List all snippets</h1>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Text</th>
                        {/*<th colspan="3"></th>*/}
                    </tr>
                    {snippets}
                </table>
            </div>
        );
    }
}
