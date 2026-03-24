import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Users,
  Award,
  Heart,
  Camera,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  // High-quality temple images from reliable CDN URLs (Unsplash + Pexels)
  const templeImages = [
    {
      url: "https://images.unsplash.com/photo-1742987926920-b1c1aee8a77d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Golden Gopuram",
      description: "The majestic entrance of Tirupati Balaji Temple",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1678596485942-4635ea4b0ff4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFsYWppJTIwZ29kfGVufDB8fDB8fHww",
      caption: "Main Sanctum",
      description: "Lord Venkateswara's divine abode",
    },
    {
      url: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_11162494701_20200130180527_20200130180558.png",
      caption: "Tirumala Hills",
      description: "The sacred seven peaks at sunrise",
    },
    {
      url: "https://www.teahub.io/photos/full/42-425392_tirupati-balaji-hd-wallpaper-tirupati-balaji-original-aarti.jpg",
      caption: "Temple Architecture",
      description: "Intricate Dravidian architecture details",
    },
    {
      url: "https://kashiyatra.in/wp-content/uploads/2023/03/evening-ganga-aarti-dashashwamedh-ghat-4.jpg",
      caption: "Evening Aarti",
      description: "Divine ceremony at dusk",
    },
    {
      url: "https://mrwallpaper.com/images/high/lord-balaji-with-companions-8rrk043f5y22s85b.webp",
      caption: "Sacred Pond",
      description: "Pushkarini - The holy temple tank",
    },
  ];

  // Fallback images in case primary images fail
  const fallbackImages = [
    "https://images.pexels.com/photos/3541331/pexels-photo-3541331.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4434405/pexels-photo-4434405.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3184258/pexels-photo-3184258.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4434403/pexels-photo-4434403.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3541325/pexels-photo-3541325.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3541322/pexels-photo-3541322.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const handleImageError = (index) => {
    if (!imageErrors[index]) {
      setImageErrors((prev) => ({ ...prev, [index]: true }));
    }
  };

  const getCurrentImageUrl = () => {
    if (imageErrors[currentImageIndex]) {
      return fallbackImages[currentImageIndex];
    }
    return templeImages[currentImageIndex].url;
  };

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % templeImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, templeImages.length]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % templeImages.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(
      (prev) => (prev - 1 + templeImages.length) % templeImages.length,
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToImage = (index) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const quickLinks = [
    { icon: Calendar, text: "Book Darshan", link: "/booking", color: "amber" },
    {
      icon: MapPin,
      text: "How to Reach",
      link: "/how-to-visit",
      color: "yellow",
    },
    {
      icon: Clock,
      text: "Temple Timings",
      link: "/trip-planning",
      color: "orange",
    },
    { icon: Users, text: "Online Services", link: "/booking", color: "amber" },
  ];

  const highlights = [
    { number: "50,000+", label: "Daily Devotees", icon: Users },
    { number: "2000+", label: "Years of History", icon: Award },
    { number: "24/7", label: "Divine Worship", icon: Clock },
    { number: "7", label: "Sacred Hills", icon: Heart },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      text: "The divine experience at Tirupati Balaji is beyond words. The peaceful atmosphere and the powerful darshan filled my heart with immense joy.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      text: "Visiting this sacred temple was a life-changing experience. The architecture, the rituals, and the prasadam are truly special.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Venkatesh Iyer",
      location: "Chennai",
      text: "Every visit to Tirumala feels like a spiritual renewal. The management ensures a smooth darshan experience for all devotees.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1548291616-ae5f4cf6e1a6?auto=format&fit=crop&q=80&w=1600")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-800/30 to-amber-50/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-50 via-transparent to-amber-900/20 z-0" />

        {/* Animated Mandala Pattern */}
        <div className="absolute inset-0 z-0 opacity-30">
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            viewBox="0 0 200 200"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="rgba(245, 158, 11, 0.3)"
              strokeWidth="1"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="rgba(217, 119, 6, 0.4)"
              strokeWidth="1"
              animate={{ scale: [0.97, 1.03, 0.97] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
            />
            <motion.path
              d="M100,10 L100,190 M10,100 L190,100"
              stroke="rgba(245, 158, 11, 0.2)"
              strokeWidth="1"
              strokeDasharray="5,5"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-amber-600 font-display text-2xl md:text-3xl mb-4 tracking-[0.3em] uppercase">
                ॐ
              </span>
            </motion.div>

            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 mb-6"
            >
              Tirupati Balaji
            </h1>

            <p className="font-heading text-amber-800/80 text-lg md:text-xl mb-8 tracking-[0.2em] uppercase">
              Lord Venkateswara Temple
            </p>

            <div className="gold-divider w-48 mx-auto" />

            <p className="max-w-2xl mx-auto text-gray-700 font-body text-base md:text-lg leading-relaxed mb-12">
              Experience divine grace at one of the world's most sacred
              pilgrimage sites
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/history"
                className="group px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 
                           text-white font-heading font-bold tracking-widest uppercase text-sm rounded-full 
                           transition-all duration-300 shadow-lg shadow-amber-600/30
                           hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                Explore Temple
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/booking"
                className="group px-10 py-4 border-2 border-amber-600/50 text-amber-700 
                           font-heading font-bold tracking-widest uppercase text-sm rounded-full 
                           transition-all hover:bg-amber-50 hover:border-amber-600 hover:scale-105
                           flex items-center gap-2"
              >
                Book Darshan
                <Calendar
                  size={16}
                  className="group-hover:rotate-12 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase text-amber-600/70">
            Scroll
          </span>
          <ChevronDown size={20} className="text-amber-500" />
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  to={link.link}
                  className="group block text-center p-6 rounded-2xl bg-gradient-to-br from-white to-amber-50/50 
                           shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2
                           border border-amber-200/50"
                >
                  <div
                    className="w-14 h-14 rounded-xl bg-amber-100 
                                flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                  >
                    <link.icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-gray-800 font-semibold">{link.text}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div
                  className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text 
                              bg-gradient-to-r from-amber-700 to-yellow-600 mb-2"
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Gallery with Auto-Slide */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Camera className="text-amber-500" size={24} />
              <h2 className="text-3xl md:text-4xl font-display text-gray-800">
                Sacred Gallery
              </h2>
              <Camera className="text-amber-500" size={24} />
            </div>
            <div className="gold-divider w-32 mx-auto" />
            <p className="text-gray-600 mt-4">
              Experience the divine beauty of Tirupati Balaji Temple
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Main Image Container - Reduced height */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9] md:aspect-[16/8] lg:aspect-[16/7] bg-gradient-to-br from-amber-900/50 to-yellow-900/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={getCurrentImageUrl()}
                    alt={templeImages[currentImageIndex].caption}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(currentImageIndex)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Image Info Overlay - Adjusted padding */}
              <motion.div
                key={currentImageIndex + "-info"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white bg-gradient-to-t from-black/80 via-transparent to-transparent"
              >
                <h3 className="text-xl md:text-2xl font-display mb-1">
                  {templeImages[currentImageIndex].caption}
                </h3>
                <p className="text-amber-200 text-xs md:text-sm">
                  {templeImages[currentImageIndex].description}
                </p>
              </motion.div>

              {/* Auto-play Indicator */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full 
                   hover:bg-black/70 transition-all duration-300 z-10"
              >
                {isAutoPlaying ? (
                  <Pause size={18} className="text-white" />
                ) : (
                  <Play size={18} className="text-white" />
                )}
              </button>
            </div>

            {/* Navigation Buttons - Adjusted position */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md 
                 p-2 md:p-3 rounded-full hover:bg-black/70 transition-all duration-300 z-10
                 hover:scale-110"
            >
              <ChevronLeft size={20} className="text-white md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md 
                 p-2 md:p-3 rounded-full hover:bg-black/70 transition-all duration-300 z-10
                 hover:scale-110"
            >
              <ChevronRight size={20} className="text-white md:w-6 md:h-6" />
            </button>

            {/* Dots Indicator - Adjusted position */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
              {templeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`transition-all duration-300 ${
                    index === currentImageIndex
                      ? "w-6 md:w-8 h-1.5 md:h-2 bg-amber-500 rounded-full"
                      : "w-1.5 md:w-2 h-1.5 md:h-2 bg-white/50 rounded-full hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation - Reduced size */}
          <div className="mt-6 md:mt-8 flex justify-center gap-2 md:gap-3 overflow-x-auto pb-4">
            {templeImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden 
                     transition-all duration-300 hover:scale-110
                     ${index === currentImageIndex ? "ring-2 ring-amber-500 scale-105" : "opacity-70 hover:opacity-100"}`}
              >
                <img
                  src={imageErrors[index] ? fallbackImages[index] : image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(index)}
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 border-2 border-amber-500 rounded-lg" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Quote className="text-amber-500" size={24} />
              <h2 className="text-3xl md:text-4xl font-display text-gray-800">
                Devotee Experiences
              </h2>
              <Quote className="text-amber-500" size={24} />
            </div>
            <div className="gold-divider w-32 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 
                         border border-amber-200/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-yellow-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
              Plan Your Sacred Journey
            </h2>
            <p className="text-amber-200 text-lg mb-8 max-w-2xl mx-auto">
              Book your darshan online and experience divine grace at Tirupati
              Balaji Temple
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-amber-700 
                       font-heading font-bold tracking-widest uppercase text-sm rounded-full 
                       transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <Calendar size={18} />
              Book Darshan Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .gold-divider {
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #d97706,
            #f59e0b,
            #d97706,
            transparent
          );
        }
      `}</style>
    </div>
  );
};

export default Hero;
