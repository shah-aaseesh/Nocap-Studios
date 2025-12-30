
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup, useInView } from 'framer-motion';
import { Play, ArrowUpRight, Filter, ChevronRight, ArrowLeft, Clock, Eye, LayoutGrid, Building2, Megaphone, User, Layers, Monitor } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';
import { Typewriter } from './Typewriter';

interface WorkPageProps {
  onNavigate: (view: 'home' | 'work') => void;
  initialCategory?: string;
}

const CATEGORIES = ['All', 'Real Estate', 'Commercial', 'Personal Brand', 'Others', 'Landscape'];
const ITEMS_PER_PAGE = 8;

export const PROJECTS = [


  {
    id: 28,
    title: "Thought Leader",
    category: "Personal Brand",
    client: "Sarah Liu",
    impact: "+60% Reach",
    duration: "0:45",
    views: "9.5K",
    description: "Documentary-style profile highlighting thought leadership.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p3_dqupug.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p3_dqupug.jpg"
  },
  {
    id: 29,
    title: "Speaking Gig",
    category: "Personal Brand",
    client: "Mark Johnson",
    impact: "Brand Authority",
    duration: "0:52",
    views: "11.1K",
    description: "Dynamic reel showcasing keynote speaking moments.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p1_ohhzwi.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p1_ohhzwi.jpg"
  },
  {
    id: 30,
    title: "Behind the Scenes",
    category: "Personal Brand",
    client: "Creative Co",
    impact: "Engagement",
    duration: "0:38",
    views: "8.4K",
    description: "Authentic look at the creative process and daily life.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p2_u4rgno.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095104/p2_u4rgno.jpg"
  },
  {
    id: 31,
    title: "Influencer Lifestyle",
    category: "Personal Brand",
    client: "Jessica Chen",
    impact: "Viral Content",
    duration: "0:41",
    views: "22.3K",
    description: "High-energy lifestyle content for social media growth.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095077/p4_tcserx.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767095077/p4_tcserx.jpg"
  },




  {
    id: 8,
    title: "Luxury Estate Tour",
    category: "Real Estate",
    client: "Premium Estates",
    impact: "High Engagement",
    duration: "1:00",
    views: "5.2K",
    description: "Cinematic tour of a modern luxury property.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087755/r8_tc883v.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087755/r8_tc883v.jpg"
  },
  {
    id: 9,
    title: "Modern Home Showcase",
    category: "Real Estate",
    client: "Urban Living",
    impact: "Quick Sale",
    duration: "0:56",
    views: "8.1K",
    description: "Showcasing the elegance and design of a contemporary home.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087760/r1_kixm1a.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087760/r1_kixm1a.jpg"
  },
  {
    id: 10,
    title: "Architectural Marvel",
    category: "Real Estate",
    client: "Design Build Co",
    impact: "Brand Awareness",
    duration: "1:15",
    views: "10.5K",
    description: "Highlighting the unique architectural details of a custom build.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087987/r5_yfyuoh.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087987/r5_yfyuoh.jpg"
  },
  {
    id: 11,
    title: "Sky View Appartments",
    category: "Real Estate",
    client: "Skyline Properties",
    impact: "Lead Generation",
    duration: "0:45",
    views: "6.7K",
    description: "Aerial and interior views of a high-rise apartment complex.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087636/r3_mj1bt6.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087636/r3_mj1bt6.jpg"
  },
  {
    id: 12,
    title: "Country Side Villa",
    category: "Real Estate",
    client: "Country Living",
    impact: "Targeted Reach",
    duration: "1:10",
    views: "9.3K",
    description: "Relaxing tour of a beautiful countryside villa.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087661/r7_saivga.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087661/r7_saivga.jpg"
  },
  {
    id: 13,
    title: "Modern Penthouse Tour",
    category: "Real Estate",
    client: "Elite Interiors",
    impact: "Luxury Showcase",
    duration: "1:05",
    views: "11.2K",
    description: "A tour of a high-end penthouse with stunning city views.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767088017/r6_e0yssy.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767088017/r6_e0yssy.jpg"
  },
  {
    id: 14,
    title: "Suburban Dream Home",
    category: "Real Estate",
    client: "Family Homes",
    impact: "Community Reach",
    duration: "0:58",
    views: "7.8K",
    description: "Warm and inviting tour of a spacious suburban family home.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087726/r2_vyrw80.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767087726/r2_vyrw80.jpg"
  },
  {
    id: 15,
    title: "Urban Brand Story",
    category: "Commercial",
    client: "Metro Lifestyle",
    impact: "Brand Awareness",
    duration: "0:42",
    views: "15.3K",
    description: "Dynamic urban-themed commercial connecting with modern youth culture.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767091959/c6_mjwyum.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767091959/c6_mjwyum.jpg"
  },
  {
    id: 16,
    title: "Eco-Tech Innovation",
    category: "Commercial",
    client: "Green Future",
    impact: "Lead Generation",
    duration: "0:55",
    views: "21.0K",
    description: "Highlighting sustainable technology with clean, futuristic visuals.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092010/c5_sjva0e.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092010/c5_sjva0e.jpg"
  },
  {
    id: 17,
    title: "Fitness App Launch",
    category: "Commercial",
    client: "FitLife Pro",
    impact: "App Installs",
    duration: "0:30",
    views: "55.4K",
    description: "High-energy commercial showcasing the features of a new fitness application.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092051/c1_v8psf8.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092051/c1_v8psf8.jpg"
  },
  {
    id: 18,
    title: "Gourmet Coffee Ad",
    category: "Commercial",
    client: "Bean & Brew",
    impact: "Sales Boost",
    duration: "0:25",
    views: "32.1K",
    description: "sensory-focused commercial highlighting the aroma and taste of premium coffee.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092106/c4_ypoec8.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092106/c4_ypoec8.jpg"
  },
  {
    id: 19,
    title: "Corporate Vision",
    category: "Commercial",
    client: "Global Enterprises",
    impact: "Recruitment",
    duration: "1:15",
    views: "12.8K",
    description: "Inspiring video communicating the company's long-term vision and values.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092166/c3_w96awi.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092166/c3_w96awi.jpg"
  },
  {
    id: 20,
    title: "Automotive Reveal",
    category: "Commercial",
    client: "AutoMotion",
    impact: "Pre-orders",
    duration: "0:45",
    views: "89.2K",
    description: "Sleek and mysterious reveal of a new luxury vehicle model.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767091956/c2_bsttqj.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767091956/c2_bsttqj.jpg"
  },

  {
    id: 21,
    title: "Creative Studio Vlog",
    category: "Others",
    client: "Creator Hub",
    impact: "Community Growth",
    duration: "0:45",
    views: "12.5K",
    description: "Behind-the-scenes look at a modern creative studio environment.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092938/03_cwinv5.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092938/03_cwinv5.jpg"
  },
  {
    id: 22,
    title: "Fashion Week Highlights",
    category: "Others",
    client: "Style Magazine",
    impact: "Trend Setting",
    duration: "0:38",
    views: "45.1K",
    description: "Energetic montage of the latest runway trends and backstage moments.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092938/02_pohmwj.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092938/02_pohmwj.jpg"
  },
  {
    id: 23,
    title: "Travel Documentary",
    category: "Others",
    client: "Wanderlust TV",
    impact: "Viewer Engagement",
    duration: "1:15",
    views: "28.9K",
    description: "Cinematic travelogue capturing the essence of remote destinations.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092951/05_zrj1wd.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092951/05_zrj1wd.jpg"
  },
  {
    id: 24,
    title: "Culinary Arts Series",
    category: "Others",
    client: "Chef's Table",
    impact: "Series Launch",
    duration: "0:50",
    views: "33.4K",
    description: "Mouth-watering visuals of gourmet food preparation and plating.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092961/04_xalxlm.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092961/04_xalxlm.jpg"
  },
  {
    id: 25,
    title: "Extreme Sports Promo",
    category: "Others",
    client: "Adrenalin Rush",
    impact: "Event Hype",
    duration: "0:35",
    views: "67.2K",
    description: "High-octane action shots from various extreme sports events.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092955/01_mdxisl.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767092955/01_mdxisl.jpg"
  },
  {
    id: 26,
    title: "Cinematic City Vibes",
    category: "Commercial",
    client: "Urban Life",
    impact: "Brand Awareness",
    duration: "0:57",
    views: "15.2K",
    description: "Cinematic shots of city life and urban architecture.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767093476/c7_yxwa6l.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767093476/c7_yxwa6l.jpg",
    isLandscape: true
  },
  {
    id: 27,
    title: "Modern Real Estate Tour",
    category: "Real Estate",
    client: "Luxury Estates",
    impact: "Property Showcase",
    duration: "1:05",
    views: "18.5K",
    description: "Capturing the essence of luxury living spaces.",
    video: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767093529/r9_cocqfo.mp4",
    image: "https://res.cloudinary.com/dkgvjf3nk/video/upload/v1767093529/r9_cocqfo.jpg",
    isLandscape: true
  }
];

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, initialCategory = 'All' }) => {
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [columns, setColumns] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { margin: "-100px" });

  // Update active filter when initialCategory changes
  useEffect(() => {
    setActiveFilter(initialCategory);
    setCurrentPage(1);
  }, [initialCategory]);

  // Reset page when filter changes internally
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Handle responsive column count
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else if (window.innerWidth < 1280) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const filteredProjects = activeFilter === 'Landscape'
    ? PROJECTS.filter(p => (p as any).isLandscape)
    : activeFilter === 'All'
      ? PROJECTS.filter(p => !(p as any).isLandscape)
      : PROJECTS.filter(p => p.category === activeFilter && !(p as any).isLandscape);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Distribute projects into columns
  const displayColumns = activeFilter === 'Landscape'
    ? (columns > 1 ? 2 : 1)
    : columns;

  const columnProjects = Array.from({ length: displayColumns }, () => [] as typeof PROJECTS);

  if (activeFilter === 'Landscape') {
    // Distribute landscape projects round-robin into 2 columns (or 1 on mobile)
    paginatedProjects.forEach((project, index) => {
      columnProjects[index % displayColumns].push(project);
    });
  } else {
    const landscapeProjects = paginatedProjects.filter(p => (p as any).isLandscape);
    const portraitProjects = paginatedProjects.filter(p => !(p as any).isLandscape);

    // 1. Distribute portrait projects first (Round Robin)
    portraitProjects.forEach((project, index) => {
      columnProjects[index % displayColumns].push(project);
    });

    // 2. Inject landscape projects into the middle column
    landscapeProjects.forEach((project, i) => {
      // Target the middle column (or 0 if only 1 column)
      const targetColIndex = Math.floor(displayColumns / 2);
      const targetCol = columnProjects[targetColIndex];

      // Insert at index 1 + i (to stack them sequentially after the first item)
      // ensuring they are "covered" by the top item.
      const insertIndex = targetCol.length > 0 ? 1 + i : 0;
      targetCol.splice(insertIndex, 0, project);
    });
  }

  return (
    <div className="bg-background-dark pt-20 md:pt-44 pb-32 min-h-screen relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium tracking-wide">Back to Home</span>
          </button>
        </div>


        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
          >
            <Typewriter start={isTitleInView} segments={[{ text: "Our Work" }]} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-body text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Browse our curated collection of high-impact video reels. From viral real estate tours to cinematic brand stories, we create content that converts.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat, idx) => {
            const icons = {
              'All': LayoutGrid,
              'Real Estate': Building2,
              'Commercial': Megaphone,
              'Personal Brand': User,
              'Others': Layers,
              'Landscape': Monitor
            };
            const Icon = icons[cat as keyof typeof icons] || Filter;
            const isActive = activeFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${isActive
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-surface-light/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'} />
                <span className="text-sm font-bold tracking-wide">{cat === 'All' ? 'All Reels' : cat}</span>
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="flex gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {columnProjects.map((col, colIndex) => (
              <div key={colIndex} className="flex-1 flex flex-col gap-6">
                {col.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative overflow-hidden bg-surface-dark rounded-2xl cursor-pointer ring-1 ring-white/5 hover:ring-primary/50 transition-all duration-500 shadow-2xl w-full ${
                      // @ts-ignore
                      project.isLandscape
                        ? 'aspect-[16/10]'
                        : 'aspect-[9/16]'
                      }`}
                  >
                    {/* Video Player / Lazy Image Header */}
                    <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                      <VideoPlayer
                        src={project.video || ""}
                        poster={project.image}
                        autoPlay={false}
                        muted={true}
                        loop={true}
                        isLandscape={(project as any).isLandscape}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Top Overlay Stats */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10 pointer-events-none">
                      <div className="flex flex-col gap-2">
                        <div className="px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
                          <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] leading-none">{project.category}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-40 text-center flex flex-col items-center gap-6"
          >
            <h3 className="text-4xl font-heading font-bold uppercase text-gray-600">No Reels in this Category</h3>
            <button
              onClick={() => setActiveFilter('All')}
              className="text-primary font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
            >
              <ArrowLeft size={24} />
            </button>
            <span className="text-white font-mono">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
