import { cache } from '../app';

export async function getQuotes(tag: string, number: string): Promise<any[]> {
  if (cache.has(`tag=${tag}:number=${number}`)) {
    console.log('FROM CACHE');
    const quotes: any = cache.get(`tag=${tag}:number=${number}`);
    return quotes;
  }

  let url = `https://favqs.com/api/quotes`;
  if(tag != '') {
    url += `?filter=${tag}&type=tag&page=${number}`;
  }

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${process.env.RUN_QUOTE_TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ');
  }

  const jsonData = await response.json();
  console.log('jsonData: ', jsonData);
  cache.set(`tag=${tag}:number=${number}`, jsonData.quotes);

  return jsonData.quotes;
}
