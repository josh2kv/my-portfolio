import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';

const tabs = [
  {
    id: 'home',
    title: 'home',
    path: '/',
  },
  {
    id: 'about-me',
    title: 'about me',
    path: '/about-me',
  },
  {
    id: 'portfolio',
    title: 'portfolio',
    path: 'portfolio',
  },
];

const TabBar = () => {
  return (
    <Block>
      <div className="tabs">
        {tabs.map(tab => (
          <div key={tab.id} className="tab">
            {tab.title}
          </div>
        ))}
      </div>
    </Block>
  );
};

const Block = styled.nav`
  height: 7rem;
  border-bottom: 1px solid ${themeGet('colors.borderSub')};
  padding: 2rem 4rem;

  .tabs {
    display: flex;
    gap: 5rem;

    .tab {
      font-size: ${themeGet('fontSizes.s5')};
      font-weight: ${themeGet('fontWeights.light')};
      text-transform: uppercase;
      letter-spacing: ${themeGet('letterSpacings.wide')};
      padding: 0.2rem 0;
      position: relative;

      &.active {
        /* color: ${themeGet('colors.primary')}; */
        /* border-bottom: 3px solid ${themeGet('colors.primary')}; */

        &::before {
          width: 100%;
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: 3.4rem;
        left: 50%;
        width: 0;
        border-bottom: 3px solid ${themeGet('colors.primary')};
        transform: translateX(-50%);
        transition: width 0.2s ease-in-out;
      }

      &:hover {
        cursor: pointer;
        color: ${themeGet('colors.primary')};

        &::before {
          width: 100%;
        }
      }
    }
  }
`;
export default TabBar;
