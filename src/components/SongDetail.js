import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  DetailWrapper,
  DetailTitle,
  DetailText,
} from './styles/SongDetailStyles.js';

const SongDetail = ({ songId }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://itunes.apple.com/lookup?id=${songId}&entity=song`)
      .then((res) => {
        if (res.data.results.length > 0) {
          setDetails(res.data.results[0]); // Tomamos el primer resultado que tiene los detalles del álbum
        }
      })
      .catch((error) => console.error('Error obteniendo detalles:', error));
  }, [songId]);

  if (!details) return <p>Cargando detalles...</p>;

  return (
    <DetailWrapper>
      <DetailTitle>{details.collectionName}</DetailTitle>
      <DetailText>Artista: {details.artistName}</DetailText>
      <DetailText>Género: {details.primaryGenreName}</DetailText>
      <DetailText>Lanzamiento: {details.releaseDate.split('T')[0]}</DetailText>
      <img src={details.artworkUrl100} alt={details.collectionName} />
    </DetailWrapper>
  );
};

export default SongDetail;
