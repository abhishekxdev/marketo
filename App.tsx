import React, { useState } from 'react';
import { Icons } from './components/Icons';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 w-fit max-w-[calc(100%-2rem)]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
              <Icons.Infinity size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-slate-900">®</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Case Studies</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Services</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Blog</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200/50 p-4 rounded-b-2xl">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-slate-600 font-medium">About</a>
            <a href="#" className="text-slate-600 font-medium">Case Studies</a>
            <a href="#" className="text-slate-600 font-medium">Services</a>
            <a href="#" className="text-slate-600 font-medium">Blog</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium w-full">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dklgxqaii/image/upload/v1765542972/ChatGPT_Image_Dec_12_2025_05_53_27_PM_hwxy2o.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full -mt-80 md:-mt-96 lg:-mt-[28rem]">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.1] mb-6">
          Performance <br />
          Driven Marketing<sup className="text-lg md:text-2xl text-slate-400">®</sup>
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Smart strategy, striking design, strong growth.
        </p>
      </div>

      {/* Service badges - bottom right */}
      <div className="absolute bottom-8 right-4 md:right-8 lg:right-16 flex flex-wrap gap-2 z-20 max-w-[220px] md:max-w-[260px] justify-end">
        <div className="bg-slate-800/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">SEO</div>
        <div className="bg-slate-800/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">Content Marketing</div>
        <div className="bg-slate-800/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">Social Media Marketing</div>
        <div className="bg-slate-800/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">PPC</div>
        <div className="bg-slate-800/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">Web Design & Optimization</div>
        <div className="bg-slate-800/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap">Brand Strategy</div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="mb-16">
          <p className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            About Marketra®
          </p>
          <div className="space-y-3 text-center md:text-left">
            <p className="text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-slate-900">
              Marketra® crafts smart marketing strategies that help brands grow,
              connect, and stand out.
            </p>
            <p className="text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-slate-400">
              From bold ideas to data-driven results, we blend creativity with
              strategy to make your message unforgettable.
            </p>
          </div>
        </div>

        {/* KPIs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 pt-12 md:divide-x md:divide-gray-200 text-center md:text-left">
          <div className="py-6 md:pr-8">
            <p className="text-sm font-medium text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              Happy Clients
            </p>
            <h3 className="text-6xl md:text-7xl font-normal text-blue-600 leading-none">
              600+
            </h3>
          </div>
          <div className="py-6 md:px-8">
            <p className="text-sm font-medium text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              Projects Delivered
            </p>
            <h3 className="text-6xl md:text-7xl font-normal text-blue-600 leading-none">
              200+
            </h3>
          </div>
          <div className="py-6 md:pl-8">
            <p className="text-sm font-medium text-slate-900 mb-3 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              Client Satisfaction
            </p>
            <h3 className="text-6xl md:text-7xl font-normal text-blue-600 leading-none">
              95%
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const Logos = () => {
    const collaborations = [
        {
            brandType: "Man Lifestyle Brand",
            workingDuration: "Working for 6 years",
            serviceTag: "360° marketing",
            logo: (
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-0 mb-2 relative">
                        <div className="w-7 h-7 rounded-full border-2 border-slate-700 relative z-10"></div>
                        <div className="w-7 h-7 rounded-full bg-slate-700 -ml-2 relative z-0"></div>
                    </div>
                    <span className="text-sm font-medium text-slate-800 tracking-wider">ARTISTAGTY</span>
                </div>
            )
        },
        {
            brandType: "Beauty Brand",
            workingDuration: "Working for 1 years",
            serviceTag: "Web Design",
            logo: (
                <div className="flex items-center justify-center">
                    <div className="w-14 h-14 relative">
                        <svg viewBox="0 0 56 56" className="w-full h-full">
                            <circle cx="28" cy="28" r="20" fill="none" stroke="#1e293b" strokeWidth="2"/>
                            <circle cx="28" cy="12" r="4" fill="none" stroke="#1e293b" strokeWidth="2"/>
                            <circle cx="28" cy="44" r="4" fill="none" stroke="#1e293b" strokeWidth="2"/>
                            <circle cx="12" cy="28" r="4" fill="none" stroke="#1e293b" strokeWidth="2"/>
                            <circle cx="44" cy="28" r="4" fill="none" stroke="#1e293b" strokeWidth="2"/>
                            <path d="M 28 12 Q 20 20 12 28 Q 20 36 28 44 Q 36 36 44 28 Q 36 20 28 12" fill="none" stroke="#1e293b" strokeWidth="1.5"/>
                        </svg>
                    </div>
                </div>
            )
        },
        {
            brandType: "Coffee Brand",
            workingDuration: "Working for 8 years",
            serviceTag: "360° marketing",
            logo: (
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <div className="w-5 h-4 border-l-2 border-t-2 border-slate-700 rounded-tl-sm"></div>
                        <div className="w-4 h-4 border-l-2 border-b-2 border-slate-700 rounded-bl-sm ml-1"></div>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm text-slate-700 lowercase font-normal">coffee</span>
                        <span className="text-sm text-slate-800 lowercase font-semibold">bloom</span>
                    </div>
                </div>
            )
        },
        {
            brandType: "Furniture Brand",
            workingDuration: "Working for 3 years",
            serviceTag: "Web Optimization",
            logo: (
                <div className="flex flex-col items-center">
                    <div className="flex gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-slate-700 rounded-full"></div>
                        ))}
                    </div>
                    <span className="text-base font-semibold text-slate-800 tracking-tight" style={{ fontFamily: 'sans-serif', letterSpacing: '0.05em' }}>MINIMAL</span>
                    <span className="text-xs text-slate-600 mt-0.5">RESTAURANT</span>
                </div>
            )
        }
    ];

    return (
        <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-sm font-normal text-slate-900 mb-4 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        Collaborations
                    </p>
                    <h2 className="text-4xl md:text-5xl font-normal text-slate-900">Trusted across industries.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collaborations.map((collab, i) => (
                        <div key={i} className="bg-slate-50 rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[300px]">
                            <div className="space-y-2.5 mb-8">
                                <p className="text-lg font-normal text-slate-900">{collab.brandType}</p>
                                <p className="text-sm font-normal text-slate-700">{collab.workingDuration}</p>
                                <span className="inline-block px-4 py-1.5 bg-slate-50 border border-slate-300 rounded-full text-sm font-normal text-slate-700">
                                    {collab.serviceTag}
                                </span>
                            </div>
                            <div className="mt-auto">
                                <div className="bg-white border border-slate-300 rounded-full px-8 py-5 flex items-center justify-center" style={{ borderRadius: '9999px', minHeight: '90px' }}>
                                    {collab.logo}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    )
}

const Services = () => {
    const services = [
        { icon: Icons.Search, title: "Search Engine Optimization", desc: "Rank higher on Google, increase organic traffic, and get found by the right audience.", id: "01" },
        { icon: Icons.PenTool, title: "Content Marketing", desc: "Engage and convert through compelling blog posts, articles, and visual content.", id: "02" },
        { icon: Icons.Share2, title: "Social Media Marketing", desc: "Grow your online presence and build a community across platforms.", id: "03" },
        { icon: Icons.Megaphone, title: "Paid Advertising", desc: "Run high-converting ad campaigns on Google, Facebook, and other networks to drive leads and sales.", id: "04" },
        { icon: Icons.Lightbulb, title: "Creative Brand Strategy", desc: "Craft a powerful identity with positioning, messaging, and visual branding that stands out.", id: "05" },
        { icon: Icons.Monitor, title: "Web Design & Optimization", desc: "Design stunning, fast-loading websites optimized for user experience and conversions.", id: "06" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="mb-6 md:mb-0">
                        <p className="text-sm font-normal text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Services
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">Everything you<br/>need to grow.</h2>
                    </div>
                    <div className="md:max-w-sm">
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">From strategy to execution, we offer a full suite of marketing services designed to grow your brand, reach your audience, and drive real results.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center group transition-colors">
                            Contact us <span className="ml-2"><Icons.ArrowUpRight size={14} /></span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow min-h-[280px] flex flex-col relative">
                            <div className="absolute top-6 right-6 text-xs font-mono text-slate-300">{s.id}</div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full mb-6"></div>
                            
                            <div className="mt-auto">
                                <div className="mb-6">
                                    <s.icon className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Works = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="mb-6 md:mb-0">
                        <p className="text-sm font-normal text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Works
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">Real people,<br/>real results.</h2>
                    </div>
                    <div className="md:max-w-sm">
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">From strategy to execution, we offer a full suite of marketing services designed to grow your brand, reach your audience, and drive real results.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center transition-colors">
                            View all works <span className="ml-2"><Icons.ArrowUpRight size={14} /></span>
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Card 1 - Dark Blue */}
                    <div className="bg-[#2400FF] rounded-2xl overflow-hidden text-white relative">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Left Half - Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[400px]">
                                <div className="flex gap-2 mb-8">
                                    <span className="bg-white border border-white px-4 py-1.5 rounded-full text-xs font-normal text-slate-900">E-commerce</span>
                                    <span className="bg-white border border-white px-4 py-1.5 rounded-full text-xs font-normal text-slate-900">SEO</span>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 mb-4">
                                        <h3 className="text-6xl md:text-7xl font-bold">140%</h3>
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg">↑</span>
                                        </div>
                                    </div>
                                    <p className="text-xl font-bold mb-8">Scaling E-Commerce Growth for UrbanThread</p>
                                    <button className="bg-white border-2 border-blue-600 text-slate-900 py-3 px-6 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors">
                                        Read Full Case Study
                                    </button>
                                </div>
                            </div>

                            {/* Right Half - Image */}
                            <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="UrbanThread" />
                                <div className="absolute inset-0 bg-blue-900/30"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-6xl text-white/40 font-serif italic" style={{ fontFamily: 'cursive' }}>Clothes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Light Grey */}
                    <div className="bg-slate-100 rounded-2xl overflow-hidden text-slate-900 relative">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Left Half - Image */}
                            <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden order-2 lg:order-1">
                                <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Supplements" />
                                <div className="absolute inset-0 bg-white/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-4xl text-green-700 font-serif italic opacity-60">.greenery.</span>
                                </div>
                            </div>

                            {/* Right Half - Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-between min-h-[400px] order-1 lg:order-2">
                                <div className="flex gap-2 justify-end mb-8">
                                    <span className="bg-white border border-slate-300 px-4 py-1.5 rounded-full text-xs font-normal text-slate-900">Supplements</span>
                                    <span className="bg-white border border-slate-300 px-4 py-1.5 rounded-full text-xs font-normal text-slate-900">Influencer Marketing</span>
                                </div>
                                
                                <div className="mt-auto">
                                    <div className="flex items-center gap-2 mb-4">
                                        <h3 className="text-6xl md:text-7xl font-bold text-slate-900">80%</h3>
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg">↑</span>
                                        </div>
                                    </div>
                                    <p className="text-xl font-bold text-slate-900 mb-8">Launching Globally with Elixify Supplements</p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-sm transition-colors">
                                        Read Full Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Process = () => {
    const calendarEvents = {
        1: { label: "Reel Spotlight", icon: Icons.Video },
        5: { label: "DM Outreach", icon: Icons.Mail },
        17: { label: "Collab Reminder", icon: Icons.Handshake, highlight: true },
        30: { label: "Campaign Launch", icon: Icons.Flame }
    };

    return (
        <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="mb-6 md:mb-0">
                        <p className="text-sm font-normal text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Smart Steps
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">Everything you<br/>need to grow.</h2>
                    </div>
                    <div className="md:max-w-sm">
                        <p className="text-sm text-slate-600 leading-relaxed">From strategy to execution, we offer a full suite of marketing services designed to grow your brand, reach your audience, and drive real results.</p>
                    </div>
                 </div>

                 {/* Top Row */}
                 <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    {/* Calendar Card */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">Plan your growth</h4>
                        <p className="text-sm text-slate-600 mb-4">Clear steps to scale smart and fast.</p>
                        
                        {/* Calendar UI */}
                        <div className="bg-white rounded-xl p-4 border border-slate-200">
                            <div className="grid grid-cols-7 gap-1 text-center mb-3 text-xs font-semibold text-slate-400">
                                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                            </div>
                            <div className="grid grid-cols-7 gap-1">
                                {[...Array(30)].map((_, i) => {
                                    const day = i + 1;
                                    const event = calendarEvents[day];
                                    return (
                                        <div key={i} className="flex flex-col min-h-[60px]">
                                            <div className={`w-full aspect-square flex items-center justify-center rounded-md text-xs border-2 ${event?.highlight ? 'border-blue-600 bg-blue-600 text-white' : event ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-600'}`}>
                                                <span className="font-medium">{day}</span>
                                            </div>
                                            {event && (
                                                <div className={`mt-1 p-1 rounded text-[9px] whitespace-nowrap ${event.highlight ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                                                    <div className="flex items-center gap-1">
                                                        <event.icon size={8} className={event.highlight ? 'text-white' : 'text-blue-600'} strokeWidth={2} />
                                                        <span className={event.highlight ? 'text-white font-medium' : 'text-slate-700'}>{event.label}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">Our 4-step plan</h4>
                        <p className="text-sm text-slate-600 mb-6">A simple path to smart, scalable growth.</p>
                        
                        <div className="grid grid-cols-4 gap-3">
                            {[
                                { step: '01', title: 'Discuss', icon: Icons.MessageCircle },
                                { step: '02', title: 'Plan', icon: Icons.Clipboard },
                                { step: '03', title: 'Produce', icon: Icons.Settings },
                                { step: '04', title: 'Succeed', icon: Icons.Trophy },
                            ].map((item) => (
                                <div key={item.step} className="bg-white rounded-xl p-4 border border-slate-200 flex flex-col items-center text-center">
                                    <span className="text-[10px] text-slate-300 mb-2 self-start">{item.step}</span>
                                    <item.icon size={20} className="text-blue-600 mb-2" strokeWidth={1.5} />
                                    <span className="text-sm font-bold text-slate-900">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                 {/* Bottom Row */}
                 <div className="grid lg:grid-cols-2 gap-6">
                    {/* Success Rate */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center items-center min-h-[200px]">
                        <h3 className="text-7xl md:text-8xl font-bold text-blue-600 tracking-tighter mb-2">99%</h3>
                        <p className="text-base font-medium text-slate-700">Project Success Rate</p>
                    </div>

                    {/* Service Tags Word Cloud */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex items-center justify-center min-h-[200px] relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">SEO</span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transform rotate-12">ADS</span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transform -rotate-6">Social Media</span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transform rotate-180">Web Design</span>
                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transform rotate-6">Marketing</span>
                        </div>
                    </div>
                 </div>
             </div>
        </section>
    )
}

const Team = () => {
    const team = [
        { name: "Diya Maryam", role: "Social Media Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", quote: "Who executes ideas and brings results." },
        { name: "Ethan Miles", role: "SEO Specialist", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", quote: "Who gets you found by the right people." },
        { name: "Tina Tuhfa", role: "Paid Media Expert", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop", quote: "Who turns every click into a valuable conversion." },
        { name: "Mason Reid", role: "Content Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop", quote: "Who writes with purpose and lasting impact." },
        { name: "Noah Bennett", role: "Ad Campaign Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop", quote: "Who turns clicks into loyal customers." },
        { name: "Caleb Morgan", role: "Brand Consultant", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", quote: "Who shapes how the world sees you." },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                     <div className="mb-6 md:mb-0">
                        <p className="text-sm font-normal text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Team
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">Your growth<br/>partners.</h2>
                    </div>
                    <div className="md:max-w-md">
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">Marketra, our team is a blend of strategists, creators, and problem-solvers — all dedicated to delivering meaningful marketing results. We believe collaboration fuels innovation, and our experts are here to turn your ideas into impact.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center transition-colors">
                            More about us <span className="ml-2"><Icons.ArrowUpRight size={14} /></span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <div className="h-64 mb-6 rounded-xl overflow-hidden bg-white">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-base font-normal text-slate-700 mb-6">"{member.quote}"</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{member.name}</h4>
                                    <p className="text-sm text-slate-600">{member.role}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors text-xs font-semibold">In</div>
                                    <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors text-xs font-semibold">X</div>
                                    <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 cursor-pointer transition-colors">
                                        <div className="w-3 h-3 border border-slate-600 rounded-sm relative">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-slate-600 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Pricing = () => {
    const essentialsServices = [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Paid Advertising',
        'Web Design & Optimization'
    ];

    const acceleratorServices = [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Brand Strategy',
        'Paid Advertising',
        'Web Design & Optimization'
    ];

    const dominanceServices = [
        'Search Engine Optimization (SEO)',
        'Content Marketing',
        'Social Media Marketing',
        'Brand Strategy',
        'Paid Advertising',
        'Web Design & Optimization'
    ];

    return (
        <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <p className="text-sm font-normal text-slate-900 mb-4 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        Pricing
                    </p>
                    <h2 className="text-4xl md:text-5xl font-normal text-slate-900">Transparent pricing, tangible value.</h2>
                 </div>

                 <div className="grid lg:grid-cols-3 gap-6">
                    {/* Essentials */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            <span className="text-base font-bold text-slate-900">Essentials</span>
                        </div>
                        <div className="flex items-center gap-2 mb-6 text-orange-500">
                            <Icons.Flame size={14} />
                            <span className="text-sm font-normal text-slate-700">Most Popular</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Services Included</h3>
                        <div className="space-y-0 mb-8">
                            {essentialsServices.map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center gap-2 py-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                        <span>{item}</span>
                                    </div>
                                    {idx < essentialsServices.length - 1 && (
                                        <div className="border-t border-slate-200"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$2,500</span>
                            <span className="text-slate-600 text-sm ml-1">/month</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mb-4 transition-colors">Contact Us</button>
                        <p className="text-center text-xs text-slate-600">Need a custom plan? Contact us.</p>
                    </div>

                    {/* Accelerator */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            <span className="text-base font-bold text-slate-900">Accelerator</span>
                        </div>
                        <div className="flex items-center gap-2 mb-6 text-yellow-500">
                            <Icons.Award size={14} />
                            <span className="text-sm font-normal text-slate-700">Recommended for All</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Services Included</h3>
                        <div className="space-y-0 mb-8">
                            {acceleratorServices.map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center gap-2 py-2 text-sm text-slate-600">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                        <span>{item}</span>
                                    </div>
                                    {idx < acceleratorServices.length - 1 && (
                                        <div className="border-t border-slate-200"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-slate-900">$5,000</span>
                            <span className="text-slate-600 text-sm ml-1">/month</span>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mb-4 transition-colors">Contact Us</button>
                        <p className="text-center text-xs text-slate-600">Need a custom plan? Contact us.</p>
                    </div>

                    {/* Dominance */}
                    <div className="bg-blue-600 p-8 rounded-2xl text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            <span className="text-base font-bold text-white">Dominance</span>
                        </div>
                        <div className="flex items-center gap-2 mb-6">
                            <Icons.Zap size={14} className="text-white" />
                            <span className="text-sm font-normal text-white">Most Valued</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-6">Services Included</h3>
                        <div className="space-y-0 mb-8">
                            {dominanceServices.map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex items-center gap-2 py-2 text-sm text-white">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                        <span>{item}</span>
                                    </div>
                                    {idx < dominanceServices.length - 1 && (
                                        <div className="border-t border-white/30"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$10,000</span>
                            <span className="text-white/90 text-sm ml-1">/month</span>
                        </div>
                        <button className="w-full bg-white hover:bg-slate-50 text-blue-600 py-3 rounded-lg font-medium mb-4 transition-colors">Contact Us</button>
                        <p className="text-center text-xs text-white/90">Need a custom plan? Contact us.</p>
                    </div>
                 </div>
             </div>
        </section>
    )
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What services does your digital marketing agency offer?",
            answer: "We provide a comprehensive range of services, including Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Brand Strategy, Paid Advertising (PPC), and Web Design & Optimization.",
            author: "Fateema Tasnim",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
        },
        { question: "Do you offer ongoing marketing contracts or one-time projects?" },
        { question: "How long does it take to see results from SEO efforts?" },
        { question: "What is PPC advertising, and how can it benefit my business?" },
        { question: "How will we communicate and collaborate during our partnership?" },
        { question: "How long does it take to see results from digital marketing?" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left column */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <p className="text-sm font-normal text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                FAQ
                            </p>
                            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 leading-tight mb-4">
                                We've got the <br /> answers.
                            </h2>
                        </div>

                        <div className="bg-[#2400FF] rounded-2xl p-6 text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                                    className="w-14 h-14 rounded-xl object-cover"
                                    alt="Support"
                                />
                                <div className="text-sm text-white/80">
                                    Didn't get the answer you were looking for?
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold mb-6 leading-tight">Didn't get the answer you were looking for?</h4>
                            <button className="w-full bg-white text-blue-700 py-3 rounded-full font-medium text-sm shadow-sm hover:bg-slate-50 transition-colors">
                                Talk with Human
                            </button>
                            <p className="text-xs text-blue-100 mt-3 leading-relaxed">
                                We will be happy to answer! It should take between 1 to 2 working days.
                            </p>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="lg:col-span-8 space-y-3">
                        {faqs.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`rounded-xl border ${isOpen ? 'border-slate-200 bg-slate-50 shadow-md' : 'border-slate-200'} overflow-hidden`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full flex justify-between items-center text-left px-5 py-4"
                                    >
                                        <span className="text-base md:text-lg font-semibold text-slate-900">{item.question}</span>
                                        {isOpen ? (
                                            <Icons.ChevronUp className="text-slate-700" />
                                        ) : (
                                            <Icons.ChevronDown className="text-slate-400" />
                                        )}
                                    </button>

                                    {isOpen && item.answer && (
                                        <div className="px-5 pb-4 text-slate-700 text-sm leading-relaxed border-t border-slate-200 bg-white">
                                            <p className="mb-4">{item.answer}</p>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={item.avatar}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                    alt={item.author}
                                                />
                                                <div className="text-xs text-slate-500">
                                                    Answered by <span className="text-slate-800 font-medium">{item.author}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const reviews = [
        {
            text: "Marketra helped us cut through the noise. Their digital strategies didn't just bring us visibility—they brought us the right kind of traffic. We saw a noticeable jump in leads within the first month.",
            author: "Jason Lee",
            role: "Founder, LeeTech Solutions",
            id: "01"
        },
        {
            text: "We partnered with Marketra to improve our online marketing efforts, and the results exceeded expectations. Their team was sharp, strategic, and always one step ahead. Our ROI has never looked better.",
            author: "Michael Torres",
            role: "Marketing Director, GreenHive Co.",
            id: "02"
        },
        {
            text: "We're a small business with a big dream, and Marketra made sure that dream reached the right audience. From branding to social media, their team nailed it.",
            author: "Daniel Reed",
            role: "Owner, Brew & Bean Coffeehouse",
            id: "03"
        }
    ];

    return (
        <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                     <div className="mb-6 md:mb-0">
                        <p className="text-sm font-normal text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Testimonial
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">Words that<br/>Inspire us.</h2>
                     </div>
                     <div className="md:max-w-md flex flex-col items-end">
                        <p className="text-sm text-slate-600 mb-4 text-right leading-relaxed">Real feedback from real people. Discover how our design solutions have made a lasting impact on brands and businesses just like yours.</p>
                        <div className="flex items-center gap-3">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center transition-colors">
                                Visit Case Studies <span className="ml-2 bg-white text-blue-600 rounded-full p-1"><Icons.ArrowUpRight size={12} /></span>
                            </button>
                            <div className="flex space-x-2">
                                <button className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
                                    <Icons.ArrowRight className="rotate-180" size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
                                    <Icons.ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                     </div>
                 </div>

                 <div className="grid md:grid-cols-3 gap-6">
                     {reviews.map((r, i) => (
                         <div key={i} className="bg-slate-50 p-8 rounded-2xl relative shadow-sm">
                             <span className="absolute top-6 right-6 text-xs text-slate-300 font-mono">{r.id}</span>
                             <div className="w-2 h-2 bg-blue-600 rounded-full mb-6"></div>
                             <p className="text-slate-700 text-base mb-8 leading-relaxed">{r.text}</p>
                             <div>
                                 <div className="font-bold text-slate-900 mb-1">{r.author}</div>
                                 <div className="text-sm text-slate-600">{r.role}</div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
        </section>
    )
}

const Blog = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div className="mb-6 md:mb-0">
                        <p className="text-sm font-normal text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Blog
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">Insights from<br/>the digital edge.</h2>
                    </div>
                    <div className="md:max-w-md flex flex-col items-end">
                        <p className="text-sm text-slate-600 mb-4 text-right leading-relaxed">Explore marketing trends, strategies, and expert tips to help your brand grow faster and smarter in the digital world.</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center transition-colors">
                            View All <span className="ml-2 bg-white text-blue-600 rounded-full p-1"><Icons.ArrowUpRight size={12} /></span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "How Brand Strategy Impacts Business Growth", date: "July 2025", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop" },
                        { title: "The Rise of Micro-Influencers in Digital Campaigns", date: "June 2025", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" },
                        { title: "Why Your Brand Needs a Visual Identity", date: "May 2025", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop" }
                    ].map((blog, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="h-64 rounded-xl overflow-hidden mb-4">
                                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                            <p className="text-sm text-slate-600">{blog.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CTA = () => {
    return (
        <section
            className="relative pt-32 pb-32 overflow-hidden"
            style={{
                backgroundImage: 'url("https://res.cloudinary.com/dklgxqaii/image/upload/v1765548358/Gemini_Generated_Image_jhc36rjhc36rjhc3_dsxelh.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
             {/* White blur fade at bottom */}
             <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
             {/* Center Call To Action */}
             <div className="text-center relative z-10 px-4 max-w-3xl mx-auto mt-6 md:mt-10">
                 <h2 className="text-4xl md:text-6xl font-thin text-black leading-tight mb-8 tracking-tight">
                    Ready to grow bigger, <br/> faster, smarter?
                 </h2>
                 <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium flex items-center mx-auto hover:bg-slate-50 transition-all shadow-lg shadow-blue-500/30">
                    Contact Us <span className="ml-2 bg-blue-600 text-white rounded-full p-1"><Icons.ArrowUpRight size={14} /></span>
                 </button>
             </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-20">
                     <div>
                         <h5 className="font-bold text-slate-900 mb-4">● Info & Address</h5>
                         <p className="text-slate-600 leading-loose">
                             1330 Disk Rd, Anchorage,<br/>
                             Alaska, United States<br/>
                             +661 058 56978<br/>
                             Hello@marketra.com
                         </p>
                     </div>
                     <div>
                         <h5 className="font-bold text-slate-900 mb-4">● Social Links</h5>
                         <ul className="text-slate-600 space-y-2">
                             <li className="hover:text-blue-600 cursor-pointer">Facebook</li>
                             <li className="hover:text-blue-600 cursor-pointer">Twitter/X</li>
                             <li className="hover:text-blue-600 cursor-pointer">Instagram</li>
                             <li className="hover:text-blue-600 cursor-pointer">LinkedIn</li>
                         </ul>
                     </div>
                     <div>
                         <h5 className="font-bold text-slate-900 mb-4">● Navigation</h5>
                         <ul className="text-slate-600 space-y-2">
                             <li className="hover:text-blue-600 cursor-pointer">About</li>
                             <li className="hover:text-blue-600 cursor-pointer">Case Studies</li>
                             <li className="hover:text-blue-600 cursor-pointer">Services</li>
                             <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                         </ul>
                     </div>
                     <div>
                         <h5 className="font-bold text-slate-900 mb-4">● Legal</h5>
                         <ul className="text-slate-600 space-y-2">
                             <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                             <li className="text-slate-400">© 2025 Marketra</li>
                         </ul>
                     </div>
                 </div>
                 
                 {/* Giant Watermark */}
                 <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03]">
                     <span className="text-[20vw] font-black leading-none text-slate-900 tracking-tighter">Marketra®</span>
                 </div>
             </div>
        </footer>
    )
}

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Logos />
      <Services />
      <Works />
      <Process />
      <Team />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}