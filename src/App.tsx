import React from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import {
  AppWrapper,
  Title,
  SectionTitle,
  ContentWrapper,
} from './components/styles/AppStyles';

const App = () => (
  <AppWrapper>
    <Title>Biblioteca Musical</Title>
    <ContentWrapper>
      <SearchBar />
      <SectionTitle>Resultados</SectionTitle>
      <SearchResults />
      <SectionTitle>Mi Biblioteca</SectionTitle>
      <Library />
    </ContentWrapper>
  </AppWrapper>
);

export default App;