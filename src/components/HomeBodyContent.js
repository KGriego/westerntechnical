import React from "react";
import { Grid, Divider, Item, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class HomeBodyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inspections: [
        "Mount Mapping",
        "Tower Mapping",
        "Plumb and Tension",
        "Tower Inspection Audit",
        "Pre Modification Mapping",
        "Post Modification Inspection",
        "Bolt Inspections",
        "Rooftop Mapping",
        "Water Tank Mapping"
      ],
      modifications: [
        "Welding",
        "Steel Fabrication",
        "Guy Wire Install",
        "Plumb and Tension",
        "Anchor Rod Install",
        "Concrete Foundations",
        "Steel Structural Reinforcements"
      ]
    };
  }
  render() {
    const { inspections, modifications } = this.state;
    return (
      <div className={"homeBodyContent"} id={"Services"} style={{ marginTop: 25 }}>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={"14"}>
              <h1 style={{ textAlign: "center" }}>
                Here are some of the Services we offer!
              </h1>
              <Divider clearing section />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={"5"} mobile={"14"} style={{ marginBottom: 30 }} tablet={"14"}>
              <Item>
                <Item.Content>
                  <Item.Header as={"h3"}>Mappings and Inspections</Item.Header>
                  <Item.Description>
                    We offer an array of inspections including the following:
                    <br />
                    <List bulleted relaxed>
                      {inspections.map((item, i) => {
                        return (
                          <List.Item key={`${item}-${i}`}>
                            <List.Content>
                              <List.Header>{item}</List.Header>
                            </List.Content>
                          </List.Item>
                        );
                      })}
                    </List>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Grid.Column>
            <Grid.Column computer={"5"} mobile={"14"} style={{ marginBottom: 30 }} tablet={"14"}>
              <Item>
                <Item.Content>
                  <Item.Header as={"h3"}>Modifications</Item.Header>
                  <Item.Description>
                    We perform all steel structural reinforcements on all tower types including
                    steel fabrication, welding, foundation reinforcements.
                    <br />
                    <List bulleted relaxed centered={'true'}>
                      {modifications.map((item, i) => {
                        return (
                          <List.Item key={`${item}-${i}`}>
                            <List.Content>
                              <List.Header>{item}</List.Header>
                            </List.Content>
                          </List.Item>
                        );
                      })}
                    </List>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Grid.Column>
            <Grid.Column computer={"4"} mobile={"14"} tablet={"14"}>
              <Item>
                <Item.Content>
                  <Item.Header as={"h3"}>Maintenance</Item.Header>
                  <Item.Description>
                    Site maintenance including compound, tower, and lighting maintenance.
                  </Item.Description>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HomeBodyContent;
