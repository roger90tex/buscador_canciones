import styled from 'styled-components';
import { Theme } from './theme'; // Importamos la interfaz Theme

// Tipamos las props que recibe cada componente
interface ThemeProps {
  theme: Theme;
}

export const DetailWrapper = styled.div<ThemeProps>`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  text-align: center;
`;

export const DetailTitle = styled.h2<ThemeProps>`
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const DetailText = styled.p<ThemeProps>`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.gray};
`;