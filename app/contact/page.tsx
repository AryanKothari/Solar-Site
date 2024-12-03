import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have feedback or questions about the Root? We&apos;d love to hear from you.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}