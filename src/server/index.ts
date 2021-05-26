import * as express from 'express';
import { AzureCliCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { getKeyVaults, createKeyVault } from  './keyVaultsRepository';
import * as bodyParser from 'body-parser';

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
  const credential = new AzureCliCredential();
  const vaults = await getKeyVaults();
  const secrets = {};
  for (const vault of vaults) {
    const vaultName = vault.name;
    const url = `https://${vaultName}.vault.azure.net`;
    const client = new SecretClient(url, credential);
    for await (const secretProperties of client.listPropertiesOfSecrets()) {
      if(! secrets[secretProperties.name]){
        secrets[secretProperties.name] = {};
      }
      secretProperties.vault = vault;
      secrets[secretProperties.name][vaultName] = secretProperties;
    }
  }

  res.send(secrets);
});
