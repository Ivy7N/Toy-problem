import QRCode from 'qrcode'
import { useState } from 'react';

function App() {
  const [url, setUrl] =useState('')
  const [qrcode, setQRCode] =useState('')


  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: "#D1E0FF",
        light: "#000000ff"
      }
    }, (err, url) => {
      if(err) return console.error(err)

      console.log(url)
      setQRCode(url)
    })
  }
  return(
    <div className='App'>
        <h1>QR-Code Generator</h1>
        <input
        type="text"
        placeholder="Enter data"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}/>
        <button onClick={GenerateQRCode}>Generate</button>
        {qrcode && <>
          <img src= {qrcode || "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="}/>
        </>}
      </div>
  );
}
export default App;