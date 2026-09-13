import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import supportImg from '../assets/images/support_specialist_1789288049463.jpg';

interface ForBusinessesAndGovSectionProps {
  onNavigate: (page: PageId) => void;
}

export const ForBusinessesAndGovSection: React.FC<ForBusinessesAndGovSectionProps> = ({ onNavigate }) => {
  return (
    <section id="businesses-and-government" className="py-16 sm:py-20 bg-white">
      <div className="w-[90%] mx-auto">
        {/* Section Header matching exact image layout */}
        <div className="flex items-center gap-3.5 mb-8 sm:mb-10">
          <span className="w-1.5 h-8 sm:h-10 bg-slate-900 inline-block rounded-xs" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-slate-900 tracking-tight leading-[1.18]">
            For businesses and government
          </h2>
        </div>

        {/* Large Rounded Content Card */}
        <div className="bg-[#ECEEF1] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/70 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative & Button */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-slate-600 text-lg sm:text-xl font-normal leading-relaxed text-left">
                The work we do is vitally important, for the organisations we support and for millions of people around the world. Through advanced automation and revolutionary AI capabilities, we are reimagining how core services are delivered to make people’s lives easier with seamless interactions and greater accessibility.
              </p>

              <div className="mt-8 sm:mt-10">
                <button
                  onClick={() => onNavigate('solutions')}
                  id="see-sectors-services-btn"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full border border-slate-800 text-slate-900 text-xs sm:text-sm font-medium tracking-wider hover:bg-slate-900 hover:text-white transition-colors cursor-pointer group"
                >
                  <span className="uppercase font-semibold">SEE THE SECTORS WE WORK WITH</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Support Specialist Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px] aspect-4/3 sm:aspect-3/4 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-slate-300/60 bg-slate-200">
                <img
                  src={supportImg}
                  alt="Customer technical support specialist assisting organisations"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
