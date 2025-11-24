import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
       <div className="bg-brand-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
           <p className="text-slate-300 max-w-2xl mx-auto text-lg">
             We are here to help you achieve your financial goals. Get in touch with us today.
           </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Get in Touch</h2>
            
            <div className="space-y-8 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-50 border border-slate-100 text-brand-gold shadow-sm">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600 break-all sm:break-normal">rryglobalsolutions@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-50 border border-slate-100 text-brand-gold shadow-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Phone</h3>
                  <p className="mt-1 text-slate-600">+91 9370665082</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-slate-50 border border-slate-100 text-brand-gold shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Address</h3>
                  <p className="mt-1 text-slate-600">Laxmi Enclave Lane no.2, Sharanpur Rd, next to Chai Tapri Cafe, Pandit Colony, Nashik, Maharashtra 422002</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Office Hours</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Mon - Fri</p>
                      <p className="text-slate-900 font-semibold">10:00 AM - 06:00 PM</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Saturday</p>
                      <p className="text-slate-900 font-semibold text-brand-gold">Closed</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Sunday</p>
                      <p className="text-slate-900 font-semibold text-brand-gold">Closed</p>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;