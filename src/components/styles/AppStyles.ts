import styled from 'styled-components';


// Interfaz para el tema, basada en el uso en los estilos
interface Theme {
  colors: {
    secondary: string;
    primary: string;
    accent: string;
    text: string;
    gray: string; // Nota: 'gray40' implica un formato especial, lo ajustaremos si es necesario
  };
  spacing: {
    lg: string;
    md: string;
    sm: string;
  };
  font: {
    family: string;
    size: {
      lg: string;
      md: string;
    };
  };
}

// Tipamos las props que recibe cada componente de styled-components
interface StyledProps {
  theme: Theme;
}

export const AppWrapper = styled.div<StyledProps>`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family};
`;

export const Title = styled.h1<StyledProps>`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionTitle = styled.h2<StyledProps>`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => `${theme.spacing.md} 0 ${theme.spacing.sm}`};
  text-align: left;
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid ${({ theme }) => `${theme.colors.gray}40`}; 
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ContentWrapper = styled.div<StyledProps>`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;