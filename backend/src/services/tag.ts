import { cache } from '../app';

export async function getQuoteTagTags(): Promise<any[]> {
  if (cache.has('tags')) {
    console.log('tags FROM CACHE');
    return cache.get('tags') as any[];
  } else {
    const response = await fetch('https://favqs.com/api/typeahead', {
      headers: {
        'Authorization': `Bearer ${process.env.RUN_QUOTE_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const typesData = await response.json();
    const quoteTagTags = typesData["tags"].map((tag: any) => tag.name);
    cache.set('tags', quoteTagTags);
    return quoteTagTags;
  }
}
