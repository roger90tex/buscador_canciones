import styled from 'styled-components';

export const LibraryWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.secondary};
`;

export const LibraryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.text}10;
  border-radius: 8px;
`;

export const SongInfo = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
`;

export const SongTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.md};
  margin: 0;
`;

export const SongDetails = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin: 4px 0 0;
`;

export const RemoveButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.error};
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