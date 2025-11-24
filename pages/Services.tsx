import React from 'react';
import { TrendingUp, Users, PieChart, Briefcase, BarChart, Building2, Coins } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Investment Advisory',
      description: 'Strategic investment solutions tailored to your financial goals and risk appetite.',
      icon: TrendingUp,
    },
    {
      title: 'Financial Planning',
      description: 'Comprehensive planning covering budgeting, retirement planning, tax optimization, and long-term wealth creation.',
      icon: Users,
    },
    {
      title: 'Wealth Management',
      description: 'Holistic wealth solutions focused on growth, preservation, and legacy planning.',
      icon: Coins,
    },
    {
      title: 'Portfolio Management',
      description: 'Professional management of equity, debt, and hybrid portfolios for optimized risk-adjusted returns.',
      icon: PieChart,
    },
    {
      title: 'Corporate Financial Restructuring',
      description: 'Improving financial performance through strategic restructuring and realignment.',
      icon: Building2,
    },
    {
      title: 'Capital Market Consultancy',
      description: 'Expert guidance on equity markets, debt instruments, IPOs, and corporate financing.',
      icon: BarChart,
    },
    {
      title: 'Institutional Financial Advisory',
      description: 'Tailored financial strategies for firms, companies, and large institutions.',
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
           <p className="text-slate-300 max-w-2xl mx-auto text-lg">
             Expert solutions designed to navigate the complexities of the modern financial landscape.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="p-1 bg-brand-gold/80"></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-brand-blue">
                  {service.icon ? <service.icon className="h-8 w-8" /> : <div />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;