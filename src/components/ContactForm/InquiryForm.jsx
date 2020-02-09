import React from "react";
import { Button, Form, Message, Grid } from "semantic-ui-react";

export default class InquiryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      comments: "",
      error: false,
      sent: false
    };
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phoneNumber, comments } = this.state;

    this.setState({ loading: true });

    if (this.state.error) {
      this.setState({ loading: false });
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "contact-form",
        name,
        email,
        phoneNumber,
        comments
      })
    })
      .then(res => {
        if (res.status === 200 || res.status === 202) {
          this.setState({
            error: false,
            sent: true,
            loading: false,
            name: "",
            phoneNumber: "",
            email: "",
            comments: ""
          });
        }
      })
      .catch(err => {
        this.setState({
          error: true,
          sent: false,
          loading: false,
          name: "",
          phoneNumber: "",
          email: "",
          comments: ""
        });
      });
  };
  render() {
    const {
      loading,
      sent,
      error,
      email,
      phoneNumber,
      comments,
      name
    } = this.state;
    return (
      <Form
        loading={loading}
        style={{ width: "80%" }}
        size="big"
        method={"POST"}
        onSubmit={this.handleSubmit}
        success={sent}
        error={error}
        name={"contact-form"}
        data-netlify={true}
      >
        <Grid.Row computer="14">
          <input type="hidden" name="contact-form" value="hidden" />
          <Grid.Row computer="14">
            <Form.Input
              label="Name"
              placeholder="John Doe"
              type="text"
              name="name"
              value={name}
              fluid
              required
              onChange={this.handleChange}
            />
          </Grid.Row>

          <Grid.Row computer="14">
            <Form.Input
              label="Email"
              type="email"
              placeholder="JohnDoe@example.com"
              name="email"
              value={email}
              fluid
              required
              onChange={this.handleChange}
            />
          </Grid.Row>
          <Grid.Row computer="14">
            <Form.Input
              label="Phone Number"
              type="text"
              placeholder="xxx-xxx-xxxx"
              name="phoneNumber"
              value={phoneNumber}
              fluid
              onChange={this.handleChange}
            />
          </Grid.Row>
          <Grid.Row computer="14">
            <Form.TextArea
              label="Comments"
              placeholder="Any questions or concerns, type them here"
              name="comments"
              value={comments}
              fluid={"true"}
              required
              onChange={this.handleChange}
            />
          </Grid.Row>
          <Message
            error
            header="Please Check The Form"
            content="Please make sure the required fields are filled"
          />
          <Message
            success
            header="Email Sent"
            content="I will get back to you as soon as possible"
          />
          <Button style={{ margin: 20 }} type="submit">
            Submit
          </Button>
        </Grid.Row>
      </Form>
    );
  }
}
