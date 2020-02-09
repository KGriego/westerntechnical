export const SendApplicationForm = formState => {
  const {
    previousJobs,
    altPhone,
    availableDate,
    backgroundCheck,
    city,
    capableEssentialDuties,
    computerSkills,
    desiredPay,
    email,
    firstName,
    knowAnyone,
    lastName,
    middleName,
    minimumPay,
    modalOpen,
    nickName,
    phoneNumber,
    positionInterestedIn,
    canTravel,
    sent,
    state,
    streetAddress,
    streetAddress2,
    validDriversLicense,
    zipCode,
    authorized,
    authorizedToBeEmployed,
    equalOpportunity,
    references
  } = formState;

  if (!firstName) {
    formState.errorForFirstName = true;
  } else if (firstName) {
    formState.errorForFirstName = false;
  }
  if (!lastName) {
    formState.errorForLastName = true;
  } else if (lastName) {
    formState.errorForLastName = false;
  }
  if (!streetAddress) {
    formState.errorForStreetAddress = true;
  } else if (streetAddress) {
    formState.errorForStreetAddress = false;
  }
  if (!city) {
    formState.errorForCity = true;
  } else if (city) {
    formState.errorForCity = false;
  }
  if (!state) {
    formState.errorForState = true;
  } else if (state) {
    formState.errorForState = false;
  }
  if (!zipCode) {
    formState.errorForZipCode = true;
  } else if (zipCode) {
    formState.errorForZipCode = false;
  }
  if (!phoneNumber) {
    formState.errorForPhoneNumber = true;
  } else if (phoneNumber) {
    formState.errorForPhoneNumber = false;
  }
  if (!email) {
    formState.errorForEmail = true;
  } else if (phoneNumber) {
    formState.errorForEmail = false;
  }

  // if (
  //   formState.errorForFirstName ||
  //   formState.errorForLastName ||
  //   formState.errorForStreetAddress ||
  //   formState.errorForCity ||
  //   formState.errorForState ||
  //   formState.errorForZipCode ||
  //   formState.errorForPhoneNumber ||
  //   formState.errorForEmail
  // )
  // formState.error = true;
  return formState;
};

//ERRORS:

// error,
// errorForCity,
// errorForEmail,
// errorForFirstName,
// errorForLastName,
// errorForPhoneNumber,
// errorForState,
// errorForStreetAddress,
// errorForZipCode,
