import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function About() {
  const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    background: transparent radial-gradient(40% 40% at 25% 50%, #d1b9a1 0%, #f3eae0 100%) 0% 0% no-repeat padding-box;
  `;

  return (
    <main className="page">
      <Wrapper>
        <Link to="/">Home</Link>
      </Wrapper>
    </main>
  );
}
