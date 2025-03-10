import styled from 'styled-components';

export const DetailWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  text-align: center;
`;

export const DetailTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const DetailText = styled.p`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.gray};
`;