import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-white">
              <TrendingUp className="h-6 w-6 text-brand-gold" />
              <span className="font-bold text-lg">RRY Global Solutions</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs">
              Empowering smarter financial decisions with expert advisory services designed to help you grow, protect, and manage your financial future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info (Brief) */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-gold shrink-0" />
                <span>rryglobalsolutions@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <span>+91 9370665082</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0" />
                <span>Laxmi Enclave Lane no.2, Sharanpur Rd, next to Chai Tapri Cafe, Pandit Colony, Nashik, Maharashtra 422002</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>&copy; 2025 RRY Global Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;