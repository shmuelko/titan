import express from 'express';
import NodeCache from 'node-cache';
import cors from 'cors';
import { getQuoteTagTags } from './services/tag';
import { getQuotes } from './services/quotes';

const app = express();
const port = 3000;
export const cache = new NodeCache({
  stdTTL: 60 * 60
});

require('dotenv').config()

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.get('/tags', async (req, res, next) => {
  try {
    const quotegTags = await getQuoteTagTags()
    res.send(quotegTags);
  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
});

app.get('/quotes', async (req, res, next) => {
  console.log('req.query: ', req.query)
  try {
    const jsonData = await getQuotes((req.query.tag as string), (req.query.number as string));
    res.send({quotes: jsonData});
  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});


