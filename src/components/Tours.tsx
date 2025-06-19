import React from 'react';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';

const Shows = () => {
  const upcomingShows = [
    {
      date: 'Mar 15, 2024',
      venue: 'The Local Pub',
      city: 'Downtown',
      time: '8:00 PM',
      type: 'Live Performance',
      ticketsAvailable: true
    },
    {
      date: 'Mar 22, 2024',
      venue: 'Riverside Bar & Grill',
      city: 'Riverside District',
      time: '9:00 PM',
      type: 'Acoustic Set',
      ticketsAvailable: true
    },
    {
      date: 'Mar 29, 2024',
      venue: 'Community Center',
      city: 'Midtown',
      time: '7:30 PM',
      type: 'Charity Event',
      ticketsAvailable: false
    },
    {
      date: 'Apr 5, 2024',
      venue: 'Rock\'n\'Roll Cafe',
      city: 'Music District',
      time: '8:30 PM',
      type: 'Full Band Show',
      ticketsAvailable: true
    },
    {
      date: 'Apr 12, 2024',
      venue: 'Spring Festival',
      city: 'City Park',
      time: '2:00 PM',
      type: 'Festival Performance',
      ticketsAvailable: false
    },
    {
      date: 'Apr 19, 2024',
      venue: 'Blues & Brews',
      city: 'Old Town',
      time: '9:30 PM',
      type: 'Live Performance',
      ticketsAvailable: true
    }
  ];

  return (
    <section id="shows" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-silver-300 to-white bg-clip-text text-transparent">
            Upcoming Shows
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Come see us live! Check out our upcoming performances and book us for your venue or event.
          </p>
        </div>

        <div className="grid gap-4 mb-12">
          {upcomingShows.map((show, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-3 text-silver-400">
                      <Calendar size={20} />
                      <span className="font-semibold text-lg">{show.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock size={16} />
                      <span>{show.time}</span>
                    </div>
                    <span className="bg-silver-600/20 text-silver-300 px-3 py-1 rounded-full text-sm font-medium">
                      {show.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{show.venue}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{show.city}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {show.ticketsAvailable ? (
                    <button className="bg-gradient-to-r from-silver-600 to-gray-600 hover:from-silver-700 hover:to-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <ExternalLink size={16} />
                      Get Info
                    </button>
                  ) : (
                    <span className="bg-gray-700 text-gray-300 px-6 py-3 rounded-full font-semibold">
                      Free Event
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-gray-900/30 to-silver-900/30 p-12 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">Book Silver Souls</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Looking for live entertainment for your venue, event, or private party? 
            We bring high-energy performances that get crowds singing along to their favorite songs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Contact for Booking
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
              View Song List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shows;