import React from 'react';
import { Target, Eye, Heart, Shield, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A trusted financial consultancy firm dedicated to helping individuals, businesses, and institutions make informed financial decisions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-gold">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-brand-gold" />
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To deliver reliable, ethical, and compliant financial advisory services that empower our clients to achieve long-term financial success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-8 w-8 text-slate-700" />
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To become a global leader in financial consulting by offering solutions that inspire confidence and financial clarity.
            </p>
          </div>
        </div>

        {/* Who We Are Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
           <div className="order-2 lg:order-1">
             <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Team meeting" 
              className="rounded-xl shadow-xl w-full object-cover h-96"
             />
           </div>
           <div className="order-1 lg:order-2">
             <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
             <p className="text-slate-600 text-lg leading-relaxed mb-4">
               RRY Global Solutions stands at the forefront of financial consultancy. We are more than just advisors; we are strategic partners in your journey towards financial stability and growth.
             </p>
             <p className="text-slate-600 text-lg leading-relaxed">
               Whether you are an individual looking to secure your retirement, or a large corporation seeking restructuring advice, our team brings seasoned expertise and a commitment to integrity to every interaction.
             </p>
           </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <ValueCard 
              icon={Heart} 
              title="Integrity" 
              description="We uphold the highest standards of honesty and strong moral principles in all our actions."
            />
             <ValueCard 
              icon={Eye} 
              title="Transparency" 
              description="We believe in open communication and clarity in all our financial dealings."
            />
             <ValueCard 
              icon={Users} 
              title="Client-Centric Approach" 
              description="Your needs are at the heart of our strategy. We listen, understand, and deliver."
            />
             <ValueCard 
              icon={Award} 
              title="Excellence" 
              description="We strive for superior quality in our advice, services, and client support."
            />
             <ValueCard 
              icon={Shield} 
              title="Compliance" 
              description="Adhering to all regulatory standards to ensure your financial safety and legality."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard: React.FC<{ icon: any, title: string, description: string }> = ({ icon: Icon, title, description }) => (
  <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-brand-gold transition-colors">
    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm mb-4">
      <Icon className="h-6 w-6 text-brand-gold" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

export default About;