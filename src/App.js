import React from 'react';
import SearchBar from './components/SearchBar.js';
import SearchResults from './components/SearchResults.js';
import Library from './components/Library.js';
import {
  AppWrapper,
  Title,
  SectionTitle,
  ContentWrapper,
} from './components/styles/AppStyles.js';

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