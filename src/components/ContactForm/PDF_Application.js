import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { List } from 'semantic-ui-react';

const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <List bulleted className={'Docs'} style={{ margin: '40px 0 80px' }}>
      {data.allFile.edges.map((file, index) => {
        return (
          <List.Item key={`pdf-${index}`}>
            <List.Content>
              <List.Header as={'a'} download href={file.node.publicURL}>
                {file.node.name}
              </List.Header>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};
export default DownloadsPage;
