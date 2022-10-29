import React from 'react';
import styled from 'styled-components';
import themeGet from '@styled-system/theme-get';
import { BsDownload } from 'react-icons/bs';

const Download = () => {
  return (
    <Block>
      <span>이력서</span>
      <BsDownload />
    </Block>
  );
};

const Block = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  max-width: 20rem;
  width: 100%;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${themeGet('colors.primary')};
    border-color: ${themeGet('colors.primary')};
  }
`;

export default Download;
