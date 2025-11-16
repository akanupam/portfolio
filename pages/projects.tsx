import Layout from '../components/Layout'

export default function Projects() {
  const sample = [
    { title: 'Project A', desc: 'A short description of a project — stack: React, Node.' },
    { title: 'Project B', desc: 'Another project showcasing algorithms or systems.' }
  ]

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h2>Projects</h2>
          <ul className="projects">
            {sample.map((p) => (
              <li key={p.title} className="project">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
