//states
import React, {useState, useEffect} from 'react';

//components 
import Quote from './components/Quote'; 
import Ui from './components/Ui'; 

//css
import './App.css';



const App = () => {
  const [data, setData] = useState([]); //data comes from json
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [sentence, setSentence] = useState(null);
  const [history, setHistory] = useState(null);
  const API_URL = "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

  useEffect(() => {
    fetch(API_URL)
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
      setSentence(data[Math.floor(Math.random() * data.length)])
    })
    .catch(error => {
      console.error("Error fetching data : ", error);
      setError(error);
    })
    .finally(()=>{
      setLoading(false);
      
    })
  }, []);
  ;
  
  if(loading) return "Loading...";
  if(error) return "Error!";

  const handleDrawButton = () => {
    setHistory(sentence);
    setSentence(data[Math.floor(Math.random() * data.length)])
  }

  const handleLastQuote = () => {
    if(!history) return;
    setSentence(history);
  }
  
  
  return (
    <div className="App">  
      <Quote quote={sentence.quote} author={sentence.author}/>
      <Ui handleDrawButton={handleDrawButton} handleLastQuote={handleLastQuote}/>
    </div>
  );
}

export default App;
