export const formatPhoneNumber = (phoneNumber) => {
  // Remove spaces, parentheses, and other non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Check the country code
  let formattedNumber;
  if (cleaned.startsWith("243")) {
    formattedNumber = `+243 (${cleaned.slice(3, 5)}) ${cleaned.slice(
      5,
      7
    )} ${cleaned.slice(7, 9)} ${cleaned.slice(9)}`;
  } else if (cleaned.startsWith("27")) {
    formattedNumber = `+27 (${cleaned.slice(2, 4)}) ${cleaned.slice(
      4,
      6
    )} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
  } else {
    // If the phone number doesn't match expected formats, return it as is
    formattedNumber = phoneNumber;
  }

  return formattedNumber;
};
