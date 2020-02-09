import React, { Component } from "react";
import { Grid, Header, Item, List, Divider } from "semantic-ui-react";
import InquiryForm from "./InquiryForm";
// import ApplicationForm from "./ApplicationForm";
import PDF from "./PDF_Application";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "contact" };
  }
  handleForm = (e, { value }) => this.setState({ value });
  changeForm = () =>
    this.setState({ value: this.state.value === "contact" ? "application" : "contact" });
  render() {
    const { email, name, phoneNumber, comments, sent, error, loading, value } = this.state;
    return (
      <div className={"ContactPage"} style={{ backgroundColor: "#F7F7F7" }}>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={"14"}>
              <Divider horizontal>
                <Header style={{ fontSize: "2.25em", fontWeight: 400 }} textAlign={"center"}>
                  Contact Info
                </Header>
              </Divider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={"12"} tablet={"12"}>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Description>
                      Let us know what we can help you with. Contact us and we will respond within
                      24-48 business hours.
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column className={"someMarginBottom"} computer={"6"} mobile={"10"} tablet={"5"}>
              <Header as={"h3"}>Contact Us</Header>
              <List>
                <List.Item>
                  <List.Header>Email</List.Header>
                  juanne.codding@westerntechnical.org
                </List.Item>
                <List.Item>
                  <List.Header>Phone</List.Header>
                  (928)-501-9994
                </List.Item>
                <List.Item>
                  <List.Header>Fax</List.Header>
                  (928)-543-2375
                </List.Item>
                <List.Item>
                  <List.Header>Address</List.Header>
                  PO Box 1062, Wittmann, AZ 85361
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column computer={"6"} mobile={"10"} tablet={"5"}>
              <Header as={"h2"}>Hours</Header>
              <List bulleted>
                <List.Item>
                  <List.Content>
                    <List.Description>Monday-Friday: 8AM - 4PM</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Description>Saturday: As Needed</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Description>Sunday: Closed</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Item>
              <Item.Content>
                <Item.Description>
                  <label>
                    {this.state.value === "contact" ? "Contact us or" : "Apply today or"}{" "}
                    {false ? (
                      <a
                        onClick={false ? this.changeForm : null}
                        href={"#"}
                        style={{ textDecoration: false ? "underline" : "inherit" }}>
                        {this.state.value === "contact" ? "apply today!" : "contact us today!"}
                      </a>
                    ) : (
                        "apply today"
                      )}
                  </label>
                  <br />
                  Fields marked with an * are required
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Row>
          <Grid.Row>
            {/*  {value === "contact" ? ( */}
            <InquiryForm
              comments={comments}
              email={email}
              error={error}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              loading={loading}
              name={name}
              phoneNumber={phoneNumber}
              sent={sent}
            />
            {/*  ) : ( <ApplicationForm />
             )} */}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={"12"} mobile={"14"}>
              <Divider horizontal>
                <Header style={{ fontSize: "1.3em", fontWeight: 600 }} textAlign={"center"}>
                  Would you like to apply? Download our application and email it to us!
                </Header>
              </Divider>
              <PDF />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default ContactForm;
