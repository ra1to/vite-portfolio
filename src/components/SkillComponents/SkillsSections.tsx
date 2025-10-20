import { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  // Frontend
  {
    SkillName: "HTML/CSS", 
    SkillLevel: 90, 
    Category: "Frontend",
    Icon: "devicon-html5-plain",
    Description: "Creating responsive, accessible and semantic markup with modern CSS techniques"
  },
  { 
    SkillName: "Typescript", 
    SkillLevel: 60, 
    Category: "Frontend",
    Icon: "devicon-typescript-plain",
    Description: "ES6+, async/await, DOM manipulation, and modern TS patterns"
  },
  { 
    SkillName: "React", 
    SkillLevel: 50, 
    Category: "Frontend",
    Icon: "devicon-react-original",
    Description: "Building complex UI with hooks, context API, and state management"
  },
  { 
    SkillName: "Tailwind CSS", 
    SkillSkillLevel: 70, 
    Category: "Frontend",
    Icon: "devicon-tailwindcss-plain",
    Description: "Utility-first approach for rapid UI development with custom configurations"
  },

  { SkillName: "Next.js", 
    SkillSkillLevel: 70, 
    Category: "Frontend",
    Icon: "devicon-nextjs-plain",
    Description: "Utility-first approach for rapid UI development with custom configurations"
  },

  // Backend
  { 
    SkillName: "Node.js", 
    SkillLevel: 50, 
    Category: "Backend",
    Icon: "devicon-nodejs-plain",
    Description: "Server-side JavaScript, RESTful APIs, and microservices"
  },
  { 
    SkillName: "Supabase", 
    SkillLevel: 65, 
    Category: "Backend",
    Icon: "devicon-supabase-plain",
    Description: "Relational database design, complex queries, and performance optimization"
  },

  // Tools
  { 
    SkillName: "Git/GitHub", 
    SkillLevel: 50, 
    Category: "Tools",
    Icon: "devicon-git-plain",
    Description: "Version control, collaborative workflows, and CI/CD integration"
  },
  { 
    SkillName: "Figma", 
    SkillLevel: 45, 
    Category: "Tools",
    Icon: "devicon-figma-plain",
    Description: "UI/UX design, prototyping, and design system management"
  },
  { 
    SkillName: "VS Code", 
    SkillLevel: 70, 
    Category: "Tools",
    Icon: "devicon-vscode-plain",
    Description: "Advanced IDE customization, extensions, and productivity workflows"
  },
];

