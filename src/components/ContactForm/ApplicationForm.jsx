import React from "react";
import { SendApplicationForm } from "./contactFormHelper";
import {
  Button,
  Form,
  Grid,
  Accordion,
  Icon,
  Modal,
  Message,
  Segment,
  Divider
} from "semantic-ui-react";

const initialState = {
  previousJobs: [
    {
      companyName: "",
      companyPosition: "",
      employmentStart: { startMonth: "", startYear: "" },
      employmentEnd: { endMonth: "", endYear: "" },
      companyAddress: "",
      companyCity: "",
      companyState: "",
      companyZipcode: "",
      supervisorsName: "",
      fieldOfWork: "",
      superVisorsPhone: "",
      jobDuties: "",
      companyPhone: "",
      terminationReason: ""
    }
  ],
  activeIndex: 0,
  altPhone: "",
  availableDate: "",
  backgroundCheck: "",
  city: "",
  capableEssentialDuties: "",
  computerSkills: "",
  desiredPay: "",
  email: "",
  error: false,
  errorForCity: false,
  errorForEmail: false,
  errorForFirstName: false,
  errorForLastName: false,
  errorForPhoneNumber: false,
  errorForState: false,
  errorForStreetAddress: false,
  errorForZipCode: false,
  firstName: "",
  knowAnyone: "",
  lastName: "",
  middleName: "",
  minimumPay: "",
  heardAboutUsHow: "",
  modalOpen: false,
  nickName: "",
  phoneNumber: "",
  positionInterestedIn: "",
  canTravel: "",
  sent: false,
  state: "",
  streetAddress: "",
  streetAddress2: "",
  validDriversLicense: "",
  zipCode: "",
  authorized: "",
  authorizedToBeEmployed: "",
  equalOpportunity: "",
  references: [
    {
      referenceName: "",
      referenceRelationship: "",
      referenceCompany: "",
      referenceNumber: ""
    }
  ]
};
class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  handleAccordion = (e, { index }) => {
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };
  addReference = () => {
    this.setState(prevState => ({
      references: [
        ...prevState.references,
        {
          referenceName: "",
          referenceRelationship: "",
          referenceCompany: "",
          referenceNumber: ""
        }
      ]
    }));
  };
  addPrevJob = () => {
    this.setState(prevState => ({
      previousJobs: [
        ...prevState.previousJobs,
        {
          companyName: "",
          companyPosition: "",
          employmentStart: { startMonth: "", startYear: "" },
          employmentEnd: { endMonth: "", endYear: "" },
          companyAddress: "",
          companyCity: "",
          companyState: "",
          companyZipcode: "",
          supervisorsName: "",
          fieldOfWork: "",
          superVisorsPhone: "",
          jobDuties: "",
          companyPhone: "",
          terminationReason: ""
        }
      ]
    }));
  };
  handleReferenceChange = (e, { name, value }) => {
    const id = e.target.id;
    let references = [...this.state.references];
    references[id][name] = value;
    this.setState({ references });
  };
  removeReference = idx => {
    if (this.state.references.length > 1) {
      const newReferences = this.state.references.filter((r, sidx) => idx !== sidx);
      this.setState({ references: newReferences });
    }
  };
  handlePrevJobChange = (e, { name, value }) => {
    if (name.includes("start")) {
      const id = e.target.id;
      let previousJobs = [...this.state.previousJobs];
      previousJobs[id]["employmentStart"][name] = value;
      this.setState({ previousJobs });
    } else if (name.includes("end")) {
      const id = e.target.id;
      let previousJobs = [...this.state.previousJobs];
      previousJobs[id]["employmentEnd"][name] = value;
      this.setState({ previousJobs });
    } else {
      const id = e.target.id;
      let previousJobs = [...this.state.previousJobs];
      previousJobs[id][name] = value;
      this.setState({ previousJobs });
    }
  };
  removePrevJob = idx => {
    if (this.state.previousJobs.length > 1) {
      const previousJobs = this.state.previousJobs.filter((r, sidx) => idx !== sidx);
      this.setState({ previousJobs: previousJobs });
    }
  };

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });
  handleForm = (e, { value }) => this.setState({ value });
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  handleSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      middleName,
      lastName,
      nickName,
      streetAddress,
      streetAddress2,
      city,
      equalOpportunity,
      state,
      zipCode,
      phoneNumber,
      altPhone,
      email,
      validDriversLicense,
      backgroundCheck,
      knowAnyone,
      minimumPay,
      desiredPay,
      capableEssentialDuties,
      computerSkills,
      availableDate,
      references,
      authorized,
      authorizedToBeEmployed,
      previousJobs,
      heardAboutUsHow
    } = this.state;

    const formData = {
      firstName,
      middleName,
      lastName,
      nickName,
      streetAddress,
      streetAddress2,
      heardAboutUsHow,
      city,
      state,
      zipCode,
      phoneNumber,
      altPhone,
      email,
      validDriversLicense,
      backgroundCheck,
      knowAnyone,
      equalOpportunity,
      minimumPay,
      desiredPay,
      computerSkills,
      availableDate,
      authorized,
      capableEssentialDuties,
      authorizedToBeEmployed
    };
    // this.setState({ loading: true });
    // const result = SendApplicationForm(this.state);
    // this.setState({ ...result });

    // if (this.state.error) {
    // this.setState({ loading: false });
    // return;
    // }

    const formattedReferences = JSON.stringify(references);
    const formattedPreviousJobs = JSON.stringify(previousJobs);

    const data = this.encode({
      formattedReferences,
      formattedPreviousJobs,
      "form-name": "application-form",
      ...formData
    });

    fetch("/contact/application", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.string);
        this.setState({ ...initialState });
      })
      .catch(err => this.setState({ ...initialState }));
  };

  render() {
    let {
      loading,
      sent,
      error,
      name = "",
      firstName,
      middleName,
      lastName,
      errorForLastName,
      activeIndex,
      nickName,
      streetAddress,
      errorForStreetAddress,
      streetAddress2,
      city,
      positionInterestedIn,
      errorForCity,
      state,
      errorForState,
      zipCode,
      heardAboutUsHow,
      errorForZipCode,
      phoneNumber,
      errorForPhoneNumber,
      altPhone,
      email,
      errorForEmail,
      validDriversLicense,
      backgroundCheck,
      knowAnyone,
      minimumPay,
      desiredPay,
      computerSkills,
      availableDate,
      modalOpen,
      canTravel,
      errorForFirstName,
      references,
      authorized,
      authorizedToBeEmployed,
      capableEssentialDuties,
      equalOpportunity,
      previousJobs
    } = this.state;
    return (
      <Form
        data-netlify
        error={error}
        loading={loading}
        method={"POST"}
        name={"application-form"}
        onSubmit={this.handleSubmit}
        size="big"
        style={{ width: "80%" }}
        success={sent}>
        <ul>
          <h1>Applicant Information</h1>
          <ul>
            <li>First Name: ${firstName}</li>
            <li>Middle Name: ${middleName}</li>
            <li>Last Name: ${lastName}</li>
            <li>Preffered Name: ${nickName}</li>
            <li>Address: ${streetAddress}</li>
            <li>Address: ${streetAddress2}</li>
            <li>City: ${city}</li>
            <li>State: ${state}</li>
            <li>Zip Code: ${zipCode}</li>
            <li>Phone Number: ${phoneNumber}</li>
            <li>Alternate Phone: ${altPhone}</li>
            <li>Email: ${email}</li>
          </ul>
          <h1>MISC</h1>
          <ul>
            <li>Are you interested in: ${positionInterestedIn}</li>
            <li>Can you travel 6-8 weeks at a time: ${canTravel}</li>
            <li>Do you have a valid driver license: ${validDriversLicense}</li>
            <li>Can you pass a background check: ${backgroundCheck}</li>
            <li>How did you hear about us: ${heardAboutUsHow}</li>
            <li>Do you know anyone who works here: ${knowAnyone}</li>
            <ul>
              <h3>Hourly Desired Pay</h3>
              <li>Minimun: ${minimumPay}</li>
              <li>Desired: ${desiredPay}</li>
            </ul>
            <ul>
              <p>
                <h3>Technological Skills:</h3>${computerSkills}
              </p>
            </ul>
          </ul>
          <h1>Additional Info</h1>
          <ul>
            <li>When are you able to start: ${availableDate}</li>
            <li>Are you authorized to work in the US: ${authorized}</li>
            <li>
              Are you capable of performing the essential functions of the job for which you are
              applying with or without a reasonable accommodation: ${capableEssentialDuties}
            </li>
            <li>
              Federal law requires that employers hire only individuals who are authorized to be
              lawfully employed in the United States. In compliance with these laws, Western
              Technical will verify the status of every individual offered employment with the
              Company. In this connection, all offers of employment are subject to verification of
              the applicant's identity and employment authorization, and it will be necessary for
              you to submit such documents as are required by law to verify your identeifcation and
              employment authorization: ${authorizedToBeEmployed}
            </li>
            <li>
              Western Technical is an equal opportunity employer and does not discriminate agaisnt
              any applicant or employee because of race, color, religion, sex, national origin,
              disability, age, or military or veteran satus in accordance with federal law. In
              addition, Western Technical complies with applicable state and locals laws governing
              non-discrimination in employment in every jurisdiction in which it maintains
              facilities. Western Technical also provides reasonable acoommodation to qualified
              individuals with disabilities in accordance with applicable laws: ${equalOpportunity}
            </li>
          </ul>
          <h1>Previous Work</h1>
          <ul>
            
          </ul>
        </ul>
        <Accordion fluid styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleAccordion}>
            <Icon name={"dropdown"} />
            Name, Location & Contact Info *
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Form.Group widths={"equal"}>
              <input name={"application-form"} type={"hidden"} value={"hidden"} />
              <Form.Input
                error={errorForFirstName}
                fluid
                label={"First Name*"}
                name={"firstName"}
                onChange={this.handleChange}
                placeholder={"John"}
                required
                type={"text"}
                value={firstName}
              />
              <Form.Input
                fluid
                label={"Middle Name"}
                name={"middleName"}
                onChange={this.handleChange}
                placeholder={"Deer"}
                type={"text"}
                value={middleName}
              />
              <Form.Input
                error={errorForLastName}
                fluid
                label={"Last Name"}
                name={"lastName"}
                onChange={this.handleChange}
                placeholder={"Doe"}
                required
                type={"text"}
                value={lastName}
              />
              <Form.Input
                fluid
                label={"Preffered Name"}
                name={"nickName"}
                onChange={this.handleChange}
                placeholder={"John the Doe"}
                type={"text"}
                value={nickName}
              />
            </Form.Group>
            <Form.Group widths={"equal"}>
              <Form.Input
                error={errorForStreetAddress}
                fluid
                label={"Address"}
                name={"streetAddress"}
                onChange={this.handleChange}
                placeholder={"address"}
                required
                type={"text"}
                value={streetAddress}
              />
              <Form.Input
                fluid
                label={"Address 2"}
                name={"streetAddress2"}
                onChange={this.handleChange}
                placeholder={"Apartment, Studio, or Floor"}
                type={"text"}
                value={streetAddress2}
              />
              <Form.Input
                error={errorForCity}
                fluid
                label={"City"}
                name={"city"}
                onChange={this.handleChange}
                placeholder={"City"}
                required
                type={"text"}
                value={city}
              />
              <Form.Input
                error={errorForState}
                fluid
                label={"State"}
                name={"state"}
                onChange={this.handleChange}
                placeholder={"State"}
                required
                type={"text"}
                value={state}
              />
              <Form.Input
                error={errorForZipCode}
                fluid
                label={"Zip Code"}
                name={"zipCode"}
                onChange={this.handleChange}
                placeholder={"Zip Code"}
                required
                type={"text"}
                value={zipCode}
              />
            </Form.Group>
            <Form.Group widths={"equal"}>
              <Form.Input
                error={errorForPhoneNumber}
                fluid
                label={"Phone Number"}
                name={"phoneNumber"}
                onChange={this.handleChange}
                placeholder={"(xxx)-xxx-xxxx"}
                required
                type={"text"}
                value={phoneNumber}
              />
              <Form.Input
                fluid
                label={"Alternate Phone"}
                name={"altPhone"}
                onChange={this.handleChange}
                placeholder={"(xxx)-xxx-xxxx"}
                type={"text"}
                value={altPhone}
              />
              <Form.Input
                error={errorForEmail}
                fluid
                label={"Email"}
                name={"email"}
                onChange={this.handleChange}
                placeholder={"email@mail.com"}
                required
                type={"text"}
                value={email}
              />
            </Form.Group>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleAccordion}>
            <Icon name={"dropdown"} />
            Misc *
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <Form.Group widths={"equal"}>
              <Form.Select
                fluid
                label={"Are you interested in:"}
                name={"positionInterestedIn"}
                onChange={this.handleChange}
                options={[
                  {
                    key: "Modification Technician",
                    text: "Modification Technician",
                    value: "Modification Technician"
                  },
                  {
                    key: "Mapping Technician",
                    text: "Mapping Technician",
                    value: "Mapping Technician"
                  },
                  {
                    key: "Office Administration",
                    text: "Office Administration",
                    value: "Office Administration"
                  }
                ]}
                placeholder={"Are you interested in:"}
                required
                value={positionInterestedIn}
              />
              <Form.Select
                fluid
                label={"Can you travel 6-8 weeks at a time?"}
                name={"canTravel"}
                onChange={this.handleChange}
                options={[
                  { key: "Yes", text: "Yes", value: "Yes" },
                  { key: "No", text: "No", value: "No" }
                ]}
                placeholder={"Can you travel 6-8 weeks at a time?"}
                value={canTravel}
              />
            </Form.Group>
            <Form.Group widths={"equal"}>
              <Form.Select
                fluid
                label={"Do you have a valid driver's license?"}
                name={"validDriversLicense"}
                onChange={this.handleChange}
                options={[
                  { key: "No", text: "No", value: "No" },
                  { key: "Yes", text: "Yes", value: "Yes" }
                ]}
                placeholder={"John Doe"}
                required
                type={"text"}
                value={validDriversLicense}
              />
              <Form.Select
                fluid
                label={"Can you pass a background check?"}
                name={"backgroundCheck"}
                onChange={this.handleChange}
                placeholder={"John Doe"}
                required
                options={[
                  { key: "No", text: "No", value: "No" },
                  { key: "Yes", text: "Yes", value: "Yes" }
                ]}
                type={"text"}
                value={backgroundCheck}
              />
            </Form.Group>
            <Form.Group widths={"equal"}>
              <Form.Select
                fluid
                label={"How did you hear about us?"}
                name={"heardAboutUsHow"}
                options={[
                  { key: "Walk In", text: "Walk In", value: "Walk In" },
                  { key: "Referral", text: "Referral", value: "Referral" },
                  {
                    key: "Hiring Engine",
                    text: "Hiring Engine",
                    value: "Hiring Engine"
                  },
                  { key: "Other", text: "Other", value: "Other" }
                ]}
                onChange={this.handleChange}
                value={heardAboutUsHow}
                placeholder={"How did you hear about us?"}
              />
              <Form.Input
                fluid
                label={"Do you know anyone who works here?"}
                name={"knowAnyone"}
                onChange={this.handleChange}
                placeholder={"John Doe"}
                type={"text"}
                value={knowAnyone}
              />
            </Form.Group>
            <Form.Group widths={"equal"}>
              <label>Hourly Desired Pay</label>
              <Form.Input
                fluid
                label={"Minimun"}
                name={"minimumPay"}
                onChange={this.handleChange}
                placeholder={"John Doe"}
                required
                type={"text"}
                value={minimumPay}
              />
              <Form.Input
                fluid
                label={"Desired"}
                name={"desiredPay"}
                onChange={this.handleChange}
                placeholder={"John Doe"}
                type={"text"}
                value={desiredPay}
              />
            </Form.Group>
            <Form.TextArea
              fluid={"true"}
              label={"Describe your technological/computer skills"}
              name={"computerSkills"}
              onChange={this.handleChange}
              placeholder={"John Doe"}
              type={"text"}
              value={computerSkills}
            />
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleAccordion}>
            <Icon name={"dropdown"} />
            Additional Info *
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <Form.Group widths={"equal"}>
              <Form.Input
                fluid
                label={"When are you able to start?"}
                name={"availableDate"}
                onChange={this.handleChange}
                placeholder={"John Doe"}
                type={"text"}
                required
                value={availableDate}
              />
              <Form.Select
                fluid
                label={"Are you authorized to work in the United States?"}
                name={"authorized"}
                onChange={this.handleChange}
                options={[
                  { key: "Yes", text: "Yes", value: "Yes" },
                  { key: "No", text: "No", value: "No" }
                ]}
                required
                value={authorized}
                type={"text"}
              />
            </Form.Group>
            <Form.Select
              fluid
              label={
                "Are you capable of performing the essential functions of the job for which you are applying with or without a reasonable accommodation?"
              }
              name={"capableEssentialDuties"}
              onChange={this.handleChange}
              options={[
                { key: "Yes", text: "Yes", value: "Yes" },
                { key: "No", text: "No", value: "No" }
              ]}
              required
              value={capableEssentialDuties}
              type={"text"}
            />
            <Form.Checkbox
              fluid={"true"}
              label={
                "Federal law requires that employers hire only individuals who are authorized to be lawfully employed in the United States. In compliance with these laws, Western Technical will verify the status of every individual offered employment with the Company. In this connection, all offers of employment are subject to verification of the applicant's identity and employment authorization, and it will be necessary for you to submit such documents as are required by law to verify your identeifcation and employment authorization."
              }
              name={"authorizedToBeEmployed"}
              value={authorizedToBeEmployed}
              onChange={this.handleChange}
              required
            />
            <br />
            <Form.Checkbox
              fluid={"true"}
              label={
                "Western Technical is an equal opportunity employer and does not discriminate agaisnt any applicant or employee because of race, color, religion, sex, national origin, disability, age, or military or veteran satus in accordance with federal law. In addition, Western Technical complies with applicable state and locals laws governing non-discrimination in employment in every jurisdiction in which it maintains facilities. Western Technical also provides reasonable acoommodation to qualified individuals with disabilities in accordance with applicable laws."
              }
              name={"equalOpportunity"}
              onChange={this.handleChange}
              value={equalOpportunity}
              required
            />
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleAccordion}>
            <Icon name={"dropdown"} />
            Previous Work *
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <label>Please list your work experience below (Most recent job first)</label>
            <br />
            <br />
            <Segment basic style={{ margin: 0, padding: 0 }}>
              <Icon name={"plus"} onClick={this.addPrevJob} style={{ cursor: "pointer" }} /> Add
              another previous job
            </Segment>
            {previousJobs.map((pJ, idx) => {
              return (
                <div key={`previousJobs-${idx}`}>
                  {this.state.previousJobs.length > 1 && (
                    <Segment basic>
                      <Icon
                        name={"minus"}
                        style={{ cursor: "pointer" }}
                        onClick={() => this.removePrevJob(idx)}
                      />
                      Remove this entry
                    </Segment>
                  )}
                  <Form.Group widths={"equal"}>
                    <Form.Input
                      fluid
                      label={"Company Name"}
                      name={"companyName"}
                      onChange={this.handlePrevJobChange}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].companyName}
                    />
                    <Form.Input
                      fluid
                      label={"Position"}
                      name={"companyPosition"}
                      onChange={this.handlePrevJobChange}
                      type={"text"}
                      id={idx}
                      required
                      value={previousJobs[idx].companyPosition}
                    />
                  </Form.Group>
                  <Form.Group inline widths={"equal"}>
                    <label>From</label>
                    <Form.Input
                      fluid
                      onChange={this.handlePrevJobChange}
                      name={"startMonth"}
                      placeholder={"Month"}
                      type={"text"}
                      className={"employmentStart"}
                      id={idx}
                      value={previousJobs[idx].employmentStart.startMonth}
                    />
                    <Form.Input
                      fluid
                      name={"startYear"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"Year"}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].employmentStart.startYear}
                    />
                    <label>To</label>
                    <Form.Input
                      fluid
                      name={"endMonth"}
                      placeholder={"Month"}
                      type={"text"}
                      onChange={this.handlePrevJobChange}
                      required
                      className={"employmentEnd"}
                      id={idx}
                      value={previousJobs[idx].employmentEnd.endMonth}
                    />
                    <Form.Input
                      fluid
                      name={"endYear"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"Year"}
                      type={"text"}
                      required
                      id={idx}
                      className={"employmentEnd"}
                      value={previousJobs[idx].employmentEnd.endYear}
                    />
                  </Form.Group>
                  <Form.Group widths={"equal"}>
                    <Form.Input
                      fluid
                      label={"Address"}
                      name={"companyAddress"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"Address"}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].companyAddress}
                    />
                    <Form.Input
                      fluid
                      label={"City"}
                      name={"companyCity"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"City"}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].companyCity}
                    />
                    <Form.Input
                      fluid
                      label={"State"}
                      name={"companyState"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"State"}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].companyState}
                    />
                    <Form.Input
                      fluid
                      label={"Zip Code"}
                      name={"companyZipcode"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"Zip Code"}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].companyZipcode}
                    />
                  </Form.Group>
                  <Form.Group widths={"equal"}>
                    <Form.Input
                      fluid
                      label={"Supervisors Name"}
                      name={"supervisorsName"}
                      onChange={this.handlePrevJobChange}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].supervisorsName}
                    />
                    <Form.Input
                      fluid
                      label={"Supervisors Phone"}
                      name={"superVisorsPhone"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"(xxx)-xxx-xxxx"}
                      type={"text"}
                      id={idx}
                      required
                      value={previousJobs[idx].superVisorsPhone}
                    />
                    <Form.Input
                      fluid
                      //was type of busniess
                      label={"Field of Work"}
                      name={"fieldOfWork"}
                      onChange={this.handlePrevJobChange}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].fieldOfWork}
                    />
                  </Form.Group>
                  <Form.Group inline widths={"equal"}>
                    <Form.Input
                      fluid
                      label={"Company Phone"}
                      name={"companyPhone"}
                      onChange={this.handlePrevJobChange}
                      placeholder={"(xxx)-xxx-xxxx"}
                      type={"text"}
                      required
                      id={idx}
                      value={previousJobs[idx].companyPhone}
                    />
                    <Form.Input
                      fluid
                      label={"Reason for leaving"}
                      name={"terminationReason"}
                      onChange={this.handlePrevJobChange}
                      type={"text"}
                      id={idx}
                      required
                      value={previousJobs[idx].terminationReason}
                    />
                  </Form.Group>
                  <Form.TextArea
                    fluid={"true"}
                    label={"Job Duties"}
                    name={"jobDuties"}
                    onChange={this.handlePrevJobChange}
                    placeholder={"Year"}
                    type={"text"}
                    required
                    id={idx}
                    value={previousJobs[idx].jobDuties}
                  />
                  {this.state.previousJobs.length > 1 && <Divider />}
                </div>
              );
            })}
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleAccordion}>
            <Icon name={"dropdown"} />
            Education
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <Grid.Row>
              <label>High School Or Prep</label>
              <Form.Group widths={"equal"}>
                <Form.Input
                  fluid
                  label={"High School Name"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Address"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
              </Form.Group>
              <Form.Group widths={"equal"}>
                <Form.Input
                  fluid
                  label={"Did you graduate?"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Major Subject"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Type of degree or diploma"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
              </Form.Group>
            </Grid.Row>
            <Grid.Row>
              <label>College</label>
              <Form.Group widths={"equal"}>
                <Form.Input
                  fluid
                  label={"College Name"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Address"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
              </Form.Group>
              <Form.Group widths={"equal"}>
                <Form.Input
                  fluid
                  label={"Did you graduate?"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Major Subject"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Type of degree or diploma"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
              </Form.Group>
            </Grid.Row>
            <Grid.Row>
              <label>Other</label>
              <Form.Group widths={"equal"}>
                <Form.Input
                  fluid
                  label={"College Name"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Address"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
              </Form.Group>
              <Form.Group widths={"equal"}>
                <Form.Input
                  fluid
                  label={"Did you graduate?"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Major Subject"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
                <Form.Input
                  fluid
                  label={"Type of degree or diploma"}
                  name={"name"}
                  onChange={this.handleChange}
                  placeholder={"Year"}
                  type={"text"}
                  value={name}
                />
              </Form.Group>
            </Grid.Row>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleAccordion}>
            <Icon name={"dropdown"} />
            References *
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <Grid.Row textAlign={"center"} centered>
              <Segment basic style={{ margin: 0, padding: 0 }}>
                <Icon name={"plus"} onClick={this.addReference} style={{ cursor: "pointer" }} /> Add
                a reference
              </Segment>
              <br />
              {references.map((r, idx) => {
                return (
                  <Form.Group widths={"equal"} key={`[${idx}].reference`}>
                    <Form.Input
                      fluid
                      label={"Name"}
                      name={`referenceName`}
                      onChange={this.handleReferenceChange}
                      placeholder={"Year"}
                      id={idx}
                      type={"text"}
                      required
                      value={references[idx].referenceName}
                    />
                    <Form.Input
                      fluid
                      label={"Relationship"}
                      name={`referenceRelationship`}
                      onChange={this.handleReferenceChange}
                      placeholder={"Year"}
                      type={"text"}
                      required
                      id={idx}
                      value={references[idx].referenceRelationship}
                    />
                    <Form.Input
                      fluid
                      label={"Company"}
                      name={"referenceCompany"}
                      onChange={this.handleReferenceChange}
                      placeholder={"Year"}
                      type={"text"}
                      id={idx}
                      required
                      value={references[idx].referenceCompany}
                    />
                    <Form.Input
                      fluid
                      label={"Phone"}
                      name={"referenceNumber"}
                      onChange={this.handleReferenceChange}
                      placeholder={"Year"}
                      type={"text"}
                      id={idx}
                      required
                      value={references[idx].referenceNumber}
                    />
                    {this.state.references.length > 1 && (
                      <Icon
                        name={"minus"}
                        style={{ cursor: "pointer" }}
                        onClick={() => this.removeReference(idx)}
                      />
                    )}
                  </Form.Group>
                );
              })}
            </Grid.Row>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleAccordion}>
            <Icon name={"dropdown"} />
            Acknowledgement *
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <Grid.Row>
              <Form.Checkbox label={"I agree"} />
            </Grid.Row>
          </Accordion.Content>
          <Grid.Row>
            <Modal
              onClose={this.handleClose}
              open={modalOpen}
              trigger={
                <Button onClick={this.handleOpen} style={{ margin: 20 }}>
                  Read acknowledgement
                </Button>
              }>
              <Modal.Header>Please read carefully before siging.</Modal.Header>
              <Modal.Content>
                <Modal.Description>Stuff</Modal.Description>
              </Modal.Content>
              <Modal.Actions />
            </Modal>
            <Button onClick={this.handleSubmit} type={"submit"}>
              Submit application
            </Button>
          </Grid.Row>
        </Accordion>
        <Message
          content={"You are missing required fields."}
          error
          header={"Please look at the form"}
        />
      </Form>
    );
  }
}
export default ApplicationForm;
