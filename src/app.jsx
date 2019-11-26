import React, { useEffect } from 'react';
import bglog from './bglog';

const App = (props) => {
  // console.log('i am in useEffect');
  alert('started');
  chrome.devtools.network.onRequestFinished.addListener((httpReq) => {
    // console.log('i am in useEffect');
    
    // console logging to see how the response structure is like: 
    bglog(httpReq.request);
    bglog(httpReq.response);
    
    // parsing json string from postData.text
    JSON.parse(httpReq.response.postData.text);

  })


  useEffect(() => {

  })

  return (
    <div>
      Hello World; 
      This is test 
    </div>
  )
}

export default App;