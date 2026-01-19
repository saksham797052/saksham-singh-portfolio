"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Briefcase, Mail, Linkedin, Github, ExternalLink, Sparkles, BookOpen, Zap, ArrowRight, Map, Trophy, Star, Heart, Coffee, Rocket, Target, Compass, Flame, ChevronRight, MousePointerClick } from "lucide-react";

const chapters = [
  { id: "prologue", title: "Prologue", subtitle: "The Beginning", icon: Compass },
  { id: "chapter1", title: "Chapter I", subtitle: "The Origin Story", icon: BookOpen },
  { id: "chapter2", title: "Chapter II", subtitle: "The Arsenal", icon: Zap },
  { id: "chapter3", title: "Chapter III", subtitle: "The Quests", icon: Target },
  { id: "chapter4", title: "Chapter IV", subtitle: "The Journey", icon: Map },
  { id: "epilogue", title: "Epilogue", subtitle: "The Connection", icon: Heart },
];

const skills = [
  { 
    category: "Languages", 
    items: ["C", "JavaScript", "Python"],
    icon: Code2,
    color: "from-amber-500 to-orange-500",
    description: "The tongues I speak fluently"
  },
  { 
    category: "Cyber Security", 
    items: ["Ethical Hacking", "Security Research", "Penetration Testing", "System Monitoring"],
    icon: Sparkles,
    color: "from-red-500 to-rose-500",
    description: "Defending the digital realm"
  },
  { 
    category: "IoT & Networks", 
    items: ["IoT Systems", "Secure Device Communication", "Networking", "Cloud Basics"],
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
    description: "Connecting the world securely"
  },
  { 
    category: "Tools", 
    items: ["Kali Linux", "Git", "Wireshark", "Burp Suite"],
    icon: Trophy,
    color: "from-emerald-500 to-teal-500",
    description: "My trusted companions"
  },
];

const projects = [
  {
    title: "Basic Keylogger",
    description: "A Python-based ethical system monitoring tool for security learning and research. Captures keystrokes for educational purposes in controlled environments.",
    tech: ["Python", "Pynput", "Logging", "Security"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    questType: "Security Quest",
    difficulty: 3,
    xp: 1500,
  },
  {
    title: "Password Strength Checker",
    description: "A security tool that evaluates password strength based on length, complexity, character diversity, and common patterns to help users create secure passwords.",
    tech: ["Python", "Regex", "Security Analysis"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    questType: "Defense Quest",
    difficulty: 2,
    xp: 1000,
  },
  {
    title: "NayaSa Circular Marketplace",
    description: "A frontend project focused on sustainability and resource reuse, creating a platform for circular economy and eco-friendly commerce.",
    tech: ["JavaScript", "HTML", "CSS", "UI/UX"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    questType: "Build Quest",
    difficulty: 3,
    xp: 1200,
  },
];

const achievements = [
  {
    title: "Runner-Up at Rajasthan UG Hackathon",
    event: "National-Level Competition",
    date: "2024",
    description: "Secured 2nd place among talented teams across India, showcasing innovative problem-solving and technical skills.",
    icon: Trophy,
  },
];

const experiences = [
  {
    role: "Runner-Up",
    company: "Rajasthan UG Hackathon",
    period: "2024",
    description: "Secured 2nd place at the national-level hackathon, competing against talented teams across India with an innovative solution.",
    milestone: "Achievement Unlocked",
    achievement: "🏆 2nd Place Winner",
  },
  {
    role: "B.Tech Student",
    company: "IoT & Cyber Security",
    period: "2023 - Present",
    description: "Specializing in IoT systems and Cyber Security. Building real-world projects and learning by doing.",
    milestone: "Current Chapter",
    achievement: "Security Enthusiast",
  },
  {
    role: "Self-Taught Developer",
    company: "Independent Learning",
    period: "2022 - Present",
    description: "Learning C, JavaScript, Python through hands-on projects. Exploring ethical hacking and system security.",
    milestone: "Growth Arc",
    achievement: "3+ Projects Built",
  },
  {
    role: "Curious Explorer",
    company: "Jaipur, Rajasthan",
    period: "The Beginning",
    description: "Started with curiosity about how systems work and how to secure them. The journey began here.",
    milestone: "Origin",
    achievement: "Foundation Laid",
  },
];

const storyStats = [
  { label: "Hackathon", value: "🏆 2nd", icon: Trophy },
  { label: "Projects Built", value: "3+", icon: Code2 },
  { label: "Skills Learning", value: "10+", icon: Star },
  { label: "Curiosity Level", value: "100%", icon: Coffee },
];

const storyChoices = [
  { text: "Explore Skills", target: "chapter2", icon: Zap },
  { text: "View Quests", target: "chapter3", icon: Target },
  { text: "Read Journey", target: "chapter4", icon: Map },
];

function TypewriterText({ text, delay = 0, onComplete }: { text: string; delay?: number; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setComplete(true);
        onComplete?.();
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text, started, onComplete]);

  return (
    <span>
      {displayedText}
      {!complete && <span className="animate-pulse">|</span>}
    </span>
  );
}

function InteractiveParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(201, 169, 98, 0.6) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -200, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,15,0.8)_70%)]" />
    </div>
  );
}

