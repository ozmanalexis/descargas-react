import './App.css';
const cors = require('cors');

function App() {
  
  const handleDownloadVideo = async () => {
    fetch(cors('https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/mp4',
      },
    })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute(
        'download',
        `FileName.mp4`,
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  };
  return (
    
    <div className="App">
      <header className="App-header">
      <h1>DESCARGAR VIDEO IPHONE</h1>
        <button id='download' type='button' onClick={handleDownloadVideo}>DESCARGAR</button>

      </header>
    </div>
  );
}

export default App;