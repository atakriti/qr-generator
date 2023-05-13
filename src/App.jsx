import React, { useState } from 'react';
import "./style.css"
import QRCode from 'qrcode.react';
function App() {
  const [url,setUrl] = useState("")
  const [title,setTitle] = useState("")
 
  
  return (
    <div className="App">
      <h1>QR Generator</h1>
     <input type="text" name="title" placeholder='Enter Title...' onChange={(e) => setTitle(e.target.value)} />
      {!url &&  <input type="text" name="url" placeholder='Enter your URL...' onChange={(e) => setUrl(e.target.value)} />}
      {url &&  <button onClick={() => setUrl("")}>Again</button>}
      
      {url && <a target='_blank' href={url}>Your URL</a>} 
      {title && <p>{title}</p>} 
      {url && <QRCode value={url} />}
    </div>
  );
}

export default App;
