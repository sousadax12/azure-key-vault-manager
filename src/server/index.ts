import * as express from 'express';
import { AzureCliCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { getKeyVaults, createKeyVault } from  './keyVaultsRepository';
import * as bodyParser from 'body-parser';
import {Properties} from "_models/Properties";
import {KeyVaultResponse} from "_models/SecretVault";
import {KeyVault} from "_models/KeyVault";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/key-vaults/:vaultName/secrets/:secretName', async (req, res) => {
  const { secretName } = req.params;
  const url = `https://${req.params.vaultName}.vault.azure.net`;
  const credential = new AzureCliCredential();
  const client = new SecretClient(url, credential);
  const latestSecret = await client.getSecret(secretName);
  const specificSecret = await client.getSecret(secretName, { version: latestSecret.properties.version! });
  res.send(specificSecret);
});

app.get('/key-vaults', async (req, res) => {
  const vaults = await getKeyVaults();
  res.send(vaults);
});

app.post('/key-vaults', async (req, res) => {
  const { name, displayName, color, displayOrder, displayOnTable } = req.body as KeyVault;
  const vaults = await createKeyVault({ name, displayName, color, displayOrder, displayOnTable } as KeyVault);
  res.send(vaults);
});

app.get('/', async (req, res) => {
  const vaults = await getKeyVaults();
  const secrets = {} as KeyVaultResponse;
  const credential = new AzureCliCredential();

  for (const vault of vaults) {
    const vaultName = vault.name;
    const url = `https://${vaultName}.vault.azure.net`;
    const client = new SecretClient(url, credential);
    for await (const secretProperties of client.listPropertiesOfSecrets()) {
      if (! secrets[secretProperties.name]) {
        secrets[secretProperties.name] = {};
      }
      const properties = secretProperties as Properties;
      properties.vault = vault;
      secrets[secretProperties.name][vaultName] = properties;
    }
  }

  res.send(secrets);
});
