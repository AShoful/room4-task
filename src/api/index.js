import axios from '../axios';
import { API_KEY } from '../utills/constants';

export default {
  getTopTracks: () =>
    axios.get(`?method=chart.gettoptracks&api_key=${API_KEY}&format=json`),
  getInfoArtist: (artistName) =>
    axios.get(
      `?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`
    ),
  getSearchTracks: (str) =>
    axios.get(
      `?method=track.search&track=${str}&api_key=${API_KEY}&format=json`
    )
};
