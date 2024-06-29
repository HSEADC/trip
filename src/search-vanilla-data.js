import Airtable from 'airtable'

const token =
  'pat6Ry1pAxfKJ6Wp9.749e80149897f47f097e77cc530e49e6719e9c5b8fff82a588f0a0cb1c039856'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('applARn5PWglOLkTt')

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
