import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundSlider from 'gatsby-image-background-slider';

const HeaderImage = () => (
  <header className={'masthead'}>
    <div className={'h-100'}>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className={'h-100'}
      >
        <h1
          style={{
            flex: '0 0 85vw',
            color: 'black',
            fontSize: '2rem',
            fontFamily: 'Lato,Helvetica Neue,Arial,Helvetica,sans-serif',
          }}
        >
          Western Technical is a telecommunications company that specializes in
          cellular towers. We proudly offer the following services and deliver
          in depth reports in a professional and timely manner.
        </h1>
        <div>
          <BackgroundSlider
            query={useStaticQuery(query)}
            initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
            transition={4} // transition duration between images
            duration={8} // how long an image is shown// pass down standard element props
            style={{}}
          ></BackgroundSlider>
        </div>
      </div>
    </div>
  </header>
);

export default HeaderImage;

const query = graphql`
  query {
    backgrounds: allFile(
      filter: { sourceInstanceName: { eq: "backgrounds" } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
