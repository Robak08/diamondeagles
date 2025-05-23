import { strapi } from '@strapi/client';

console.log(import.meta.env.PUBLIC_CMS_API_URL, import.meta.env.PUBLIC_CMS_API_TOKEN)

const client = strapi({ baseURL: import.meta.env.PUBLIC_CMS_API_URL, auth: import.meta.env.PUBLIC_CMS_API_TOKEN, });

// Kategorie: https://strapi.diamondeaglesusa.com/api/company_categories
// Firmy: https://strapi.diamondeaglesusa.com/api/company-lists
// Formularze: https://strapi.diamondeaglesusa.com/api/emails
// IMGS URL https://api.diamondeaglesusa.com/img/{thumbnail_id}.jpg


/*

CATEGORY
 {
      id: 2,
      documentId: 'bwuzevdnyq4o26htbdqbzao8',
      category_name: 'Trade',
      createdAt: '2025-05-15T12:46:34.976Z',
      updatedAt: '2025-05-15T12:46:34.976Z',
      publishedAt: '2025-05-15T12:46:35.014Z'
    },

COMPANY

{
      id: 13547,
      documentId: 'uzz99sb3na2q4hrxdnco6qg1',
      uuid: 'ChIJiV5it4W4woARtLCCHcxv744',
      name: 'Hyun Dai Beauty Salon',
      website: '',
      phone: '(213) 703-0908',
      address: '740 S Western Ave #114, Los Angeles, CA 90005',
      score: 7.1,
      total_reviews: 8,
      thumbnail_id: 'm5qqavcy-1tmfj1lil0p',
      score_details: [Array],
      createdAt: '2025-05-15T14:46:15.453Z',
      updatedAt: '2025-05-15T14:46:15.453Z',
      publishedAt: '2025-05-15T14:46:15.460Z'
    },

*/

export const categories = await client.collection('company-categories');
export const companies = await client.collection('company-lists');
export const emails = await client.collection('emails'); 