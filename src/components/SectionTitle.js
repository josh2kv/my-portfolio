import themeGet from '@styled-system/theme-get';
import React from 'react';
import styled from 'styled-components';

const SectionTitle = ({ title }) => {
  return <Block>{title}</Block>;
};

const Block = styled.div`
  text-transform: uppercase;
  color: ${themeGet('colors.primary')};
  font-weight: ${themeGet('fontWeights.light')};
  font-size: ${themeGet('fontSizes.s5')};
`;

export default SectionTitle;
