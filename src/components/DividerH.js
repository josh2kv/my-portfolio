import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';

const DividerH = () => {
  return <Block></Block>;
};

const Block = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 1px;
  margin: 1rem 0;

  background-color: ${themeGet('colors.borderSub')};
`;
export default DividerH;
