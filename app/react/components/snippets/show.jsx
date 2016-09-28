import React from 'react';

import ShowComment from '../comments/show';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import CodeMirror from 'react-codemirror';
require('../../../../node_modules/codemirror/lib/codemirror.css');
require('../../../assets/stylesheets/codemirror-extend.css');

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        const styles = {
            comments: {
                border: '1px solid black'
            }
        };

        const comments = this.props.comments.map((comment, index) => {
            return <ShowComment comment={comment} key={index} />;
        });


        return (
            <div style={styles.main}>
                <p style={styles.title}>Comments:</p>
                <div style={styles.comments}>
                    {comments}
                </div>
            </div>
        );
    }
}

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
                main: {
                    fontFamily: `'Roboto Condensed', sans-serif`,
                    width: 1000,
                    fontSize: 19,
                    letterSpacing: -0.5,
                    color: '#001C57',
                    display: 'flex',
                    justifyContent: 'space-between',
                },
                buttons: {
                    // border: '1px inset #B8B8B8',
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
            <MuiThemeProvider>
            <div style={styles.main}>
                <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet" />
                <div style={styles.title.main}>
                    {snippet.title}
                    <div style={{display: 'flex'}}>
                        <div style={styles.title.buttons}>
                            <FlatButton label='Edit' href={'/snippets/' + snippet.id + '/edit'}/>
                        </div>
                        <div style={styles.title.buttons}>
                            <FlatButton label='Back' href={'/snippets'}/>
                        </div>
                    </div>
                </div>
                <div style={styles.bar} />

                <div style={styles.code}>
                    <CodeMirror value={snippet.text} options={options} />
                </div>

                <Comments comments={this.props.comments} />
            </div>
            </MuiThemeProvider>
        );
    }
}

export default ShowSnippet;
