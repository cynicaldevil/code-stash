import RWR from 'react-webpack-rails';

import SnippetsIndex from './components/snippets/index';
import NewSnippet from './components/snippets/new';
import ShowSnippet from './components/snippets/show';

RWR.registerComponent('snippets', SnippetsIndex);
RWR.registerComponent('new_snippet', NewSnippet);
RWR.registerComponent('show_snippet', ShowSnippet);
RWR.run();
