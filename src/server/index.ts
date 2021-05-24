import * as express from 'express';
import { AzureCliCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const credential = new AzureCliCredential();
  const vaultName = '';
  const url = `https://${vaultName}.vault.azure.net`;

  const client = new SecretClient(url, credential);

  const value = [];
  for await (const secretProperties of client.listPropertiesOfSecrets()) {
    console.log('Secret properties: ', secretProperties);
    value.push(secretProperties);
  }

  res.send(value);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
