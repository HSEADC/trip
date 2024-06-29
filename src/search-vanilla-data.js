import Airtable from 'airtable'

const token =
  'pat1mBiKRrJYtRJ3i.ea676e6f0f28467766745cd8152e3d0e979a537c089e953aded1d72ef218cc9e'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('pat1mBiKRrJYtRJ3i')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('teasers')
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
            url: record.fields['Url']
          })
        })

        resolve(content)
      })
    console.log(content)
  })
}

export { getPostTeasers }
