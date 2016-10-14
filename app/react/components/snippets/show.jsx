import React from 'react';

import ShowComment from '../comments/show';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CodeMirror from 'react-codemirror';
require('../../../../node_modules/codemirror/lib/codemirror.css');
// require('../../../assets/stylesheets/codemirror-extend.css');

import styleCustom from '../../../assets/stylesheets/codemirror-extend.css';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            comment: ''
        };
    }

    updateTitle = (event) => {
        this.setState({
            userName: event.target.value
        });
    }

    updateComment = (event) => {
        this.setState({
            comment: event.target.value,
        });
    }

    submit = (e) => {
        e.preventDefault();

        /* TODO: add validation for comment */
        const snippet_id = this.props.snippet_id;
        let comment = {
            commenter: this.state.userName,
            body: this.state.comment,
            snippet_id: snippet_id
        };

        $.ajax({
            type: 'POST',
            url: '/snippets/' + snippet_id + '/comments',
            data: {comment: comment},
        })
        .done(() => {
            console.log('submitted!');
        })
        .fail((err) => {
            console.log('failed to submit!', err);
        });
    }

    render () {

        const styles = {
            main: {
                fontFamily: `'Roboto Condensed', sans-serif`,
                marginTop: 50
            },
            comments: {
                // border: '1px solid black'
                marginLeft: 10,
                width: 900,
                lineHeight: '23px'
            },
            title: {
                fontSize: 23,
                marginLeft: -15,
                marginBottom: 0,
                letterSpacing: -1
            },
            newComment: {
                main: {
                    marginTop: 60
                },
                userName: {
                    margin: 10,
                    marginLeft: 20,
                    marginTop: 20,
                    marginBottom: 13,
                    // height: 20,
                    fontSize: 17,
                    width: 400
                },
                comment: {
                    marginLeft: 20,
                    fontSize: 14,
                    width: 800,
                    height: 120
                },
                button: {
                    marginLeft: 735,
                    marginTop: 10
                }
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
                <div style={styles.newComment.main}>
                    <form onSubmit={this.submit}>
                        <p style={styles.title}>Add a comment:</p>
                        {/* TODO: user name should be automatically
                            sent in POST request; implement this when 'users' resource is
                        created */}
                        <input style={styles.newComment.userName}
                        type="text" defaultValue={this.state.userName}
                        placeholder='Enter User Name...' onChange={this.updateTitle} />
                        <div>
                            <textarea placeholder='comment...' style={styles.newComment.comment}
                            value={this.state.comment}
                            onChange={this.updateComment} />
                        </div>
                        <RaisedButton type="submit" style={styles.newComment.button} label="Submit"/>
                    </form>
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
                margin: 30,
                marginBottom: 100
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

                <Comments comments={this.props.comments} snippet_id={snippet.id}/>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default ShowSnippet;
