import React from 'react';
import './App.css';
import { Quote } from '../modules/quote';
 
function App() {
  const [number, setNumber] = React.useState(0);
  const [quotes, setQuotes] = React.useState([]);
  const [tag, setTag] = React.useState('');
  const [tags, setTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/tags');
      const data = await response.json();
      setTags(data);
    })();
  }, []);
  
  const handleGetQuotes = async () => {
    try {
      const response = await fetch(`http://localhost:3000/quotes?number=${number}&tag=${tag}`);
      if(!response.ok) {
        const body = await response.text();
        alert(body);
      } else {
        const data = await response.json();
        setQuotes(data.quotes);
      }
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <div className="App">
      <h2 className='pt-3'>
        <u>Quotes Of the Day</u>
      </h2>
      
      <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
        <div className="btn-group" role="group">
          <input value={number} type='number' onChange={(e) => setNumber(Number(e.target.value))} className="form-control" />
          <select className="custom-select" value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="">Filter By Tag</option>
            {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
          </select>
          <div className="input-group-append">
            <button type="button" className="btn btn-primary" 
              onClick={handleGetQuotes}>Get Quotes</button>
          </div>
        </div>
      </div>
      
      {quotes.length > 0 && quotes[0] ? 
        <div className='row justify-content-center'>
          <div className='col-11'>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Quote</th>
                  <th scope="col">Author</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote: Quote, index) => 
                  {
                    if(quote.lines) {
                      return (
                        quote.lines.map((line, innerIndex) => 
                          <tr key={index + innerIndex}>
                            <td>{line.body}</td>
                            <td>{line.author}</td>
                          </tr>
                        )
                      )
                    } else {
                      return (
                        <tr key={index}>
                          <td>{quote.body}</td>
                          <td>{quote.author}</td>
                        </tr>
                      )
                    }
                  }
                )}
              </tbody>
            </table>
            
          </div>
        </div>
      : <p>{(quotes[0] as {author: string, body: string})?.body}</p>}
    </div>
  );
}

export default App;
