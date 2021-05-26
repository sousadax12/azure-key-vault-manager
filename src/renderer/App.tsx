import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '_/components/shared/Table';
import { KeyVaultResponse } from '_/models/SecretVault';
import {
  getAllSecretNames,
  getSecret,
  getSecretByName,
} from '_/services/keyVaultSecretServices';
import { getAll, getAllKeyVault, getByName } from '_/services/keyVaultServices';
import { global } from '_theme';

const globalStyles = global({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});

const App = () => {
  globalStyles();

  const [response, setResponse] = useState<KeyVaultResponse | null>(null);

  useEffect(() => {
    async function test(): Promise<void> {
      const newData = await getAllSecretNames();
      setResponse(newData);
    }

    test();
  }, []);

  const keyVaults = response
    ? new Set(
        Object.entries(response).map(([_key, value]) => Object.keys(value)[0])
      )
    : [];

  if (!response) return 'loading';

  return (
    <Table
      columnHeaders={['', ...keyVaults]}
      dataRows={Object.keys(response)}
    />
  );
};

export default App;
