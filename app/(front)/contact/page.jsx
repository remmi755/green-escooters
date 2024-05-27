import ContactForm from "../contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="pt-4">
      <h1 className="font-bold text-gray-700 text-3xl mt-24 mx-auto max-w-2xl px-4 text-center">
        Contact Us
      </h1>
      <div className="mb-10 w-96 mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
