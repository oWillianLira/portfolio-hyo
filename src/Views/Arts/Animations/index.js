import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../GlobalStyles';
import MenuCircles from '../../Components/MenuCircles';

import cartaz1 from '../../../Arts/static/cartaz1.jpg';
import mockup1 from '../../../Arts/static/cartaz1-mockup.png';
import cartaz2 from '../../../Arts/static/cartaz2.jpg';
import mockup2 from '../../../Arts/static/cartaz2-mockup.png';
import cartaz3 from '../../../Arts/static/cartaz3.jpg';
import mockup3 from '../../../Arts/static/cartaz3-mockup.png';
import cartaz4 from '../../../Arts/static/cartaz4.jpg';
import mockup4 from '../../../Arts/static/cartaz4-mockup.png';
import cartaz5 from '../../../Arts/static/cartaz5.jpg';
import mockup5 from '../../../Arts/static/cartaz5-mockup.png';
import cartaz6 from '../../../Arts/static/cartaz6.jpg';
import mockup6 from '../../../Arts/static/cartaz6-mockup.png';

export default function Animations() {
  const View = styled.section`
    background: transparent radial-gradient(40% 40% at 25% 50%, #d1b9a1 0%, #f3eae0 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 100vh;
    padding: 25px 0 5px;
    display: flex;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      .row.expanded {
        flex: 1;
      }
    }
    @media screen and (max-width: 767px) {
      .text-center:last-of-type {
        margin-bottom: 25px;
      }
    }
    @media screen and (max-width: 400px) {
      padding-top: 25px;
    }
  `;

  return (
    <main className="page">
      <View>
        <div className="container">
          <MenuCircles
            four={colors.blue1}
            three={colors.brown2}
            text={colors.blue2}
            hover={colors.blue1}
            bg={colors.brown2}
            links={colors.brown1}
          />
          <br />
          <img
            src="https://images.unsplash.com/photo-1625851439411-749ce911fbb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            Style="width: 350px;"
            alt=""
          />
          <img src={cartaz1} Style="width: 350px" alt="" />
          <img src={mockup1} Style="width: 350px" alt="" />
          <img src={cartaz2} Style="width: 350px" alt="" />
          <img src={mockup2} Style="width: 350px" alt="" />
          <img src={cartaz3} Style="width: 350px" alt="" />
          <img src={mockup3} Style="width: 350px" alt="" />
          <img src={cartaz4} Style="width: 350px" alt="" />
          <img src={mockup4} Style="width: 350px" alt="" />
          <img src={cartaz5} Style="width: 350px" alt="" />
          <img src={mockup5} Style="width: 350px" alt="" />
          <img src={cartaz6} Style="width: 350px" alt="" />
          <img src={mockup6} Style="width: 350px" alt="" />
        </div>
      </View>
    </main>
  );
}
