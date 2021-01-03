import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ocdenn1c',
  dataset: 'production',
  useCdn: true
});
