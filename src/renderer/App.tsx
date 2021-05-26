import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '_/components/shared/Table';
import { getAll, getAllKeyVault } from '_/services/keyVaultServices';
import { global } from '_theme';

const globalStyles = global({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});

const App = () => {
  globalStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    async function test(): Promise<void> {
      const newData = await getAll();
      setData(newData);
    }

    test();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
