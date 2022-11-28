import './App.css';


function App() {
  
  const handleDownloadVideo = async () => {
    try {
      const proxyurl = "https://shrouded-refuge-96344.herokuapp.com/";
      const url = 'https://www.fincomun.com.mx/videos/VIDEO_NUEVA_NORMALIDAD.mp4';
      //const videoRequest = new Request(url);
      fetch(proxyurl + url)
        .then(() => {
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'video.mp4');
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
