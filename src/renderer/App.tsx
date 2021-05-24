import * as React from 'react';
import { global } from '_theme';

const globalStyles = global({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});

const App = () => {
  globalStyles();

  return <h1>Cona</h1>;
};

export default App;