const categories = ["All","Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [,setMounted] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Add the DevIcon stylesheet to the document head
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    
    AOS.init({ 
      duration: 1000, 
      once: true,
      mirror: false,
      easing: 'ease-out-cubic'
    });
    
    setMounted(true);
    
    return () => {
      document.head.removeChild(link);
    };
  }, [setMounted]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  
  // Sort skills by SkillLevel (highest first)
  const sortedSkills = [...filteredSkills].sort((a, b) => b.SkillLevel - a.SkillLevel);
  
  // Split skills into two arrays for the two scrolling rows
  const firstRowSkills = [...sortedSkills];
  const secondRowSkills = [...sortedSkills]; // Duplicate to ensure we have enough for both rows
  
  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };
  
  // Calculate progress color based on SkillLevel
  const getProgressColor = (SkillLevel) => {
    if (SkillLevel >= 90) return "from-emerald-500 to-green-400";
    if (SkillLevel >= 80) return "from-blue-500 to-cyan-400";
    if (SkillLevel >= 70) return "from-indigo-500 to-blue-400";
    if (SkillLevel >= 60) return "from-violet-500 to-purple-400";
    if (SkillLevel >= 50) return "from-pink-500 to-rose-400";
    return "from-red-500 to-orange-400";
  };

  // Get category background style
  const getCategoryStyle = (category) => {
    switch(category) {
      case "Frontend": return "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20";
      case "Backend": return "bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20";
      case "Tools": return "bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-amber-500/20";
      default: return "bg-gradient-to-br from-gray-500/10 to-slate-500/10 border-gray-500/20";
    }
  };

  // Calculate mastery SkillLevel text
  const getMasterySkillLevel = (SkillLevel) => {
    if (SkillLevel >= 90) return "Expert";
    if (SkillLevel >= 80) return "Advanced";
    if (SkillLevel >= 70) return "Proficient";
    if (SkillLevel >= 50) return "Intermediate";
    return "Beginner";
  };

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-4 relative overflow-hidden" data-aos="fade-up">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-secondary/30 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left" data-aos="fade-right">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Technical Skills</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full transition-all duration-300 capitalize",
                "border shadow-sm text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-primary/20"
                  : "bg-card border-border hover:bg-card/80 hover:border-primary/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scrolling skills rows */}
        <div className="mb-16 overflow-hidden" data-aos="fade-up">
          {/* First row - scrolling right */}
          <div className="relative mb-8 py-4">
            <div className="skills-scroll-container skills-scroll-right">
              <div className="skills-scroll-content">
                {firstRowSkills.map((skill) => (
                  <div
                    key={`row1-${skill.name}`}
                    className={cn(
                      "skills-card bg-card border rounded-xl overflow-hidden shadow-md transition-all duration-300 mx-4",
                      "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                      getCategoryStyle(skill.category),
                      selectedSkill?.name === skill.name ? "ring-2 ring-primary" : ""
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <i className={`${skill.icon} text-2xl mr-3 text-primary/80`}></i>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                          {getMasterySkillLevel(skill.SkillLevel)}
                        </span>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-secondary/50 mb-2">
                        <div
                          style={{ width: `${skill.SkillLevel}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${getProgressColor(skill.SkillLevel)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold">
                          {skill.SkillLevel}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate skills to ensure continuous scrolling */}
                {firstRowSkills.map((skill) => (
                  <div
                    key={`row1-dupe-${skill.name}`}
                    className={cn(
                      "skills-card bg-card border rounded-xl overflow-hidden shadow-md transition-all duration-300 mx-4",
                      "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                      getCategoryStyle(skill.category)
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <i className={`${skill.icon} text-2xl mr-3 text-primary/80`}></i>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                          {getMasterySkillLevel(skill.SkillLevel)}
                        </span>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-secondary/50 mb-2">
                        <div
                          style={{ width: `${skill.SkillLevel}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${getProgressColor(skill.SkillLevel)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold">
                          {skill.SkillLevel}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Second row - scrolling left */}
          <div className="relative py-4">
            <div className="skills-scroll-container skills-scroll-left">
              <div className="skills-scroll-content">
                {secondRowSkills.map((skill) => (
                  <div
                    key={`row2-${skill.name}`}
                    className={cn(
                      "skills-card bg-card border rounded-xl overflow-hidden shadow-md transition-all duration-300 mx-4",
                      "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                      getCategoryStyle(skill.category),
                      selectedSkill?.name === skill.name ? "ring-2 ring-primary" : ""
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <i className={`${skill.icon} text-2xl mr-3 text-primary/80`}></i>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                          {getMasterySkillLevel(skill.SkillLevel)}
                        </span>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-secondary/50 mb-2">
                        <div
                          style={{ width: `${skill.SkillLevel}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${getProgressColor(skill.SkillLevel)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold">
                          {skill.SkillLevel}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate skills to ensure continuous scrolling */}
                {secondRowSkills.map((skill) => (
                  <div
                    key={`row2-dupe-${skill.name}`}
                    className={cn(
                      "skills-card bg-card border rounded-xl overflow-hidden shadow-md transition-all duration-300 mx-4",
                      "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                      getCategoryStyle(skill.category)
                    )}
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center">
                          <i className={`${skill.icon} text-2xl mr-3 text-primary/80`}></i>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                          {getMasterySkillLevel(skill.SkillLevel)}
                        </span>
                      </div>
                      
                      <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-secondary/50 mb-2">
                        <div
                          style={{ width: `${skill.SkillLevel}%` }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${getProgressColor(skill.SkillLevel)}`}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground">
                          {skill.category}
                        </span>
                        <span className="text-sm font-semibold">
                          {skill.SkillLevel}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill details modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-card border rounded-xl p-6 max-w-md w-full mx-4 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-primary/10">
                    <i className={`${selectedSkill.icon} text-4xl text-primary`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        {selectedSkill.category}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                        {getMasterySkillLevel(selectedSkill.SkillLevel)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full h-3 rounded-full overflow-hidden bg-secondary/50 mb-3">
                  <div
                    style={{ width: `${selectedSkill.SkillLevel}%` }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${getProgressColor(selectedSkill.SkillLevel)}`}
                  />
                </div>
                
                <div className="text-right mb-4">
                  <span className="text-lg font-bold">{selectedSkill.SkillLevel}%</span>
                </div>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="text-muted-foreground">{selectedSkill.description}</p>
                </div>
                
                <button
                  className="mt-6 w-full py-2 rounded-md border border-border hover:bg-secondary transition-colors"
                  onClick={() => setSelectedSkill(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        
        </div>

      {/* CSS for scrolling animations */}
      <style jsx>{`
        .skills-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .skills-scroll-content {
          display: flex;
          width: fit-content;
        }
        
        .skills-card {
          flex: 0 0 auto;
          width: 280px;
        }
        
        /* Animation for right scrolling */
        .skills-scroll-right .skills-scroll-content {
          animation: scrollRight 60s linear infinite;
        }
        
        /* Animation for left scrolling */
        .skills-scroll-left .skills-scroll-content {
          animation: scrollLeft 60s linear infinite;
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Pause animations on hover */
        .skills-scroll-container:hover .skills-scroll-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}