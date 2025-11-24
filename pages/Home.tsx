import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PieChart, TrendingUp, ShieldCheck, Users, Briefcase, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  const coreExpertise = [
    { name: 'Investment Advisory', icon: TrendingUp },
    { name: 'Wealth Management', icon: ShieldCheck },
    { name: 'Portfolio Management', icon: PieChart },
    { name: 'Financial Planning', icon: Users },
    { name: 'Corporate Financial Restructuring', icon: Briefcase },
    { name: 'Capital Market Consultancy', icon: BarChart },
  ];

  const whyChooseUs = [
    'Experienced Financial Advisors',
    'Tailored Financial Strategies',
    'Data-Driven Insights',
    'Compliant & Transparent Practices',
    'Proven Track Record',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img 
                src="https://picsum.photos/1920/1080?grayscale&blur=2" 
                alt="Financial Background" 
                className="w-full h-full object-cover"
             />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-brand-gold">RRY Global Solutions</span>
            <span className="block text-white mt-2 text-2xl sm:text-3xl md:text-4xl">Empowering Smarter Financial Decisions</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
            Expert financial, investment, and wealth advisory services designed to help you grow, protect, and manage your financial future.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-brand-gold hover:bg-yellow-600 hover:text-white transition-all shadow-lg w-full sm:w-auto"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center items-center px-8 py-3 border border-slate-500 text-base font-medium rounded-md text-white hover:bg-slate-800 transition-all w-full sm:w-auto"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Core Expertise
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Comprehensive solutions for your financial journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreExpertise.map((item) => (
              <div key={item.name} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-lg hover:shadow-xl transition-shadow border border-slate-100">
                <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Testimonials Split */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Why Choose Us */}
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose RRY Global Solutions?</h2>
              <ul className="space-y-4">
                {whyChooseUs.map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="ml-3 text-lg text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonials */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-brand-gold text-white h-12 w-12 rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                “
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Client Testimonials</h3>
              <blockquote className="text-slate-600 italic text-lg mb-6">
                "RRY Global Solutions transformed our financial planning process with data-driven insights and strategic advice."
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                  <Users className="h-6 w-6 text-slate-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">Corporate Client</p>
                  <p className="text-sm text-slate-500">Strategic Partner</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;