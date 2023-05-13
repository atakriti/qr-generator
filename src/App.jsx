import React, { useState } from 'react';
import "./style.css"
import QRCode from 'qrcode.react';
function App() {
  const [url,setUrl] = useState("")
 
  
  return (
    <div className="App">
      <h1>QR Generator</h1>
      {!url &&  <input type="text" name="url" placeholder='Enter your URL...' onChange={(e) => setUrl(e.target.value)} />}
      {url &&  <button onClick={() => setUrl("")}>Again</button>}
      
      {url && <a href={url}>Your URL</a>} 
      {url && <QRCode value={url} />}
    </div>
  );
}

export default App;
