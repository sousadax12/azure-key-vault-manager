import * as express from 'express';
import { AzureCliCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { getKeyVaults, createKeyVault } from  './keyVaultsRepository';
import * as bodyParser from 'body-parser';

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/key-vaults', async (req, res) => {
  const vaults = await getKeyVaults();
  res.send(vaults);
});

app.post('/key-vaults', async (req, res) => {
  console.log(req);
  const { name, displayName, color, displayOrder, displayOnTable } = req.body;
  const vaults = await createKeyVault({ name, displayName, color, displayOrder, displayOnTable });
  res.send(vaults);
});

app.get('/', async (req, res) => {
  console.log("getting test");
  const credential = new AzureCliCredential();
  const vaultName = 'test-tamo-vault';
  const url = `https://${vaultName}.vault.azure.net`;

  const client = new SecretClient(url, credential);

  const value = [];
  for await (const secretProperties of client.listPropertiesOfSecrets()) {
    console.log('Secret properties: ', secretProperties);
    value.push(secretProperties);
  }

  res.send(value);
});
