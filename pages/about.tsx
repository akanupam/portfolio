import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h2>About me</h2>
          <p>
            I'm a Computer Science student interested in systems, web development, and algorithms. I enjoy building projects that solve real problems and learning new tools.
          </p>
          <h3>Interests</h3>
          <ul>
            <li>Web development (React, Next.js)</li>
            <li>Systems and performance</li>
            <li>Competitive programming / algorithms</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
