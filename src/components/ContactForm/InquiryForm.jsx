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
        size="big"
        method={"POST"}
        onSubmit={this.handleSubmit}
        success={sent}
        error={error}
        name={"contact-form"}
        data-netlify={true}
      >
        <input type="hidden" name="contact-form" value="hidden" />
        <Form.Group widths={'equal'}>
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
        </Form.Group>
        <Form.Input
          label="Phone Number"
          type="text"
          placeholder="xxx-xxx-xxxx"
          name="phoneNumber"
          value={phoneNumber}
          fluid
          onChange={this.handleChange}
        />
        <Form.TextArea
          label="Comments"
          placeholder="Any questions or concerns, type them here"
          name="comments"
          value={comments}
          fluid={"true"}
          required
          onChange={this.handleChange}
        />
        <div style={{ textAlign: "center" }}>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}
