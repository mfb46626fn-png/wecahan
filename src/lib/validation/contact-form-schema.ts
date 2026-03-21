import { z } from 'zod';

export const createContactSchema = (locale: 'tr' | 'en') => {
  const messages = {
    tr: {
      required: 'Bu alan zorunludur',
      invalidEmail: 'Geçersiz e-posta adresi',
      minLength: (min: number) => `En az ${min} karakter olmalıdır`,
    },
    en: {
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
      minLength: (min: number) => `Must be at least ${min} characters`,
    },
  }[locale];

  return z.object({
    name: z.string().min(2, messages.minLength(2)),
    email: z.string().email(messages.invalidEmail),
    company: z.string().optional(),
    message: z.string().min(10, messages.minLength(10)),
    honeypot: z.string().max(0, 'Spam detected'), // Should be empty
  });
};
