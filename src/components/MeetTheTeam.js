import React from "react";
import { Grid, Divider, Item, Card } from "semantic-ui-react";
// import "../../CSS/MeetTheTeamContent.css";

export default function MeetTheTeam() {
  return (
    <div className={"MeetTheTeamContent"}>
      <Grid>
        <Grid.Row centered textAlign={"center"}>
          <Grid.Column mobile={"14"} textAlign={"center"}>
            <Item>
              <Item.Content>
                <Item.Header as={"h1"}>Meet The Team</Item.Header>
              </Item.Content>
            </Item>
            <Divider clearing section />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered textAlign={"center"}>
          <Grid.Column
            computer={"6"}
            mobile={"14"}
            style={{ marginBottom: 30 }}
            tablet={"14"}
          >
            <Card fluid>
              <Card.Content>
                <Card.Header>Jason Codding</Card.Header>
              </Card.Content>
              <Card.Content>
                <Card.Description>Chief Executive Officer</Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  <strong>Contact Info:</strong>
                  <br />
                  <br />
                  (623)523-2809
                  <br />
                  <br />
                  jason.codding@westerntechnical.org
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column computer={"6"} mobile={"14"} tablet={"14"}>
            <Card fluid style={{ marginBottom: 15 }}>
              <Card.Content>
                <Card.Header>JuAnne Codding</Card.Header>
              </Card.Content>
              <Card.Content>
                <Card.Description>Chief Financial Officer</Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  <strong>Contact Info:</strong>
                  <br />
                  <br />
                  (623)640-1970
                  <br />
                  <br />
                  juanne.codding@westerntechnical.org
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
