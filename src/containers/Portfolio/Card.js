import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import themeGet from '@styled-system/theme-get';

const Card = ({ selectedProject, project }) => {
  const thumbnail = getImage(project.thumbnail);

  const isSelected = selectedProject === project.id;

  return (
    <Block>
      <ImageWrapper isSelected={isSelected}>
        <GatsbyImage
          className="thumbnail"
          image={thumbnail}
          alt={project.mainTitle}
        />
        <div className="overlay"></div>
      </ImageWrapper>
      <div className="sub-title">{project.subTitle}</div>
      <div className={`main-title ${isSelected ? 'active' : ''}`}>
        {project.mainTitle}
      </div>
    </Block>
  );
};

const ImageWrapper = styled.div`
  display: grid;

  &:hover {
    filter: brightness(1.2);
  }

  .overlay {
    z-index: 1;
    grid-area: 1 / 1;
    background-color: ${themeGet('colors.overlay')};
    transition: ${themeGet('transition.normal')};
  }

  .thumbnail {
    grid-area: 1 / 1;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &:hover {
        filter: brightness(1);
      }

      .overlay {
        background-color: transparent;
      }
    `}
`;

const Block = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 20rem;
  /* background-color: #fff;
  color: ${themeGet('colors.textInv')}; */

  .sub-title {
    margin-top: 0.6rem;
    color: ${themeGet('colors.textSub')};
    font-weight: ${themeGet('fontWeights.light')};
    font-size: ${themeGet('fontSizes.s3')};
  }

  .main-title {
    font-size: ${themeGet('fontSizes.s5')};
    color: ${themeGet('colors.textDisabled')};

    &.active {
      color: ${themeGet('colors.primary')};
    }
  }
`;

export default Card;
