"use client";

import React, { useActionState, useEffect, useRef } from 'react';
import { contactContent } from '@/data/content/contact';
import { submitContactForm } from '@/app/[locale]/contact/actions';
import { ContactActionResponse } from '@/types/forms';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormUIProps {
  locale: 'tr' | 'en';
}

const initialState: ContactActionResponse = {
  success: false,
};

export default function ContactFormUI({ locale }: ContactFormUIProps) {
  const { form } = contactContent;
  const { fields } = form;
  const formRef = useRef<HTMLFormElement>(null);
  
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="premium-card p-8 md:p-12 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {state.success ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">{form.success.title[locale]}</h3>
            <p className="text-text-muted max-w-md mx-auto">{form.success.message[locale]}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-8 text-brand-accent hover:underline text-sm font-medium"
            >
              {locale === 'tr' ? 'Yeni Mesaj Gönder' : 'Send New Message'}
            </button>
          </motion.div>
        ) : (
          <form ref={formRef} action={formAction} className="space-y-8">
            {/* Hidden Fields */}
            <input type="hidden" name="locale" value={locale} />
            <input type="text" name="honeypot" className="hidden" aria-hidden="true" />

            {state.formError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg text-sm">
                {state.formError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                  {fields.name[locale]}
                </label>
                <input 
                  name="name"
                  type="text" 
                  placeholder={fields.name.placeholder[locale]}
                  className={`w-full bg-background border rounded-lg p-4 text-text-primary focus:outline-none focus:border-brand-accent transition-colors ${state.fieldErrors?.name ? 'border-red-500/50' : 'border-border-card'}`}
                  disabled={isPending}
                />
                {state.fieldErrors?.name && (
                  <p className="text-[10px] text-red-500 mt-1">{state.fieldErrors.name[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                  {fields.email[locale]}
                </label>
                <input 
                  name="email"
                  type="email" 
                  placeholder={fields.email.placeholder[locale]}
                  className={`w-full bg-background border rounded-lg p-4 text-text-primary focus:outline-none focus:border-brand-accent transition-colors ${state.fieldErrors?.email ? 'border-red-500/50' : 'border-border-card'}`}
                  disabled={isPending}
                />
                {state.fieldErrors?.email && (
                  <p className="text-[10px] text-red-500 mt-1">{state.fieldErrors.email[0]}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                {fields.company[locale]}
              </label>
              <input 
                name="company"
                type="text" 
                placeholder={fields.company.placeholder[locale]}
                className="w-full bg-background border border-border-card rounded-lg p-4 text-text-primary focus:outline-none focus:border-brand-accent transition-colors"
                disabled={isPending}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                {fields.message[locale]}
              </label>
              <textarea 
                name="message"
                rows={5}
                placeholder={fields.message.placeholder[locale]}
                className={`w-full bg-background border rounded-lg p-4 text-text-primary focus:outline-none focus:border-brand-accent transition-colors resize-none ${state.fieldErrors?.message ? 'border-red-500/50' : 'border-border-card'}`}
                disabled={isPending}
              />
              {state.fieldErrors?.message && (
                <p className="text-[10px] text-red-500 mt-1">{state.fieldErrors.message[0]}</p>
              )}
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className={`btn-primary w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2 ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {locale === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
                  </>
                ) : (
                  form.submit[locale]
                )}
              </button>
              <p className="mt-6 text-[10px] text-text-muted leading-relaxed">
                {form.privacyNote[locale]}
              </p>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
