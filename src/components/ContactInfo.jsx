
const ContactInfo = ({ email, phone, location }) => {
  return (
    <section className="contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
        <li>Location: {location}</li>
      </ul>
    </section>
  );
};

export default ContactInfo;
