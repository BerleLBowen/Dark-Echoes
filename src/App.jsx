import { useState } from 'react';
import { episodeList } from './data'; 
import './index.css';

function App() {
  const [episodes] = useState(episodeList);
  
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="container">
      <h1>Dark Echoes</h1>

      <div className="layout">
        <div className="sidebar">
          <h3>Episodes</h3>
          <ul>
            {episodes.map((episode) => (
              <li 
                key={episode.id} 
                onClick={() => setSelectedEpisode(episode)}
                className="episode-link"
              >
                {episode.title}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="details-panel">
          {selectedEpisode ? (
            <div>
              <h2>{selectedEpisode.title}</h2>
              <p><strong>Episode #{selectedEpisode.id}</strong></p>
              <p>{selectedEpisode.description}</p>
            </div>
          ) : (
            <p>Please select an episode from the list to see the details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;