import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family};
`;

export const Title = styled.h1`
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

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => `${theme.spacing.md} 0 ${theme.spacing.sm}`};
  text-align: left;
  width: 100%;
  max-width: 800px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray}40;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;