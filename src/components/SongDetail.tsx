import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  DetailWrapper,
  DetailTitle,
  DetailText,
} from './styles/SongDetailStyles'; // Sin .js

// Interfaz para los detalles de la canción/álbum desde iTunes
interface SongDetails {
  collectionName: string;
  artistName: string;
  primaryGenreName: string;
  releaseDate: string;
  artworkUrl100: string;
}

// Tipamos las props del componente
interface SongDetailProps {
  songId: number | string; // Puede ser número o string según iTunes
}

const SongDetail: React.FC<SongDetailProps> = ({ songId }) => {
  const [details, setDetails] = useState<SongDetails | null>(null);

  useEffect(() => {
    axios
      .get<{ results: SongDetails[] }>(`https://itunes.apple.com/lookup?id=${songId}&entity=song`)
      .then((res) => {
        if (res.data.results.length > 0) {
          setDetails(res.data.results[0]); // Tomamos el primer resultado
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
