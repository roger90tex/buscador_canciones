// Interfaz para el tema
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    accent: string;
    gray: string;
    error: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
  font: {
    family: string;
    size: {
      sm: string;
      md: string;
      lg: string;
    };
  };
}

// Objeto theme tipado
export const theme: Theme = {
  colors: {
    primary: '#1DB954', // Verde Spotify
    secondary: '#191414', // Negro oscuro
    text: '#FFFFFF', // Blanco
    accent: '#FF4081', // Rosa
    gray: '#B3B3B3', // Gris
    error: '#FF5252', // Rojo
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  font: {
    family: "'Poppins', sans-serif",
    size: {
      sm: '14px',
      md: '16px',
      lg: '20px',
    },
  },
};