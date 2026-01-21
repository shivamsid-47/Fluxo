import React, { useState } from 'react';
import { Send } from 'lucide-react';

const SUPPORT_EMAIL_PLACEHOLDER = "operations@squadrancampus.in";

export const ContactSection: React.FC = () => {
    return (
        <div className="py-16 max-w-2xl mx-auto w-full animate-fade-in-up border-t border-slate-200/50">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Contact Support</h2>
                <p className="text-slate-500 font-bold">Questions? Issues? We're here to help.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
                <form action={`https://formsubmit.co/${SUPPORT_EMAIL_PLACEHOLDER}`} method="POST" className="space-y-4">
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.href} />
                    <input type="hidden" name="_subject" value="New Contact Form Submission from Fluxo" />

                    <div>
                        <label className="text-xs font-bold text-slate-400 ml-2 mb-2 block uppercase">Email</label>
                        <input required type="email" name="email" className="w-full p-4 bg-slate-50 rounded-xl font-bold outline-none focus:ring-2 focus:ring-brand-blue/20" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 ml-2 mb-2 block uppercase">Query</label>
                        <textarea required name="message" rows={4} className="w-full p-4 bg-slate-50 rounded-xl font-medium outline-none resize-none focus:ring-2 focus:ring-brand-blue/20" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 shadow-lg flex items-center justify-center gap-2">
                        <Send size={18} /> Send Message
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">
                        Emails are sent to <span className="font-bold text-slate-500">{SUPPORT_EMAIL_PLACEHOLDER}</span>
                    </p>
                </form>
            </div>
        </div>
    );
};
