import styled from 'styled-components';

export const SearchWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex; /* Para alinear el input y el botón horizontalmente */
  gap: ${({ theme }) => theme.spacing.sm}; /* Espacio entre el input y el botón */
`;

export const SearchInput = styled.input`
  flex: 1; /* El input ocupa el espacio disponible */
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.font.size.md};
  font-family: ${({ theme }) => theme.font.family};
  border: none;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.text}20;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background: ${({ theme }) => theme.colors.text}40;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.sm};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const SearchButton = styled.button`
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