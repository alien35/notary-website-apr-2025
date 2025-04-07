import {createClient} from '@sanity/client';

export default createClient({
  projectId: 'd0vsn8y7', // find this in sanity.json
  dataset: 'production', // or the name you chose in sanity
  useCdn: true // `false` if you want to ensure fresh data
});