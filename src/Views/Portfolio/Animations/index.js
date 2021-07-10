import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../GlobalStyles';
import MenuCircles from '../../Components/MenuCircles';

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
        </div>
      </View>
    </main>
  );
}
