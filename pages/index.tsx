import Layout from '../components/Layout'

export default function Home() {
  const projects = [
    { 
      title: 'College Hub – Peer-to-Peer Academic Sharing App', 
      desc: 'Built a cross-platform mobile app enabling students to share study materials and access internship/job opportunities seamlessly.',
      github: 'https://github.com/akanupam/lms',
      tags: ['Flutter', 'Supabase', 'Material 3'],
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
    },
    { 
      title: 'RAG-Powered Query Resolver', 
      desc: 'Built an intelligent document-based query engine that transforms static text files into a conversational knowledge base using RAG architecture',
      github: 'https://github.com/akanupam/RAG-based-Query-Resolver',
      tags: ['Python', 'LangChain', 'Gemini Api'],
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    },
    { 
      title: 'RAG-Powered Query Resolver', 
      desc: 'Built an intelligent document-based query engine that transforms static text files into a conversational knowledge base using RAG architecture',
      github: 'https://github.com/akanupam/RAG-based-Query-Resolver',
      tags: ['Python', 'LangChain', 'Gemini Api'],
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
    }
  ]

  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git', 'Linux', 'Databases', 'Algorithms']

  const skillsByCategory = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind'],
    Backend: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'],
    Tools: ['Git', 'Linux', 'Docker', 'Webpack', 'VS Code']
  }

  const experience = [
    {
      title: 'Internship — Web Development',
      company: 'Tech Company (Optional)',
      period: 'Summer 2024',
      desc: 'Worked on full-stack web applications, implemented new features, and improved performance.'
    },
    {
      title: 'Freelance Project — Algorithm Optimization',
      company: 'Self Project',
      period: '2024',
      desc: 'Designed and optimized data structures for competitive programming problems.'
    },
    {
      title: 'Freelance Project — Algorithm Optimization',
      company: 'Self Project',
      period: '2024',
      desc: 'Designed and optimized data structures for competitive programming problems.'
    }
  ]

  const articles = [
    {
      title: 'Building Fast Web Apps with Next.js',
      source: 'Dev.to',
      url: 'https://dev.to',
      date: 'Nov 2024'
    },
    {
      title: 'Understanding React Hooks',
      source: 'Medium',
      url: 'https://medium.com',
      date: 'Oct 2024'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container hero-container">
          {/* Left Content */}
          <div className="hero-left">
            {/* <div className="hero-badge">Welcome to Aditya's Portfolio</div> */}
            
            <h1 className="hero-heading">
              Building <span className="gradient-text">intelligent solutions</span> that scale
            </h1>
            
            <p className="hero-subtitle">
              Full-stack developer & AI enthusiast. I create fast, scalable web applications using React, Next.js, and modern technologies. Turning complex problems into elegant code.
            </p>

            <div className="hero-buttons">
              <a className="btn primary" href="#contact">
                Get in touch
                <span className="btn-icon">→</span>
              </a>
              <a className="btn secondary" href="#projects">
                View my work
              </a>
            </div>

            {/* <div className="hero-social-proof">
              <div className="proof-avatars">
                <div className="avatar avatar-1">A</div>
                <div className="avatar avatar-2">D</div>
                <div className="avatar avatar-3">Y</div>
              </div>
              <p className="proof-text">Join 50+ amazing projects</p>
            </div> */}
          </div>

          {/* Right Visual */}
          <div className="hero-right">
            <div className="hero-circle">
              <img src="/avatar.jpg" alt="Aditya" className="hero-circle-img" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a goal-oriented professional with good time management and problem-solving skills.
            Recognized for reliability and adaptability, with a strong capacity to learn and apply new skills.
            Committed to leveraging technical expertise and problem-solving skills that enhance team
            productivity and drive organizational growth.
          </p>
          <h3>Education</h3>
          <p>Bachelor of Technology — Computer Science & Engieering (2027)</p>
          <h3>Interests</h3>
          <ul className="interests-list">
            <li>Artificial Intelligence & Machine Learing</li>
            <li>Web development (React, Next.js)</li>
            <li>Devops (CI/CD Pipelines, Docker, Kubernetes)</li>
            <li>Data Structures & Algorithm</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2>Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title} className="project">
                <div className="project-thumbnail" style={{background: p.gradient}}></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section id="experience" className="section experience-section">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-timeline">
            {experience.map((exp, idx) => (
              <div key={idx} className="experience-item">
                <div className="exp-marker"></div>
                <div className="exp-content">
                  <h3>{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-period">{exp.period}</p>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills & Technologies Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2>Skills & Technologies</h2>
          
          <div className="skills-by-category">
            {Object.entries(skillsByCategory).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="badges">
                  {items.map((skill) => (
                    <span key={skill} className="badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <h3 style={{marginTop: '2rem'}}>All Skills</h3>
          <ul className="grid">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul> */}
        </div>
      </section>

      {/* Blog / Articles Section */}
      {/* <section id="blog" className="section blog-section">
        <div className="container">
          <h2>Latest Articles</h2>
          <div className="blog-grid">
            {articles.map((article, idx) => (
              <a key={idx} href={article.url} target="_blank" rel="noopener noreferrer" className="blog-card">
                <div className="blog-header">
                  <h3>{article.title}</h3>
                  <span className="blog-date">{article.date}</span>
                </div>
                <p className="blog-source">On {article.source} →</p>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>I'm always interested in hearing about new projects and opportunities. Whether you want to collaborate, have a question, or just want to chat, feel free to reach out!</p>
            <a href="#contact" className="btn primary btn-large">Start a Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>I'd love to hear from you. Feel free to reach out for internships, collaborations, or just to chat.</p>
          <div className="contact-methods">
            <a className="btn primary" href="mailto:aditanupam@gmail.com?subject=Hello%20Aditya&body=Hi%20Aditya%2C%0A%0AI%20would%20like%20to%20connect%20with%20you.">Email Me</a>
            <a className="btn ghost" href="https://github.com/akanupam" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/aditanupam/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
