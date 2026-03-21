"use server";

import { createContactSchema } from "@/lib/validation/contact-form-schema";
import { ContactActionResponse, ContactFormValues } from "@/types/forms";
import { contactContent } from "@/data/content/contact";

export async function submitContactForm(
  prevState: ContactActionResponse | null,
  formData: FormData
): Promise<ContactActionResponse> {
  const locale = formData.get("locale") as "tr" | "en" || "tr";
  const schema = createContactSchema(locale);
  
  const rawData: ContactFormValues = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    message: formData.get("message") as string,
    honeypot: formData.get("honeypot") as string,
  };

  const validated = schema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      fieldErrors: validated.error.flatten().fieldErrors as ContactActionResponse["fieldErrors"],
    };
  }

  // Basic Spam Protection (Honeypot)
  if (rawData.honeypot) {
    return {
      success: false,
      formError: "Spam detected.",
    };
  }

  try {
    // In a real scenario, you'd send an email or trigger a webhook here.
    // For now, we simulate success as per the technical architecture's "technical spine" approach.
    console.log("Form Submission Received:", validated.data);
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: contactContent.form.success.message[locale],
    };
  } catch (error) {
    console.error("Form Submission Error:", error);
    return {
      success: false,
      formError: contactContent.form.error.message[locale],
    };
  }
}
