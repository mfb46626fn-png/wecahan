import ContactIntroBlock from "@/components/blocks/contact/contact-intro-block";
import ContactFormBlock from "@/components/blocks/contact/contact-form-block";
import ContactInfoBlock from "@/components/blocks/contact/contact-info-block";
import CollaborationNoteBlock from "@/components/blocks/contact/collaboration-note-block";

export default function ContactPage() {
  return (
    <>
      <ContactIntroBlock />
      <ContactFormBlock />
      <ContactInfoBlock />
      <CollaborationNoteBlock />
    </>
  );
}
