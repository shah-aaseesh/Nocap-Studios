
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MousePointerClick, User, Layers } from 'lucide-react';

const CATEGORIES = [
  {
    title: "Real Estate",
    description: "Luxury property tours and architectural showcases that drive high-value transactions. We capture the essence of space and lifestyle.",
    icon: <Building2 />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYyU6IAlNR9tiOjaPMfbWYK3g_Hx-RL90mqBrFxaq46WqhlXiwOS4ljWgJxsApEuzycElhqoX0KgKKdOvCe3N6wqXHI7FAYffqLcvXJgqntMSpZzyB9SmSWqo55FOVyaxpKjc_2SSXZGx4b_w_EtsNNiMiPzIwLb4ssxmmeArVpSQyezc9J5mGk4SM_IIK9ZZzGB_XeikALzphyqkbcbefIgS4JpHGzwa6wTJEfMes1pJ12iErTsGLKL9s-mfQboVcBn_uQvXhlgqz",
    gridSpan: "lg:col-span-1 h-[350px] lg:h-auto",
    filterId: "Real Estate"
  },
  {
    title: "Commercials",
    description: "High-octane advertising content designed for conversion and brand recall.",
    icon: <MousePointerClick />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiTEDHHyom3XRrAJWaWW8hsY_upVoGWvcrImw5-4eBeFwkw9GwVEJD_l74IplzkFxfNUpyUE2GFGfscVHfqfWnhL7FNuB2aCvpQLnBhL8RL4rEVwyQIaZ9HcMiTT5wcjoYYA3qw7TD_Kuf5ZkrrjO83b3Jj3zkJDtWrW7ol3jiDm8TYwBwjsSwHW6xN7pNDNrNDSEP-NVvAmQCyKW24YT6OggGR8tpfR-OqNRoKu_A9kJW8qdgEoOtm3EtoZ-WgL1Q67nMJqx_CQcL",
    gridSpan: "lg:col-span-1 h-[350px] lg:h-auto",
    filterId: "Commercial"
  },
  {
    title: "Personal Brand",
    description: "Narrative-driven content for thought leaders and executives building a legacy.",
    icon: <User />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyAn2kRbwlFz4Z6pvjBjJCEHyg8i_NETkLnU2bM_JbdV3YzLsJsfiDjy7xrjh6k5igEaBUmgVerIAdzRma-oD3rhPnjIyXOMQ_DiOxjotOhPVFOfpv3zxL0B1Ldw-zZbT0leyaRBgTgUY8MiNmynGRrORrg2gEK4rs4kV3tQsoPaJDmCzkGP9LWl7JFHPvv0vscF2V6lDN3-rBEK3WOH0Cfnta6Nm1dKQyrJFxYxz3DUSvuNL75x74BhOTfkHPyEWf-Oq1n10Y6ZNw",
    gridSpan: "lg:col-span-1 h-[350px] lg:h-auto",
    filterId: "Personal Brand"
  },
  {
    title: "Others",
    description: "Diverse creative projects and specialized content tailored to unique requirements.",
    icon: <Layers />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    gridSpan: "lg:col-span-1 h-[350px] lg:h-auto",
    filterId: "Others"
  }
];

interface CategoriesProps {
  onNavigate?: (view: 'home' | 'work', category?: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onNavigate }) => {
  const handleCategoryClick = (category: string) => {
    if (onNavigate) {
      onNavigate('work', category);
    }
  };

  return (
    <section className="py-24 bg-background-dark relative" id="expertise">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mb-16 flex flex-col gap-4"
        >
          <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase">Categories</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 h-auto lg:h-[900px]">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              onClick={() => handleCategoryClick(cat.filterId)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden border border-white/10 hover:border-primary/50 transition-colors duration-500 cursor-pointer ${cat.gridSpan}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-center gap-3 mb-4 text-blue-200 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    {/* Fix: Explicitly cast to React.ReactElement<any> to resolve type mismatch when using cloneElement with custom props like 'size' */}
                    {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <span className="text-sm font-extrabold uppercase tracking-wider">Strategic Sector</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 uppercase leading-none">
                  {cat.title}
                </h3>
                <p className="text-gray-200 max-w-md text-sm md:text-base font-bold leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
