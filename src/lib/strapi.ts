import { strapi } from '@strapi/client';

const client = strapi({ baseURL: import.meta.env.PUBLIC_CMS_API_URL, auth: import.meta.env.PUBLIC_CMS_API_TOKEN, });

// Kategorie: https://strapi.diamondeaglesusa.com/api/company_categories
// Firmy: https://strapi.diamondeaglesusa.com/api/company-lists
// Formularze: https://strapi.diamondeaglesusa.com/api/emails
// IMGS URL https://api.diamondeaglesusa.com/img/{thumbnail_id}.jpg

export const categories = await client.collection('company_categories');
export const companies = await client.collection('company-lists');
export const emails = await client.collection('emails'); 