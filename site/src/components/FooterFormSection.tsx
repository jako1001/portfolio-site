import ContactForm from "./ContactForm";

export default function FooterFormSection() {
  return (
    <section className="section has-text-black">
      <div className="container is-max-widescreen">
        <div className="has-text-centered is-size-3 mb-6 is-italic has-text-weight-semibold has-text-black">
          Let's talk.
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
