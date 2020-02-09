import React from 'react';
import { Grid, Divider, Item, Header } from 'semantic-ui-react';

export default function AboutUs() {
  return (
    <div className={'AboutUsContent'} id={'AboutUs'}>
      <Grid centered>
        <Grid.Row>
          <Grid.Column mobile={'14'}>
            <Divider horizontal>
              <Header
                style={{ fontSize: '2.25em', fontWeight: 400 }}
                textAlign={'center'}
              >
                About Us
              </Header>
            </Divider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered textAlign={'center'}>
          <Grid.Column mobile={'14'} textAlign={'center'}>
            <Grid.Row centered textAlign={'center'}>
              <Grid.Column computer={'5'} mobile={'14'} tablet={'14'}>
                <Item>
                  <Item.Content>
                    <Item.Description>
                      Jason Codding founded Western Technical in 2012. He
                      started in the industry in 1999 completing civil
                      construction and full site builds. Jason has managed
                      projects erecting towers from the ground up. He
                      specializes in cellular tower mappings, inspections and
                      modifications. Jason has 20 years of climbing experience.
                      <br />
                      <br />
                      JuAnne Codding helped found Western Technical in 2012.
                      Before joining the industry, she obtained 8 years of
                      banking experience at USAA. JuAnne maintains office duties
                      including accounting and human resources. She also
                      overseas all operations for tower mappings, inspections
                      and modifications. JuAnne has 5 years of climbing
                      experience.
                      <br />
                      <br />
                      Western Technical was established with the climber in
                      mind. Believing in safety first, 100% tie-off, 24/7,
                      ALWAYS. We maintain an in-house trainer that properly
                      trains our crews and ensures the best safety equipment is
                      available to our climbers.
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
