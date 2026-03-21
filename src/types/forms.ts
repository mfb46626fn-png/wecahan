export type ContactFormValues = {
  name: string;
  email: string;
  company?: string;
  message: string;
  honeypot: string; // Basic spam protection
};

export type ContactActionResponse = {
  success: boolean;
  message?: string;
  fieldErrors?: {
    [K in keyof ContactFormValues]?: string[];
  };
  formError?: string;
};
