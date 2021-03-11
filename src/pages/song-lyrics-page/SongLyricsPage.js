import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as API from '../../services/search-service';

const SongLyricsPage = () => {
  const [song, setSong] = useState({});
  const history = useHistory();

  const loadSongLyrics = async (selectedSong) => {
    const params = { song_id: selectedSong.id };
    const response = await API.getSongLyrics(params);

    setSong(response?.data?.song);
    console.log(song.lyrics)
  };

  useEffect(() => {
    const selectedSong = history.location.state.song;

    loadSongLyrics(selectedSong);
  }, [history]);

  return <pre>{song.lyrics}</pre>;
};

export default SongLyricsPage;