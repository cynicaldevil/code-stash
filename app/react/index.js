import RWR from 'react-webpack-rails';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SnippetsIndex from './components/snippets/index';
import NewSnippet from './components/snippets/new';
import ShowSnippet from './components/snippets/show';

RWR.registerComponent('snippets', SnippetsIndex);
RWR.registerComponent('new_snippet', NewSnippet);
RWR.registerComponent('show_snippet', ShowSnippet);
RWR.run();
