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
  letter-spacing: ${themeGet('letterSpacings.wide')};
  margin-bottom: 2rem;
`;

export default SectionTitle;
