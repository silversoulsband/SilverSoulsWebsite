import React from 'react';
import { Users, Calendar, Music2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Music2 size={32} />, value: '100+', label: 'Songs in Repertoire' },
    { icon: <Users size={32} />, value: '50+', label: 'Shows Performed' },
    { icon: <Calendar size={32} />, value: '3+', label: 'Years Together' },
  ];

  const members = [
    {
      name: 'Alex Rivers',
      role: 'Lead Vocals & Guitar',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Maya Chen',
      role: 'Bass & Backing Vocals',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Jordan Blake',
      role: 'Lead Guitar',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Greg Vowles',
      role: 'Drums & Percussion',
      image: 'https://images.pexels.com/photos/1024117/pexels-photo-1024117.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-silver-300 to-white bg-clip-text text-transparent">
            About Silver Souls
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate musicians dedicated to bringing the songs you love to life. 
            From classic rock anthems to modern hits, we cover it all with energy and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-silver-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Meet the Band</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-silver-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-900/20 to-silver-900/20 p-12 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe great music deserves to be heard live. Whether it's a classic rock anthem that gets 
            everyone singing along or a modern hit that fills the dance floor, we put our heart and soul 
            into every performance. Our goal is to create unforgettable moments through the power of music.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;