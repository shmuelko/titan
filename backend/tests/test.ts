import express from 'express';
import cors from 'cors';
import { getQuotes } from '../src/services/quotes';

const testApp = express();
testApp.use(cors({
  origin: 'http://localhost:4200'
}));

testApp.get('/quotes', async (req, res, next) => {
  console.log('req.query: ', req.query)
  try {
    const jsonData = await getQuotes((req.query.tag as string), (req.query.number as string));
    res.send({quotes: jsonData});
  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
});

testApp.listen(3001, () => {
  return console.log(`Test Express is listening at http://localhost:3001`);
});

testApp.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});