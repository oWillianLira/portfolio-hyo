import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  const View = styled.main`
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 50px;
    background: transparent radial-gradient(40% 40% at 25% 50%, #44769e 0%, #3a4d5c 100%) 0% 0% no-repeat padding-box;
  `;

  return (
    <View>
      <div className="container">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </View>
  );
}
