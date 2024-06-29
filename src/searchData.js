
import Airtable from 'airtable';

const token =
  'patTX1cwSKVpDKQ63.5bd9c7552485e54487c6e17913b4e7f0e68bfedf725a360c2d80673b4fdf9d27';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token,
});

const base = Airtable.base('appcttjzPgvmm4Gdx');

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = [];

    base('trip')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            title: record.fields['Title'],
            description: record.fields['Description'],
            url: record.fields['Url'],
          });
        });

        resolve(content);
      })
      .catch((error) => reject(error));
  });
}

export { getPostTeasers };
