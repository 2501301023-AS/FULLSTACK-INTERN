// Data.js
import React from 'react';

// Common CSS-in-JS design system tokens
export const themes = {
  bg: '#0a0a0a',
  cardBg: '#121212',
  accent: '#5865f2',
  textMain: '#ffffff',
  textMuted: '#94a3b8',
  border: '#1f2937'
};

export const portfolioData = {
  profile: {
    name: "Ram Mohan Dixit",
    title: "Senior MERN Stack Developer & Corporate Trainer",
    desc: "Proven expertise in building scalable, high-performance web applications and mentoring 800+ aspiring developers. Specialized in MongoDB, Express.js, React.js, and Node.js with hands-on experience in AWS deployment, CI/CD pipelines, and Docker.",
    aboutLong: "Senior MERN Stack Developer and Corporate Trainer with proven expertise in building scalable, high-performance web applications and mentoring 800+ aspiring developers. Specialized in MongoDB, Express.js, React.js, and Node.js with hands-on experience in AWS deployment, CI/CD pipelines, and Docker containerization. Reduced application load times by 40% through performance optimization.",
    email: "ramodixit76@gmail.com",
    phone: "+91-7510029715",
    stats: [
      { value: "800+", label: "Students Mentored" },
      { value: "50+", label: "Corporate Sessions" },
      { value: "40%", label: "Performance Boost" },
      { value: "3+", label: "Years Experience" }
    ]
  },
  skills: [
    { title: "Frontend Technologies", items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux", "Context API", "Responsive Design"] },
    { title: "Backend Technologies", items: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT, OAuth)"] },
    { title: "Database", items: ["MongoDB", "Mongoose", "NoSQL Database Design"] },
    { title: "DevOps & Cloud", items: ["AWS (EC2, S3)", "Docker", "CI/CD Pipelines", "Git", "GitHub", "Cloudinary", "Razorpay Integration"] },
    { title: "Tools & Soft Skills", items: ["VS Code", "Postman", "npm", "Webpack", "Babel", "Agile/Scrum", "Corporate Training", "Mentorship"] }
  ],
  experience: [
    {
      role: "MERN Developer cum Trainer",
      company: "AccioJob",
      date: "May 2025 – Present",
      bullets: [
        "Developing and deploying full-stack applications using MERN stack, ensuring optimal performance and scalability.",
        "Conducting comprehensive training sessions on JavaScript, React.js, Node.js, and modern web development practices.",
        "Mentoring students on building industry-ready projects and preparing them for technical interviews."
      ]
    },
    {
      role: "Full-Stack Developer cum Trainer",
      company: "Kodu - Powered by Dhurina",
      date: "September 2024 – May 2025",
      bullets: [
        "Architected and developed robust, scalable web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Delivered interactive training sessions to students on full-stack development and industry best practices."
      ]
    }
  ],
  projects: [
    {
      title: "Fyntl AI",
      desc: "Built interactive and responsive user interfaces using React.js for Fyntl AI's Business OS. Optimized frontend performance by 40%, resulting in improved user experience and faster load times.",
      tags: ["React.js", "Frontend", "Performance Optimization"]
    },
    {
      title: "AlumniConnect WebApp",
      desc: "A professional networking platform for graduates to connect with alumni, explore job opportunities, and access mentorship. Built with React and Tailwind CSS for a modern, responsive user experience.",
      tags: ["React.js", "Tailwind CSS", "Netlify", "Networking"]
    },
    {
      title: "EdTech Scalable Platform",
      desc: "Architected a comprehensive platform for student management and course delivery (LMS). Features include batch tracking, assignment submission, and automated notifications.",
      tags: ["MERN Stack", "MongoDB", "Scalability", "Docker"]
    }
  ]
};

// --- RENDER VIEWS / BLOCKS OF HTML+CSS ---
export function HeroSection() {
  return (
    <section style={{ padding: '60px 20px', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 20px 0', fontWeight: '800' }}>{portfolioData.profile.name}</h1>
        <h2 style={{ color: '#5865f2', fontSize: '1.8rem', margin: '0 0 20px 0' }}>{portfolioData.profile.title}</h2>
        <p style={{ color: themes.textMuted, lineHeight: '1.6', fontSize: '1.1rem' }}>{portfolioData.profile.desc}</p>
        <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
          <button style={{ background: themes.accent, color: '#fff', padding: '12px 28px', borderRadius: '30px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>View Projects</button>
          <button style={{ background: 'transparent', color: '#fff', padding: '12px 28px', borderRadius: '30px', border: '1px solid #333', fontWeight: '600', cursor: 'pointer' }}>Contact Me</button>
        </div>
      </div>
      <div style={{ flex: '0 0 300px', height: '300px', borderRadius: '50%', border: '4px solid #5865f2', overflow: 'hidden', margin: '0 auto' }}>
         <img src="https://via.placeholder.com/300" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
        <p style={{ color: themes.textMuted, lineHeight: '1.7', fontSize: '1.1rem', margin: '0' }}>{portfolioData.profile.aboutLong}</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {portfolioData.profile.stats.map((stat, idx) => (
            <div key={idx} style={{ background: themes.cardBg, border: `1px solid ${themes.border}`, padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
              <h3 style={{ color: '#5865f2', fontSize: '2.2rem', margin: '0 0 5px 0' }}>{stat.value}</h3>
              <p style={{ color: themes.textMuted, margin: '0', fontSize: '0.9rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>Technical Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {portfolioData.skills.map((skillGroup, idx) => (
          <div key={idx} style={{ background: themes.cardBg, border: `1px solid ${themes.border}`, padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ margin: '0 0 16px 0', borderBottom: `1px solid ${themes.border}`, paddingBottom: '8px', color: '#5865f2' }}>{skillGroup.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skillGroup.items.map((item, i) => (
                <span key={i} style={{ background: '#1e1e24', color: '#60a5fa', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Experience & Education</h2>
      <div style={{ borderLeft: `2px solid ${themes.border}`, paddingLeft: '30px', marginLeft: '10px' }}>
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: '40px', position: 'relative' }}>
            <div style={{ position: 'absolute', width: '12px', height: '12px', background: '#5865f2', borderRadius: '50%', left: '-37px', top: '6px' }} />
            <span style={{ color: '#5865f2', fontSize: '0.85rem', fontWeight: 'bold' }}>{exp.date}</span>
            <h3 style={{ margin: '5px 0' }}>{exp.role}</h3>
            <h4 style={{ margin: '0 0 15px 0', color: themes.textMuted, fontStyle: 'italic' }}>{exp.company}</h4>
            <ul style={{ paddingLeft: '20px', color: themes.textMuted }}>
              {exp.bullets.map((b, i) => <li key={i} style={{ marginBottom: '8px', lineHeight: '1.5' }}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Featured Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {portfolioData.projects.map((p, idx) => (
          <div key={idx} style={{ background: themes.cardBg, border: `1px solid ${themes.border}`, borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: '#1a1a1a', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>[Project Canvas Image Placeholder]</div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{p.title}</h3>
              <p style={{ color: themes.textMuted, fontSize: '0.95rem', lineHeight: '1.5', flex: 1 }}>{p.desc}</p>
              <div style={{ margin: '15px 0', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {p.tags.map((t, i) => <span key={i} style={{ background: '#1c1917', color: '#a8a29e', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem' }}>{t}</span>)}
              </div>
              <a href="#demo" style={{ color: '#5865f2', textDecoration: 'none', fontWeight: '600', marginTop: 'auto' }}>🔗 Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Let's Connect</h2>
      <p style={{ color: themes.textMuted, maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>Looking for a Senior MERN Stack Developer or dedicated Corporate Trainer? Let's discuss how I can contribute to your team's success.</p>
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ background: themes.cardBg, padding: '14px 30px', borderRadius: '30px', border: `1px solid ${themes.border}` }}>📬 {portfolioData.profile.email}</div>
        <div style={{ background: themes.cardBg, padding: '14px 30px', borderRadius: '30px', border: `1px solid ${themes.border}` }}>📱 {portfolioData.profile.phone}</div>
      </div>
    </section>
  );
}