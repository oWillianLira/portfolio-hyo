import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Contact() {
  const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    background: transparent radial-gradient(40% 40% at 25% 50%, #d69050 0%, #ac703a 100%) 0% 0% no-repeat padding-box;
  `;

  return (
    <Wrapper>
      <Link to="/">Home</Link>
    </Wrapper>
  );
}