function ChapterIndicator({ activeChapter }: { activeChapter: string }) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
    >
      {chapters.map((chapter, index) => {
        const Icon = chapter.icon;
        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <motion.div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeChapter === chapter.id
                    ? "bg-primary/20 border-2 border-primary"
                    : "bg-card/50 border border-border group-hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <Icon className={`w-4 h-4 transition-colors ${
                  activeChapter === chapter.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                }`} />
              </motion.div>
              {index < chapters.length - 1 && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-px h-3 ${
                  activeChapter === chapter.id ? "bg-primary" : "bg-muted-foreground/30"
                }`} />
              )}
            </div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: activeChapter === chapter.id ? 1 : 0, x: activeChapter === chapter.id ? 0 : -10 }}
              className="text-xs font-body text-primary whitespace-nowrap"
            >
              {chapter.subtitle}
            </motion.span>
          </a>
        );
      })}
    </motion.nav>
  );
}

function StoryProgressBar({ progress }: { progress: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
    >
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
        <span className="text-xs font-body text-muted-foreground">Story Progress</span>
        <div className="w-32 h-1.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-amber-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs font-body text-primary font-medium">{Math.round(progress)}%</span>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [showChoices, setShowChoices] = useState(false);

  return (
    <section
      id="prologue"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <InteractiveParticles />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.1)_0%,_transparent_50%)]" />
      
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dashed border-primary/10 rounded-full"
            />
            <Sparkles className="w-14 h-14 text-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
        >
          <Flame className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-body text-primary">New Story Available</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground font-body text-lg tracking-[0.2em] uppercase mb-4"
        >
          Welcome to the interactive story of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold mb-6"
        >
          <span className="gold-gradient">Saksham Raj Singh</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground font-body font-light mb-8 min-h-[32px]"
        >
          <TypewriterText 
            text="B.Tech IoT & Cyber Security • Hackathon Runner-Up • Builder" 
            delay={1200}
            onComplete={() => setShowChoices(true)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10"
        >
          {storyStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
                className="p-3 rounded-xl bg-card/30 border border-border/50 backdrop-blur-sm"
              >
                <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-xs font-body text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {showChoices && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-sm font-body text-muted-foreground flex items-center gap-2">
                <MousePointerClick className="w-4 h-4" />
                Choose your path
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {storyChoices.map((choice, index) => {
                  const Icon = choice.icon;
                  return (
                    <motion.a
                      key={choice.text}
                      href={`#${choice.target}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-foreground font-body text-sm transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      {choice.text}
                      <ChevronRight className="w-3 h-3 text-muted-foreground" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/saksham-raj-singh-75582329a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-card border border-border text-primary hover:border-primary/50 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://github.com/saksham797052"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-card border border-border text-primary hover:border-primary/50 transition-colors"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:sakshamrajsingh797@gmail.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl bg-card border border-border text-primary hover:border-primary/50 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#chapter1" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs font-body tracking-wider">Scroll to begin</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function ChapterTitle({ title, subtitle, icon: Icon }: { title: string; subtitle: string; icon: React.ElementType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.div 
        className="inline-flex items-center gap-4 mb-4"
        whileInView={{ scale: [0.9, 1] }}
        viewport={{ once: true }}
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
        <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
      </motion.div>
      <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-2">{title}</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">{subtitle}</h2>
    </motion.div>
  );
}

function AboutSection() {
  const [activeNarrative, setActiveNarrative] = useState(0);
  const narratives = [
    "Every great story begins with a spark of curiosity.",
    "Mine ignited in the world of cyber security, where defense meets discovery.",
    "Where learning by building is the ultimate superpower.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNarrative((prev) => (prev + 1) % narratives.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [narratives.length]);

  return (
    <section id="chapter1" className="relative py-32 px-6 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(201,169,98,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <ChapterTitle title="Chapter I" subtitle="The Origin Story" icon={BookOpen} />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-indigo-500/30 to-primary/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="relative rounded-2xl overflow-hidden border border-border">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/5ce1dad0-1ec5-47d4-8c8f-1bd0906c7026/1231-1768851445624.jpg?width=800&height=800&resize=contain"
                  alt="Profile"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-body text-foreground">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative h-24 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeNarrative}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-foreground font-display leading-relaxed"
                >
                  &ldquo;{narratives[activeNarrative]}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex gap-2">
              {narratives.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveNarrative(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === activeNarrative ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              As a B.Tech student specializing in IoT & Cyber Security from Jaipur, Rajasthan,
              I believe in learning by building real-world projects rather than just theory.
              My curiosity drives me to explore ethical security research and secure systems.
            </p>

            <p className="text-muted-foreground/80 font-body leading-relaxed">
              Proactive and curious, I&apos;m constantly expanding my skills in networking, cloud
              fundamentals, and practical security tools. Each project is a step towards mastering
              the art of digital defense.
            </p>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://www.linkedin.com/in/saksham-raj-singh-75582329a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-background font-body font-medium text-sm"
              >
                <Linkedin className="w-4 h-4" />
                View Full Story
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#chapter2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-foreground font-body font-medium text-sm hover:border-primary/50 transition-colors"
              >
                Continue Reading
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  return (
    <section id="chapter2" className="relative py-32 px-6 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ChapterTitle title="Chapter II" subtitle="The Arsenal" icon={Zap} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto"
        >
          Every adventurer needs their tools. These are the weapons I&apos;ve mastered on my journey.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, groupIndex) => {
            const Icon = skillGroup.icon;
            const isSelected = selectedSkill === groupIndex;
            
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                onClick={() => setSelectedSkill(isSelected ? null : groupIndex)}
                className="cursor-pointer"
              >
                <motion.div 
                  className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected 
                      ? "bg-card border-primary" 
                      : "bg-card/50 border-border hover:border-primary/50"
                  }`}
                  whileHover={{ y: -4 }}
                  layout
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-10 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skillGroup.color} bg-opacity-20`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <motion.div
                        animate={{ rotate: isSelected ? 180 : 0 }}
                        className="text-muted-foreground"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {skillGroup.category}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mb-4">
                      {skillGroup.description}
                    </p>
                    
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-wrap gap-2 pt-4 border-t border-border/50"
                        >
                          {skillGroup.items.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.05 }}
                              className="px-3 py-1.5 text-sm font-body bg-secondary/50 rounded-lg text-foreground/90"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isSelected && (
                      <div className="flex gap-1">
                        {skillGroup.items.slice(0, 3).map((skill) => (
                          <span key={skill} className="text-xs font-body text-muted-foreground/60">
                            {skill}
                            {skill !== skillGroup.items[2] && " •"}
                          </span>
                        ))}
                        {skillGroup.items.length > 3 && (
                          <span className="text-xs font-body text-primary">+{skillGroup.items.length - 3}</span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="chapter3" className="relative py-32 px-6 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(201,169,98,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ChapterTitle title="Chapter III" subtitle="The Quests" icon={Target} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-12 max-w-2xl mx-auto"
        >
          Each project is a quest completed. Click to reveal the full story.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onClick={() => setExpandedProject(isExpanded ? null : index)}
                className="cursor-pointer group"
              >
                <motion.div 
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isExpanded ? "bg-card border-primary" : "bg-card border-border hover:border-primary/50"
                  }`}
                  layout
                >
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-1 text-xs font-body rounded-md bg-primary/90 text-background font-medium">
                        {project.questType}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-card/80 backdrop-blur-sm">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      <span className="text-xs font-body text-foreground">{project.xp} XP</span>
                    </div>
                  </div>

                  <div className="p-6 -mt-8 relative">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Flame
                          key={i}
                          className={`w-3 h-3 ${i < project.difficulty ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                        />
                      ))}
                      <span className="text-xs font-body text-muted-foreground ml-1">Difficulty</span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <AnimatePresence>
                      {isExpanded ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <p className="text-muted-foreground font-body text-sm mb-4">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-body px-2 py-1 rounded bg-secondary text-foreground/80"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <motion.button
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-sm font-body text-primary"
                          >
                            View Quest Details <ExternalLink className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      ) : (
                        <motion.p 
                          className="text-muted-foreground font-body text-sm line-clamp-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {project.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="chapter4" className="relative py-32 px-6 min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <ChapterTitle title="Chapter IV" subtitle="The Journey" icon={Map} />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px">
            <div className="h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          </div>

          {experiences.map((exp, index) => {
            const isActive = activeExp === index;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                onMouseEnter={() => setActiveExp(index)}
              >
                <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
                  <motion.div 
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-card border-primary shadow-lg shadow-primary/10" 
                        : "bg-card/50 border-border hover:border-primary/30"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                      <span className="px-2 py-1 text-xs font-body rounded bg-primary/10 text-primary">
                        {exp.milestone}
                      </span>
                      <span className="text-primary font-body text-sm">{exp.period}</span>
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-muted-foreground font-body font-medium">{exp.company}</p>
                    <p className="text-muted-foreground/70 font-body text-sm mt-3">{exp.description}</p>
                    
                    <div className={`flex items-center gap-2 mt-4 ${isLeft ? "md:justify-end" : ""}`}>
                      <Trophy className="w-4 h-4 text-primary" />
                      <span className="text-xs font-body text-foreground">{exp.achievement}</span>
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    className={`w-4 h-4 rounded-full border-4 border-background transition-colors ${
                      isActive ? "bg-primary" : "bg-muted-foreground/50"
                    }`}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                  />
                </div>

                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section id="epilogue" className="relative py-32 px-6 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ChapterTitle title="Epilogue" subtitle="The Connection" icon={Heart} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl text-foreground font-display mb-4">
            Every story continues with new connections.
          </p>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just say hello —
            I&apos;d love to hear from you and start a new chapter together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.a
            href="https://www.linkedin.com/in/saksham-raj-singh-75582329a/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredButton("linkedin")}
            onMouseLeave={() => setHoveredButton(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-background font-body font-medium overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-400 to-primary"
              initial={{ x: "-100%" }}
              animate={{ x: hoveredButton === "linkedin" ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
            />
            <Linkedin className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Connect on LinkedIn</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <motion.a
            href="mailto:sakshamrajsingh797@gmail.com"
            onMouseEnter={() => setHoveredButton("email")}
            onMouseLeave={() => setHoveredButton(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-primary text-primary font-body font-medium hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send an Email
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12 border-t border-border/30"
        >
          <p className="font-display text-xl text-muted-foreground italic mb-6">
            &quot;The best stories are yet to be written.&quot;
          </p>
          
          <div className="flex justify-center gap-4 mb-6">
            <motion.a
              href="https://www.linkedin.com/in/saksham-raj-singh-75582329a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/saksham797052"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:sakshamrajsingh797@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          <p className="font-body text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Saksham Raj Singh. Crafted with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeChapter, setActiveChapter] = useState("prologue");
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = chapters.map((c) => document.getElementById(c.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveChapter(chapters[index].id);
          }
        }
      });

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-background"
        >
          <StoryProgressBar progress={scrollProgress} />
          <ChapterIndicator activeChapter={activeChapter} />
          
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
