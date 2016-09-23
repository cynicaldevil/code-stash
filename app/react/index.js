import RWR from 'react-webpack-rails';

import SnippetsIndex from './components/snippets/index';
import NewSnippet from './components/snippets/new';

RWR.registerComponent('snippets', SnippetsIndex);
RWR.registerComponent('new_snippet', NewSnippet);
RWR.run();
