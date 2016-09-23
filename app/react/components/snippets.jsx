import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Snippets extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        injectTapEventPlugin();
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
            <MuiThemeProvider>
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
            </MuiThemeProvider>
        );
    }
}

export default Snippets;
