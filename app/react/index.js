import RWR from 'react-webpack-rails';

import Snippets from './components/snippets';
import NewSnippet from './components/snippet_new';

RWR.registerComponent('Snippets', Snippets);
RWR.registerComponent('Snippet_new', NewSnippet);
RWR.run();
