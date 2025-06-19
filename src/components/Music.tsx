import React from 'react';
import { Play, Youtube, ExternalLink } from 'lucide-react';

const Videos = () => {
  const featuredVideos = [
    {
      title: 'Bohemian Rhapsody - Queen Cover',
      thumbnail: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '15K views',
      duration: '6:02',
      featured: true
    },
    {
      title: 'Sweet Child O\' Mine - Guns N\' Roses',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '8.2K views',
      duration: '5:45'
    },
    {
      title: 'Don\'t Stop Believin\' - Journey',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '12K views',
      duration: '4:32'
    },
    {
      title: 'Mr. Brightside - The Killers',
      thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '6.8K views',
      duration: '3:58'
    },
    {
      title: 'Livin\' on a Prayer - Bon Jovi',
      thumbnail: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '9.5K views',
      duration: '4:15'
    },
    {
      title: 'Hotel California - Eagles',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '11K views',
      duration: '6:30'
    }
  ];

  const genres = [
    'Classic Rock',
    'Modern Rock',
    'Pop Hits',
    'Alternative',
    'Indie',
    'Folk Rock'
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Our Videos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch us perform your favorite songs live. Subscribe to our YouTube channel for new covers every week!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredVideos.map((video, index) => (
            <div key={index} className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 ${video.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              {video.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  Featured
                </div>
              )}
              
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${video.featured ? 'h-80' : 'h-48'}`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-red-600/80 backdrop-blur-sm p-4 rounded-full hover:bg-red-600 transition-colors">
                    <Play size={32} className="text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.views}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Genres We Cover</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Subscribe for More</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-3">
              <Youtube size={20} />
              Subscribe on YouTube
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <ExternalLink size={16} />
              View All Videos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;