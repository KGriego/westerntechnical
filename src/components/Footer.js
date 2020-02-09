import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment
} from "semantic-ui-react";

const Footer = () => (
  <Segment
    className={"footer"}
    inverted
    style={{ backgroundColor: "#3f3f3f", color: "#d5d5d5", marginTop: "0" }}
    vertical
  >
    <Container textAlign={"center"}>
      <Grid
        columns={2}
        divided
        inverted
        stackable
        style={{ marginTop: "1.3em" }}
      >
        <Grid.Row>
          <Grid.Column>
            <Header as={"h1"} content={"Social Media"} inverted />
            <Divider clearing section />
            <List className={"footerLinks"} link>
              <List.Item
                as={"a"}
                href={"https://www.instagram.com/steelteamapparel/"}
                target={"_blank"}
              >
                Instagram:{" "}
                <strong style={{ color: "#4183c4" }}>@steelteamapparel</strong>{" "}
                <Icon.Group size={"big"}>
                  <Icon color={"blue"} name={"instagram"} />
                  <Icon corner name={"add"} />
                </Icon.Group>
              </List.Item>
              <List.Item
                as={"a"}
                href={"https://www.facebook.com/WesternTechnical/"}
                target={"_blank"}
              >
                Facebook:{" "}
                <strong style={{ color: "#4183c4" }}>@WesternTechnical</strong>{" "}
                <Icon.Group size={"big"}>
                  <Icon color={"blue"} name={"facebook"} />
                  <Icon corner name={"add"} />
                </Icon.Group>
              </List.Item>
              <List.Item
                as={"a"}
                href={"https://www.twitter.com"}
                target={"_blank"}
              >
                Twitter:{" "}
                <Icon.Group size={"big"}>
                  <Icon color={"blue"} name={"twitter"} />
                  <Icon corner name={"add"} />
                </Icon.Group>
              </List.Item>
              <List.Item
                as={"a"}
                href={"https://www.linkedin.com"}
                target={"_blank"}
              >
                LinkedIn:{" "}
                <Icon.Group size={"big"}>
                  <Icon color={"blue"} name={"linkedin"} />
                  <Icon corner name={"add"} />
                </Icon.Group>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as={"h1"} content={"Contact Us"} inverted />
            <Divider clearing section />
            <List className={"footerLinks navLinks"} inverted>
              <List.Item>(928)-501-9994</List.Item>
              <List.Item>
                PO Box 1062 <br /> Wittmann, AZ 85361
              </List.Item>
            </List>
            <Header as={"h3"} content={"Our Hours"} inverted />
            <List className={"footerLinks navLinks"} inverted>
              <List.Item>Monday-Friday: 8am- 4pm</List.Item>
              <List.Item>Saturday: As Needed</List.Item>
              <List.Item>Sunday: Closed</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider inverted section />
      <List className={"footerLinks infoLinks"} horizontal link size={"medium"}>
        <List.Item>
          Copyright &#169; 2019 Western Technical LLC. All rights reserved.
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
