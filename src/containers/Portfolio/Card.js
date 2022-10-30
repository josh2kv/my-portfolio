import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import themeGet from '@styled-system/theme-get';

const Card = ({ selectedProject, project }) => {
  const thumbnail = getImage(project.thumbnail);

  const isSelected = selectedProject === project.id;

  return (
    <Block>
      <ImageWrapper>
        <GatsbyImage
          className="thumbnail"
          image={thumbnail}
          alt={project.mainTitle}
        />
        <div className={`overlay ${isSelected ? '' : 'active'}`}></div>
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
    .overlay {
      background-color: none;
    }
  }

  .overlay {
    z-index: 1;
    grid-area: 1 / 1;
    background-color: transparent;
    transition: ${themeGet('transition.normal')};

    &.active {
      background-color: ${themeGet('colors.overlay')};
    }
  }

  .thumbnail {
    grid-area: 1 / 1;
    box-shadow: 0 6px 26px 6px rgb(0 0 0 / 25%);
  }
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
