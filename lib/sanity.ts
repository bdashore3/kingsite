import { createClient } from 'next-sanity';

const config = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: true
};

const sanity = createClient(config);

export default sanity;
