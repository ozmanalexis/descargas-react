import './App.css';

function App() {
  const handleDownloadVideo = async () => {
    try {
      const url = 'http://localhost:3000/videos/FileName.mp4';
      //const videoRequest = new Request(url);
      fetch(url)
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
          document.body.removeChild(link);
        });
    } catch (error) {
      console.error(error);
    }
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