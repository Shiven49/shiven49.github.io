import { Mail, Download, ArrowUpRight, Server, Cpu, Activity, Database, GraduationCap, Code2 } from 'lucide-react';
import { ScrollEffects } from './scroll-effects';

export default function Portfolio() {
  const currentYear = 2026;

  return (
    <div className="portfolio-page min-h-screen text-zinc-900 pb-24">
      <ScrollEffects />
      <div className="scroll-progress" aria-hidden="true" />
      <nav className="site-nav max-w-6xl mx-auto px-6 py-8 flex justify-between items-center" aria-label="Main navigation">
        <a href="#top" className="wordmark" aria-label="Shiven Mahajan, back to top">SM<span>.</span></a>
        <div className="nav-links flex items-center gap-6 text-sm text-zinc-600">
          <a href="#approach" className="transition-colors hover:text-zinc-900">Approach</a>
          <a href="#projects" className="transition-colors hover:text-zinc-900">Work</a>
          <a href="#academics" className="transition-colors hover:text-zinc-900">Background</a>
          <a href="#contact" className="transition-colors hover:text-zinc-900">Contact</a>
          <a href="/ShivenMahajan.pdf" download="ShivenMahajan.pdf" className="nav-resume">
            <Download size={15} aria-hidden="true" /> Resume
          </a>
        </div>
      </nav>
      <nav className="chapter-nav" aria-label="Case study chapters">
        <a href="#case-01" aria-label="Chapter 1: Throughput optimization" aria-current="step">01</a>
        <a href="#case-02" aria-label="Chapter 2: Multi-tenant platform">02</a>
        <a href="#case-03" aria-label="Chapter 3: Product intelligence">03</a>
        <a href="#case-04" aria-label="Chapter 4: Hardware capstone">04</a>
      </nav>

      <header id="top" className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="hero-panel">
          <div className="grid lg:grid-cols-[1.45fr_0.95fr] gap-10 items-center">
            <div>
              <p className="hero-eyebrow text-[11px] font-semibold uppercase tracking-[0.28em] mb-5">
                <span className="availability-dot" aria-hidden="true" /> BACKEND SYSTEMS <span>/</span> DATA PRODUCTS <span>/</span> PLATFORM ENGINEERING
              </p>
              <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-[-0.07em] leading-[0.92] mb-6 text-zinc-900">
                Shiven <span>Mahajan</span>
              </h1>
              <h2 className="hero-statement text-2xl md:text-3xl font-medium tracking-tight mb-8 leading-snug">
                I build the systems that help ambitious products scale without breaking.
              </h2>
              <p className="hero-description text-lg max-w-2xl leading-relaxed mb-10">
                I design backend platforms, product-critical APIs, and data systems that turn noisy operational complexity into dependable software. My work sits at the intersection of architecture, systems thinking, and execution — where ideas become resilient infrastructure people can trust.
              </p>

              <div className="hero-actions flex flex-wrap gap-4">
                <a href="https://github.com/shiven49" target="_blank" rel="noreferrer" className="action-button action-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.58 2 12.217c0 4.5 2.865 8.314 6.839 9.665.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.606-3.369-1.34-3.369-1.34-.455-1.156-1.111-1.464-1.111-1.464-.908-.621.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.088 2.912.832.091-.647.349-1.088.634-1.338-2.22-.253-4.555-1.111-4.555-4.942 0-1.092.39-1.986 1.029-2.684-.103-.253-.446-1.275.098-2.656 0 0 .84-.269 2.75 1.026A9.56 9.56 0 0 1 12 6.84c.851.004 1.708.115 2.508.337 1.909-1.295 2.749-1.026 2.749-1.026.545 1.381.202 2.403.1 2.656.64.698 1.028 1.592 1.028 2.684 0 3.839-2.338 4.686-4.566 4.934.359.31.68.922.68 1.856 0 1.338-.012 2.417-.012 2.747 0 .268.18.578.688.48A10.02 10.02 0 0 0 22 12.217C22 6.58 17.523 2 12 2Z" />
                  </svg>
                  GitHub <ArrowUpRight size={15} aria-hidden="true" />
                </a>

                <a href="/ShivenMahajan.pdf" download="ShivenMahajan.pdf" className="action-button action-secondary">
                  <Download size={16} aria-hidden="true" /> Download resume
                </a>

                <a href="https://linkedin.com/in/shivenmahajan" target="_blank" rel="noreferrer" className="action-button action-tertiary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.86v9.7H5.5V9.8Zm5.53 0h2.74v1.33h.04c.38-.72 1.3-1.47 2.67-1.47 2.85 0 3.37 1.87 3.37 4.3v5.54h-2.86v-5.2c0-1.24-.02-2.82-1.72-2.82-1.73 0-1.99 1.35-1.99 2.74v5.28H11.03V9.8Z"/>
                  </svg>
                  LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                </a>

                <a href="mailto:shivxnmahajan@gmail.com" className="action-button action-tertiary">
                  <Mail size={16} aria-hidden="true" /> Email
                </a>
              </div>
            </div>

            <aside className="story-card reveal-on-scroll">
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 mb-4">Current focus</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-white">
                    <Code2 size={18} />
                  </span>
                  <span className="font-semibold text-zinc-900">Platform engineering</span>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 mb-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-2">Core strength</p>
                <p className="text-lg font-semibold leading-snug text-zinc-900">
                  Designing systems that are reliable under load, not just impressive on paper.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="rounded-2xl bg-zinc-950 text-white p-4">
                  <div className="text-2xl font-bold mb-1">100K+</div>
                  <div className="text-zinc-300">daily txns</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-2xl font-bold mb-1">4x</div>
                  <div className="text-zinc-600">speedup</div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-600 leading-relaxed">
                I think in systems, not features — from database bottlenecks to API boundaries, event flows, latency constraints, and the operational decisions that keep products healthy.
              </div>
            </aside>
          </div>
        </div>
      </header>

      <section id="approach" className="approach-section bg-white border-y border-zinc-200">
        <div className="section-rail" aria-hidden="true"><span>HOW I THINK</span><span>01 — 03</span></div>
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Database size={18} />, title: 'Data + platform design', text: 'I optimize schema design, query behavior, cache strategy, and throughput under real-world load.' },
            { icon: <Server size={18} />, title: 'Product systems', text: 'I build backend foundations for APIs, tenant isolation, async workflows, and resilient event-driven services.' },
            { icon: <Activity size={18} />, title: 'Ownership', text: 'I turn ambiguous problems into measurable systems with clear technical direction and operational thinking.' },
          ].map((item) => (
            <div key={item.title} className="service-card reveal-on-scroll">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-3">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16 max-w-3xl">
          <p className="section-kicker text-[11px] uppercase tracking-[0.28em] text-zinc-500 mb-4">SELECTED WORK <span> / 04 CASES</span></p>
          <h2 className="section-title text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            I solve the problems that appear after the prototype works.
          </h2>
          <p className="section-intro">A few chapters in the same story: making complex systems useful, resilient, and ready for real-world constraints.</p>
        </div>

        <div className="space-y-20">
          <article id="case-01" className="project-panel reveal-on-scroll">
            <div className="project-visual dark" data-scroll-depth="0.12">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">CHAPTER 01 / THROUGHPUT</span>
                <Database size={18} className="text-blue-400" />
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-2">
                    <span>Legacy query path</span>
                    <span>4.0s</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2"><div className="bg-red-500/75 h-2 rounded-full w-full"></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-2">
                    <span>Optimized execution</span>
                    <span className="text-emerald-400">1.0s</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full w-1/4"></div></div>
                </div>
              </div>
              <div className="mt-7 rounded-2xl border border-zinc-700 bg-zinc-800/80 p-4 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300">
                  <Activity size={16} />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-100">100,000+ scans/day target</div>
                  <div className="text-xs text-zinc-400">System readiness under product scale</div>
                </div>
              </div>
            </div>

            <div className="project-copy">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700"><Database size={22} /></div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">ESEAL</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-5">
                I turned a slow enterprise pipeline into a system that could keep up with demand.
              </h3>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                In a high-volume supply-chain environment, the real problem was not a missing feature — it was a data layer that could not carry the business at scale. I diagnosed the bottlenecks, redesigned the query path, and rebuilt the operating model around reliable throughput.
              </p>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h4 className="font-semibold text-zinc-900 mb-2">What changed</h4>
                <p className="text-zinc-600 leading-relaxed">
                  I removed legacy N+1 query patterns, optimized slow data access across a large schema, and reworked the flow for high-throughput RFID processing without sacrificing reliability.
                </p>
              </div>
            </div>
          </article>

          <article id="case-02" className="project-panel reveal-on-scroll">
            <div className="project-copy">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700"><Server size={22} /></div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">3NGAGE</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-5">
                I built a multi-tenant product from the ground up and made isolation part of the architecture.
              </h3>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                This was a greenfield platform problem: a product must serve many organizations concurrently without cross-tenant leaks, noisy latency, or operational confusion. I designed the system so safety and predictability were enforced structurally, not bolted on later.
              </p>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h4 className="font-semibold text-zinc-900 mb-2">What I delivered</h4>
                <p className="text-zinc-600 leading-relaxed">
                  I created the platform foundation, API contracts, and runtime model around tenant isolation, asynchronous ingestion, and resilient event handling.
                </p>
              </div>
            </div>

            <div className="project-visual dark" data-scroll-depth="0.12">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-4 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-700 bg-zinc-800/80 p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-3">Control plane</div>
                  <div className="h-14 rounded-xl bg-zinc-700/80"></div>
                </div>
                <div className="rounded-2xl border border-zinc-700 bg-zinc-800/80 p-4">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-3">Async queue</div>
                  <div className="h-14 rounded-xl bg-emerald-500/20 border border-emerald-400/30"></div>
                </div>
              </div>
            </div>
          </article>

          <article id="case-03" className="project-panel reveal-on-scroll">
            <div className="project-visual dark mono-block" data-scroll-depth="0.12">
              <pre className="whitespace-pre-wrap leading-relaxed text-emerald-300">{`{
  "status": "success",
  "data": {
    "engine": "two_tower_inference",
    "latency_ms": 24,
    "recommendations": 2,
    "cache": "MISS"
  }
}`}</pre>
            </div>

            <div className="project-copy">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700"><Activity size={22} /></div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">THE SCOUT</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-5">
                I like building products where intelligence has to be fast, explainable, and production-ready.
              </h3>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                This work blended data science, API design, and backend engineering into a single product story: recommendation systems with sub-25ms response times, reliable inference boundaries, and modern service composition.
              </p>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h4 className="font-semibold text-zinc-900 mb-2">Why it mattered</h4>
                <p className="text-zinc-600 leading-relaxed">
                  The goal was not to build a clever model in isolation — it was to make AI useful in a live product, where speed, trust, and product fit matter more than novelty.
                </p>
              </div>
            </div>
          </article>

          <article id="case-04" className="project-panel reveal-on-scroll">
            <div className="project-copy">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700"><Cpu size={22} /></div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">HARDWARE CAPSTONE</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-5">
                I’m comfortable with systems that require precision at the lowest level.
              </h3>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                My FPGA work reinforced the same principle I apply in software: correctness matters more than complexity. I designed and validated a cryptographic accelerator with strict verification and deterministic performance expectations.
              </p>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h4 className="font-semibold text-zinc-900 mb-2">Engineering mindset</h4>
                <p className="text-zinc-600 leading-relaxed">
                  Whether the problem sits at the database layer or the hardware boundary, I care about how a system behaves under constraints — not just whether it compiles.
                </p>
              </div>
            </div>

            <div className="project-visual light" data-scroll-depth="0.12">
              <div className="chip-panel relative w-52 h-52 mx-auto border-4 border-zinc-700 bg-zinc-900 rounded-2xl shadow-lg flex items-center justify-center flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={`t${i}`} className="absolute top-0 -mt-3 w-full flex justify-evenly px-3"><div className="w-1.5 h-3 bg-zinc-400 rounded-t-sm" /></div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div key={`b${i}`} className="absolute bottom-0 -mb-3 w-full flex justify-evenly px-3"><div className="w-1.5 h-3 bg-zinc-400 rounded-b-sm" /></div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div key={`l${i}`} className="absolute left-0 -ml-3 h-full flex flex-col justify-evenly py-3"><div className="h-1.5 w-3 bg-zinc-400 rounded-l-sm" /></div>
                ))}
                {[...Array(6)].map((_, i) => (
                  <div key={`r${i}`} className="absolute right-0 -mr-3 h-full flex flex-col justify-evenly py-3"><div className="h-1.5 w-3 bg-zinc-400 rounded-r-sm" /></div>
                ))}
                <div className="w-24 h-24 border border-zinc-600 bg-zinc-950 rounded-xl flex items-center justify-center flex-col">
                  <span className="font-mono text-xs text-zinc-300 tracking-widest">AES-128</span>
                  <span className="font-mono text-[10px] text-zinc-500 mt-1">VERIFIED</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="academics" className="background-section bg-white border-y border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-zinc-700" size={28} />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Background</h2>
          </div>

          <div className="education-panel reveal-on-scroll p-8 rounded-3xl border border-zinc-200 bg-zinc-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 mb-2">Education</p>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">National Institute of Technology (NIT) Srinagar</h3>
              <p className="text-zinc-600 font-medium">B.Tech in Electronics & Communication Engineering</p>
            </div>
            <div className="px-4 py-2 bg-zinc-950 text-white rounded-full text-sm font-medium whitespace-nowrap">
              Class of 2025
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact-section max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="contact-panel reveal-on-scroll">
          <div className="contact-copy">
            <p className="contact-kicker">HAVE A SYSTEMS PROBLEM?</p>
            <h2>Let’s make it<br /><span>work beautifully.</span></h2>
            <p>For engineering roles, collaborations, or a thoughtful technical challenge, reach out directly.</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:shivxnmahajan@gmail.com" className="footer-action footer-action-primary">
              <span><Mail size={18} aria-hidden="true" /> Start a conversation</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="/ShivenMahajan.pdf" download="ShivenMahajan.pdf" className="footer-action footer-action-secondary">
              <span><Download size={18} aria-hidden="true" /> Download resume</span>
              <span className="file-type">PDF <span>↓</span></span>
            </a>
            <a href="https://github.com/shiven49" target="_blank" rel="noreferrer" className="contact-github">
              Explore GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-bottomline">
            <span>SHIVEN MAHAJAN <span className="contact-dot">/</span> SOFTWARE ENGINEER</span>
            <span>© {currentYear}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
