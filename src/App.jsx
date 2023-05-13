import React, { useState } from 'react';
import QRCode from 'qrcode.react';
function App() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [url,setUrl] = useState("")
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setPdfUrl(url);
  };
  
  return (
    <div className="App">
      <h1>QR Generator</h1>
       <input type="file" onChange={handleFileChange} />
       <input type="text" name="url" placeholder='Enter your URL...' onChange={(e) => setUrl(e.target.value)} />
      {url && <a href={url}>Your URL</a>} 
      {url && <QRCode value={url} />}
      {pdfUrl && <QRCode value={pdfUrl} />}
      {pdfUrl && <iframe src={pdfUrl} width="50%" height="500px" />}
    </div>
  );
}

export default App;
