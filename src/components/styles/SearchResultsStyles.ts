import styled from 'styled-components';
import { Theme } from './theme'; // Importamos la interfaz Theme

// Tipamos las props que recibe cada componente
interface ThemeProps {
  theme: Theme;
}

export const ResultsWrapper = styled.div<ThemeProps>`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.secondary};
  min-height: 200px;
`;

export const ResultCard = styled.div<ThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => `rgba(${theme.colors.text}, 0.1)`}; // Corrección para opacidad
  border-radius: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => `rgba(${theme.colors.text}, 0.2)`}; // Corrección para opacidad
  }
`;

export const SongInfo = styled.div<ThemeProps>`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
`;

export const SongTitle = styled.h3<ThemeProps>`
  font-size: ${({ theme }) => theme.font.size.md};
  margin: 0;
`;

export const SongDetails = styled.p<ThemeProps>`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin: 4px 0 0;
`;

export const AddButton = styled.button<ThemeProps>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const ErrorWrapper = styled.div<ThemeProps>`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => `rgba(${theme.colors.error}, 0.2)`}; // Corrección para opacidad
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: ${({ theme }) => theme.font.family};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const RetryButton = styled.button<ThemeProps>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.sm};
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;