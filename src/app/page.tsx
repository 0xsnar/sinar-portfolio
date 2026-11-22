import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

import { PixelCat } from '@/components/pixel-cat';
import { SiteNav } from '@/components/site-nav';
import { createClient } from '@/lib/supabase/server';

async function getData() {
  try {
    const db = await createClient();
    const [
      { data: projects, error: projectsError },
      { data: skills },
      { data: profile },
      { data: experience },
    ] = await Promise.all([
      db
        .from('projects')
        .select('*, project_technologies(name)')
        .eq('published', true)
        .order('display_order'),
      db.from('skills').select('*').order('display_order'),
      db.from('profiles').select('*').limit(1).maybeSingle(),
      db
        .from('experiences')
        .select('*')
        .order('start_date', { ascending: false }),
    ]);

    console.log('PROJECT ERROR:', projectsError);
    console.log('PROJECT DATA:', projects);
    console.log('PROJECT COUNT:', projects?.length);

    return {
      projects: projects || [],
      skills: skills || [],
      profile,
      experience: experience || [],
    };
  } catch {
    return {
      projects: [],
      skills: [],
      profile: null,
      experience: [],
    };
  }
}

export default async function Home() {
  const data = await getData();
  const skills = data.skills.length
    ? data.skills.map((skill: { name: string }) => skill.name)
    : [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'REST API',
        'WebSocket',
        'Figma',
        'Web3',
        'Git',
      ];

      const phoneNumber = "6281234567890";

const message = "Halo Sinar! Saya tertarik untuk bekerja sama. Saya ingin bertanya mengenai jasa pembuatan website yang kamu tawarkan.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; 

  return (
    <main>
      <SiteNav />

      <section className="hero" id="home">
        <div className="grid-bg" />
        <p className="kicker">
          <i /> INDEPENDENT DEVELOPER / DIGITAL MAKER{' '}
          <span>[001 — 2026]</span>
        </p>

        <div className="hero-copy">
          <p className="eyebrow">A LITTLE DIGITAL UNIVERSE</p>
          <h1>
            HELLO,
            <br />
            I’M <em>SINAR.</em>
          </h1>

          <div className="hero-bottom">
            <p>
              Curious by nature.
              <br />
              Building things for the web.
            </p>
            <a className="round-link" href="#projects">
              EXPLORE
              <br />
              MY WORK ↗
            </a>
          </div>
        </div>

        <PixelCat />
        <div className="stamp">
          CREATIVE
          <br />
          CODE
          <br />
          <b>✳</b>
        </div>
        <a className="scroll-cue" href="#about">
          — SCROLL TO EXPLORE
        </a>
      </section>

      <div className="ticker">
        <span>
          DESIGN WITH INTENT ✳ BUILD WITH CURIOSITY ✳ MAKE THE WEB FEEL ALIVE
          ✳　
        </span>
        <span>
          DESIGN WITH INTENT ✳ BUILD WITH CURIOSITY ✳ MAKE THE WEB FEEL ALIVE
          ✳　
        </span>
      </div>

      <section className="section" id="about">
        <p className="section-label">01 / ABOUT ME</p>
        <div className="about-grid">
          <h2>
            Part developer.
            <br />
            <em>Part explorer.</em>
            <br />
            Always curious.
          </h2>

          <div className="about-copy">
            <div className="avatar">
              S<span>✳</span>
            </div>
            <p>
              {data.profile?.bio ||
                'I’m Sinar, an information systems graduate who enjoys turning ideas into useful, thoughtful digital experiences. I’m interested in frontend engineering, creative interfaces, and the possibilities of Web3.'}
            </p>
            <small>
              INFORMATION SYSTEMS · UNIVERSITAS AMIKOM YOGYAKARTA · 2025
            </small>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <p className="section-label">
          02 / SELECTED PROJECTS ({String(data.projects.length).padStart(2, '0')}
          )
        </p>

        <div className="section-head">
          <h2>
            Things I’ve
            <br />
            <em>put into motion.</em>
          </h2>
          <p>A selection of experiments, builds, and ideas made real.</p>
        </div>

        {data.projects.length ? (
          <div className="project-grid">
            {data.projects.map(
              (
                project: {
                  id: string | number;
                  thumbnail_url?: string;
                  title: string;
                  description?: string;
                  project_technologies?: { name: string }[];
                  live_url?: string;
                  github_url?: string;
                },
                index: number,
              ) => (
                <article className="project" key={project.id}>
                  <div className="project-art">
                    {project.thumbnail_url ? (
                      <img
                        src={project.thumbnail_url}
                        alt={project.title}
                      />
                    ) : (
                      <b>{project.title?.slice(0, 1) || '✳'}</b>
                    )}
                    <small>PROJECT — 0{index + 1}</small>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tags">
                    {(project.project_technologies || []).map(
                      (technology) => (
                        <span key={technology.name}>{technology.name}</span>
                      ),
                    )}
                  </div>

                  <a
                    className="project-link"
                    href={
                      project.live_url || project.github_url || '#'
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    OPEN PROJECT ↗
                  </a>
                </article>
              ),
            )}
          </div>
        ) : (
          <div className="empty">
            <b>✳</b>
            <div>
              <h3>Good things are being built.</h3>
              <p>
                Projects will appear here when published from the SINAR CMS.
              </p>
            </div>
            <small>COMING INTO FOCUS ↗</small>
          </div>
        )}
      </section>

      <section className="section" id="skills">
        <p className="section-label">03 / TOOLKIT</p>
        <div className="skills-grid">
          <h2>
            My digital
            <br />
            <em>toolbox.</em>
          </h2>

          <div className="skill-cloud">
            {skills.map((skill: string) => (
              <span key={skill}>
                <i>✳</i>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <p className="section-label">04 / THE PATH SO FAR</p>
        <div className="experience-grid">
          <h2>
            Learning by
            <br />
            <em>making.</em>
          </h2>

          <div className="timeline">
            <article>
              <small>2025 — NOW</small>
              <div>
                <h3>Independent Developer</h3>
                <p>
                  Exploring frontend development, creative coding, and building
                  practical digital products.
                </p>
              </div>
            </article>

            <article>
              <small>2021 — 2025</small>
              <div>
                <h3>Bachelor of Information Systems</h3>
                <p>Universitas Amikom Yogyakarta · Graduated 2025</p>
              </div>
            </article>

            {data.experience.map(
              (experience: {
                id: string | number;
                start_date: string;
                end_date?: string;
                role: string;
                company: string;
                description?: string;
              }) => (
                <article key={experience.id}>
                  <small>
                    {experience.start_date} — {experience.end_date || 'NOW'}
                  </small>
                  <div>
                    <h3>
                      {experience.role} · {experience.company}
                    </h3>
                    <p>{experience.description}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">05 / SAY HELLO</p>
        <p className="eyebrow">HAVE A GOOD IDEA?</p>
        <h2>
          LET’S MAKE
          <br />
          <em>IT REAL.</em>
        </h2>

        <a
          className="contact-button"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          START A CONVERSATION <MessageCircle />
        </a>

        <footer>
          <a href="https://github.com/0xsnar">
            <Github /> GITHUB
          </a>
          <a href="https://www.linkedin.com/in/sinar-public-kautsar-adhiluhur-93b69538b">
            <Linkedin /> LINKEDIN
          </a>
          <a
  href="https://wa.me/6288224189601"
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle /> WHATSAPP
</a>
          <a
            href={`mailto:${data.profile?.email || 'snrypblc@gmail.com'}`}
          >
            <Mail /> EMAIL
          </a>
          <small>© 2026 SINAR — MADE WITH CURIOSITY.</small>
        </footer>
      </section>
    </main>
  );
}
