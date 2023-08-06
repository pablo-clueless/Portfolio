import { createClient } from "@sanity/client"
import imageBuilder from "@sanity/image-url"

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: 'production',
  apiVersion: '2022-02-27',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
})

const builder = imageBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client
