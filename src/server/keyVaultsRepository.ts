import * as Datastore from 'nedb';
import * as os from 'os';
import {KeyVault} from "_models/KeyVault";

const homedir = os.homedir();
const db = new Datastore({ filename: `${homedir}/.azkvm/vaults.db` });
db.loadDatabase(function (err) {
  console.error(err);
});

export const getKeyVaults = ():Promise<KeyVault[]> => new Promise((resolve, reject) => {
  db.find({}, (err, docs) => {
    if (err) {
      reject(err);
    } else {
      resolve(docs);
    }
  });
});

export const createKeyVault = (keyVault:KeyVault) => new Promise((resolve, reject) => {
    db.update({ name: keyVault.name }, keyVault, { upsert: true }, function (err, numReplaced, upsert) {
        if (err) {
            reject(err);
        } else {
            resolve({ replaced: numReplaced } );
        }
    });
});
