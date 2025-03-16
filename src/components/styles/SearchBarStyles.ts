import styled from 'styled-components';
import { Theme } from './theme'; // Importamos la interfaz Theme

// Tipamos las props base (solo theme)
interface ThemeProps {
  theme: Theme;
}

// Tipamos las props de SearchButton (theme + disabled)
interface ButtonProps extends ThemeProps {
  disabled?: boolean;
}

export const SearchWrapper = styled.div<ThemeProps>`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SearchInput = styled.input<ThemeProps>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.font.size.md};
  font-family: ${({ theme }) => theme.font.family};
  border: none;
  border-radius: 25px;
  background: ${({ theme }) => `rgba(${theme.colors.text}, 0.2)`}; // Corrección para opacidad
  color: #191414;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background: ${({ theme }) => `rgba(${theme.colors.text}, 0.4)`}; // Corrección para opacidad
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const LoadingText = styled.p<ThemeProps>`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.sm};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const SearchButton = styled.button<ButtonProps>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.font.size.md};
  font-family: ${({ theme }) => theme.font.family};
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 20px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;