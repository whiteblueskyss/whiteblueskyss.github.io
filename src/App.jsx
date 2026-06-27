import profilePhoto from './photo/selimss.png';

function A({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-700 hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap"
    >
      {children}
    </a>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="mb-8">
      <h2 className="text-[0.75rem] font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">
        {children}
      </h2>
      <div className="h-px bg-slate-200" />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-md border border-slate-200 font-medium">
      {children}
    </span>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-2.5 text-slate-600 leading-7">
      <span className="text-blue-400 shrink-0 mt-1 text-xs">▸</span>
      <span>{children}</span>
    </li>
  );
}

function StatCard({ title, lines, href }) {
  const heading = href ? (
    <A href={href} className="font-semibold text-slate-800 text-base hover:text-blue-700">
      {title}
    </A>
  ) : (
    <span className="font-semibold text-slate-800 text-base">{title}</span>
  );
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      {heading}
      <div className="mt-2 space-y-1">
        {lines.map((l, i) => (
          <p key={i} className="text-sm text-slate-500 leading-5">{l}</p>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#f5f7fa] scroll-smooth"
      style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif" }}
    >

      {/* ── Sticky Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-[920px] mx-auto px-6 sm:px-12 h-14 flex items-center justify-between gap-6">
          <span className="font-bold text-slate-800 text-sm shrink-0">Md Selim</span>
          <div className="flex items-center gap-5 overflow-x-auto scrollbar-none">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#cp">CP</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            {/* <NavLink href="#exploring">Exploring</NavLink> */}
            {/* <NavLink href="#beyond">Beyond Code</NavLink> */}
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* ── Page Content ── */}
      <div className="max-w-[920px] mx-auto px-6 sm:px-12 pt-24 pb-16">

        {/* ── Hero / Profile Card ── */}
        <header className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10 mb-8">
          <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start">

            <img
              src={profilePhoto}
              alt="Md Selim Chowdhury"
              className="w-[155px] h-[155px] rounded-full object-cover border-4 border-blue-100 shadow-md shrink-0"
            />

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-[2.6rem] font-bold tracking-tight text-slate-900 leading-tight mb-1">
                Md Selim Chowdhury
              </h1>
              <p className="text-xl text-blue-700 font-semibold mb-1">Software Engineer</p>
              <p className="text-slate-500 text-base mb-6">
                TechnoNext Software Ltd &nbsp;·&nbsp; Dhaka, Bangladesh
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-[0.9rem]">
                <A href="mailto:selim.chy50@gmail.com" className="text-slate-600 hover:text-blue-700">
                  selim.chy50@gmail.com
                </A>
                <A href="https://github.com/whiteblueskyss" className="text-slate-600 hover:text-blue-700">
                  GitHub
                </A>
                <A href="https://www.linkedin.com/in/whiteblueskyss/" className="text-slate-600 hover:text-blue-700">
                  LinkedIn
                </A>
                <span className="text-slate-500">+880 1773-914465</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── About ── */}
        <section id="about" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>About</SectionHeading>
          <p className="text-slate-700 leading-8 text-[1rem]">
            Software engineer at TechnoNext Software Ltd, building scalable backend modules using .NET (C#),
            Entity Framework Core, and PostgreSQL under Clean Architecture principles. Graduated in Computer
            Science &amp; Engineering from Shahjalal University of Science and Technology (SUST) with a strong
            algorithmic foundation — ICPC Asia Dhaka 2024 participant, ranked{" "}
            <strong className="text-slate-900">46th out of 2400+</strong> teams in the preliminary round,
            with 1100+ competitive programming problems solved across major platforms.
            Focused on system design, clean code, API performance, and writing maintainable production-grade software.
          </p>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Work Experience</SectionHeading>
          <div className="space-y-10">

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <div>
                  <h3 className="text-[1.1rem] font-bold text-slate-900">Junior Software Engineer</h3>
                  <p className="text-blue-700 font-medium mt-0.5">TechnoNext Software Ltd &nbsp;·&nbsp; Dhaka</p>
                </div>
                <span className="text-sm text-slate-400 mt-1 shrink-0">Jan 2025 – Present</span>
              </div>
              <ul className="mt-4 space-y-1.5">
                <Bullet>Developing RESTful APIs and backend services using ASP.NET Core (.NET), following Clean Architecture and SOLID design principles in a production codebase.</Bullet>
                <Bullet>Working with Entity Framework Core and PostgreSQL for data modeling, query optimization, and database migrations across multiple modules.</Bullet>
                <Bullet>Building new scalable features end-to-end — from database schema to API layer — using C#, collaborating via Git with structured code reviews.</Bullet>
                <Bullet>Maintaining and improving existing modules with a focus on performance, maintainability, and adherence to architectural guidelines.</Bullet>
              </ul>
            </div>

            <div className="h-px bg-slate-100" />

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <div>
                  <h3 className="text-[1.1rem] font-bold text-slate-900">AI Data &amp; Prompt Expert</h3>
                  <p className="text-blue-700 font-medium mt-0.5">Remotasks (OpenAI Project) &nbsp;·&nbsp; Remote</p>
                </div>
                <span className="text-sm text-slate-400 mt-1 shrink-0">Jan 2024 – Aug 2024</span>
              </div>
              <ul className="mt-4 space-y-1.5">
                <Bullet>Authored structured, high-quality prompts across diverse task categories — code generation, reasoning, creative writing, and factual QA — for AI model training datasets.</Bullet>
                <Bullet>Evaluated model outputs against quality rubrics, identifying inconsistencies, edge-case failures, and safety violations with thorough written justification.</Bullet>
                <Bullet>Promoted to reviewer, overseeing the work of multiple contributors and ensuring consistent quality and standard compliance across the team.</Bullet>
              </ul>
            </div>

          </div>
        </section>

        {/* ── Technical Skills ── */}
        <section id="skills" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="space-y-5">
            {[
              { label: "Primary Stack", tags: ["C# (.NET)", "ASP.NET Core", "React.js", "PostgreSQL", "Entity Framework Core"], highlight: true },
              { label: "Languages", tags: ["C++", "JavaScript", "SQL", "Java", "Python", "Solidity"] },
              { label: "Backend", tags: [".NET", "Node.js", "Express.js", "Spring Boot", "REST APIs"] },
              { label: "Frontend", tags: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
              { label: "Databases", tags: ["PostgreSQL", "MySQL", "MongoDB"] },
              { label: "Tools", tags: ["Git", "GitHub", "Linux", "Docker", "AWS", "Postman", "Hardhat", "Ethereum"] },
            ].map(({ label, tags, highlight }) => (
              <div key={label} className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <span className={`text-sm sm:w-28 sm:shrink-0 pt-1 ${highlight ? "font-semibold text-slate-700" : "text-slate-400"}`}>
                  {label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Projects</SectionHeading>
          <div className="space-y-10">

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-[1.05rem] font-bold text-slate-900">Ethereum-Powered E-Certificate Platform</h3>
                <div className="flex gap-4 text-sm">
                  <A href="https://www.youtube.com/watch?v=HsLQVXlGbLA">Live Demo</A>
                  <A href="https://github.com/whiteblueskyss/Ethereum-Powered-E-Certificate-Issuance-and-Verification">GitHub</A>
                </div>
              </div>
              <ul className="space-y-1.5 mb-3">
                <Bullet>Decentralized platform where institutions can issue NFT-backed, tamper-proof certificates directly to students' Ethereum wallets — eliminating reliance on centralized credential servers.</Bullet>
                <Bullet>Integrated QR-code verification so any third party (employer, university) can validate a certificate with a single scan without intermediaries.</Bullet>
                <Bullet>Built role-based access control differentiating institution admins, students, and verifiers, with on-chain certificate data anchored via Solidity smart contracts deployed on Hardhat.</Bullet>
                <Bullet>Implemented PDF generation of the on-chain certificate for offline use, and a React frontend with MetaMask wallet connection using ethers.js.</Bullet>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {["React.js", "Solidity", "Hardhat", "ethers.js", "Node.js", "Ethereum", "MetaMask", "Tailwind CSS"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100">{t}</span>
                ))}
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-[1.05rem] font-bold text-slate-900">X-Clone — Full-Stack Social Media Platform</h3>
                <A href="https://github.com/whiteblueskyss/x-clone" className="text-sm">GitHub</A>
              </div>
              <ul className="space-y-1.5 mb-3">
                <Bullet>Full-stack Twitter-like platform built from scratch — user registration and authentication with JWT (access + refresh tokens), profile management, and follow/unfollow system.</Bullet>
                <Bullet>Core social features: posting tweets, liking, replying, notifications, and a personalized feed showing posts from followed users.</Bullet>
                <Bullet>RESTful backend with Express.js and MongoDB (Mongoose ODM); React frontend with Tailwind CSS, fully responsive across devices.</Bullet>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Tailwind CSS"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100">{t}</span>
                ))}
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <h3 className="text-[1.05rem] font-bold text-slate-900">IICTLibrary — Library Management System</h3>
                <A href="https://github.com/whiteblueskyss/IICTLibrary" className="text-sm">GitHub</A>
              </div>
              <ul className="space-y-1.5 mb-3">
                <Bullet>Web-based library system for managing books, members, and borrowing operations — built for the IICT department at SUST.</Bullet>
                <Bullet>Features real-time book search, borrowing history tracking, return deadline management, and automated fine calculation based on overdue duration.</Bullet>
                <Bullet>Admin panel for adding/editing book inventory, managing member accounts, and generating borrowing reports.</Bullet>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {["PHP", "MySQL", "JavaScript", "HTML", "CSS"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Competitive Programming ── */}
        <section id="cp" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Competitive Programming</SectionHeading>
          <p className="text-slate-600 text-[0.95rem] leading-7 mb-7">
            Consistent competitive programmer with <strong className="text-slate-800">1100+ algorithmic problems</strong> solved
            across Codeforces, LeetCode, CodeChef, CSES, AtCoder, and USACO. Comfortable with data structures,
            graph algorithms, dynamic programming, number theory, and combinatorics under timed conditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              title="ICPC Asia Dhaka Regional 2024"
              lines={["Rank 46 / 2400+ teams — Preliminary Round", "Rank 137 / 309 teams — Regional Round", "Honorable Mention"]}
            />
            <StatCard
              title="Codeforces"
              href="https://codeforces.com/profile/whiteblueskyss"
              lines={["Max Rating: 1392 · Pupil", "550+ problems solved"]}
            />
            <StatCard
              title="LeetCode"
              href="https://leetcode.com/whiteblueskyss/"
              lines={["Top 12% globally", "200+ problems solved"]}
            />
            <StatCard
              title="CodeChef"
              href="https://www.codechef.com/users/whiteblueskyss"
              lines={["3 Star Coder", "Country Rank 400 · 200+ problems solved"]}
            />
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Education</SectionHeading>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="text-[1.05rem] font-bold text-slate-900">
                Shahjalal University of Science and Technology
              </h3>
              <p className="text-blue-700 font-medium mt-0.5">
                Bachelor of Science in Computer Science and Engineering
              </p>
              <p className="text-slate-500 text-sm mt-1">Sylhet, Bangladesh</p>
            </div>
            <span className="text-sm text-slate-400 mt-1">2020 – 2025</span>
          </div>
        </section>

        {/* ── Achievements & Certifications ── */}
        <section id="achievements" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Achievements &amp; Certifications</SectionHeading>
          <div className="space-y-4">
            {[
              { title: "ICPC Asia Dhaka Regional 2024", desc: "Honorable Mention — one of the top teams representing SUST in the 2024 regional contest." },
              { title: "AWS Academy Graduate", desc: "Certified in Cloud Foundations, Cloud Developing, and Cloud Web Application Builder by Amazon Web Services." },
              { title: "HackerRank Certifications", desc: "SQL (Advanced, Intermediate, Basic) and Problem Solving (Intermediate) — verified skill assessments." },
              { title: "Creative Talent Exploration Competition (2018)", desc: "Champion — national-level talent competition, Birganj, Dinajpur." },
              { title: "Additional Learning", desc: "Docker for Beginners (KodeKloud) · Introduction to Machine Learning (Kaggle)." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <span className="text-blue-400 shrink-0 mt-1 text-xs">▸</span>
                <div>
                  <span className="font-semibold text-slate-800">{title}</span>
                  <span className="text-slate-500 text-[0.9rem]"> — {desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Currently Exploring ── */}
        <section id="exploring" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Currently Exploring</SectionHeading>
          <p className="text-slate-600 text-[0.95rem] leading-7 mb-6">
            Digging deeper into the full software development path — not just writing features, but understanding
            how serious software is designed, built, and shipped. Actively studying and applying:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Frontend Engineering", "Backend Architecture", "System Design",
              "Domain-Driven Design (DDD)", "Clean Architecture", "Database Design",
              "REST & API Design", "CI/CD Pipelines", "Docker & Containerization",
              "Cloud Infrastructure (AWS)", "Microservices", "Message Queues",
              "Caching Strategies", "Monitoring & Observability", "Deployment & DevOps",
            ].map((t) => (
              <span key={t} className="px-3 py-1.5 text-sm bg-slate-50 text-slate-700 rounded-lg border border-slate-200">
                {t}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-5 leading-6">
            The goal is to understand the full picture — from a blank editor to a production-grade system running reliably at scale.
          </p>
        </section>

        {/* ── Beyond Code ── */}
        <section id="beyond" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6 scroll-mt-16">
          <SectionHeading>Beyond Code</SectionHeading>
          <p className="text-slate-600 text-[0.95rem] leading-7 mb-5">
            Away from the screen, sport is a big part of my life. I play football, cricket, and volleyball regularly,
            and I have a deep love for running — something about pushing past what feels comfortable.
          </p>
          <div className="flex gap-4">
            <span className="text-blue-400 shrink-0 mt-1 text-xs">▸</span>
            <p className="text-slate-600 text-[0.95rem] leading-7">
              Completed a <strong className="text-slate-800">Half Marathon</strong> and a{" "}
              <strong className="text-slate-800">Short Marathon</strong> — both organized by District Administration, Dinajpur.
              Running long distances has taught me the same thing competitive programming does: consistency and patience
              matter more than any single burst of effort.
            </p>
          </div>
          <p className="text-slate-500 text-sm mt-5 italic">
            Sports photos and ICPC moments coming soon.
          </p>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-8 scroll-mt-16">
          <SectionHeading>Contact</SectionHeading>
          <p className="text-slate-600 text-[0.95rem] leading-7 mb-7">
            Open to backend and full-stack engineering roles, internships, or just a good conversation
            about software. The best way to reach me is email — I respond within a day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Email</span>
              <A href="mailto:selim.chy50@gmail.com" className="text-slate-800 font-medium hover:text-blue-700">
                selim.chy50@gmail.com
              </A>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Phone</span>
              <span className="text-slate-800 font-medium">+880 1773-914465</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">GitHub</span>
              <A href="https://github.com/whiteblueskyss" className="text-slate-800 font-medium hover:text-blue-700">
                github.com/whiteblueskyss
              </A>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">LinkedIn</span>
              <A href="https://www.linkedin.com/in/whiteblueskyss/" className="text-slate-800 font-medium hover:text-blue-700">
                linkedin.com/in/whiteblueskyss
              </A>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Location</span>
              <span className="text-slate-800 font-medium">Dhaka, Bangladesh</span>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-slate-800 rounded-2xl px-8 py-7 text-center">
          <p className="text-slate-200 font-semibold text-base mb-1">Md Selim Chowdhury</p>
          <p className="text-slate-400 text-sm mb-5">Software Engineer &nbsp;·&nbsp; Dhaka, Bangladesh</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <A href="mailto:selim.chy50@gmail.com" className="text-slate-300 hover:text-white">Email</A>
            <A href="https://github.com/whiteblueskyss" className="text-slate-300 hover:text-white">GitHub</A>
            <A href="https://www.linkedin.com/in/whiteblueskyss/" className="text-slate-300 hover:text-white">LinkedIn</A>
            <A href="https://codeforces.com/profile/whiteblueskyss" className="text-slate-300 hover:text-white">Codeforces</A>
            <A href="https://leetcode.com/whiteblueskyss/" className="text-slate-300 hover:text-white">LeetCode</A>
          </div>
          <p className="text-slate-600 text-xs mt-6">© 2025 Md Selim Chowdhury</p>
        </footer>

      </div>
    </div>
  );
}
