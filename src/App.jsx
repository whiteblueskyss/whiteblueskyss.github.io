import { motion } from "framer-motion";

function Section({ title, children }) {
  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="px-3 py-1 text-sm bg-gray-800 rounded-full border border-gray-700">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Md Selim</h1>
          <p className="text-gray-400">
            Software Engineer • .NET • React • System Design
          </p>
        </motion.div>

        {/* About */}
        <Section title="About">
          <p className="text-gray-400">
            Backend-focused engineer building scalable systems using .NET and React.
            Strong in system design, clean architecture, and performance optimization.
          </p>
        </Section>

        {/* Tech Stack */}
        <Section title="Tech Stack">
          <div className="space-y-3">
            <div>
              <p className="text-gray-400 mb-2">Primary</p>
              <div className="flex flex-wrap gap-2">
                <Badge>.NET (C#)</Badge>
                <Badge>React</Badge>
              </div>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Familiar</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Next.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>Golang</Badge>
              </div>
            </div>
          </div>
        </Section>

        {/* Interests */}
        <Section title="Interests">
          <div className="flex flex-wrap gap-2">
            <Badge>System Design</Badge>
            <Badge>Scalable Architecture</Badge>
            <Badge>Clean Code</Badge>
            <Badge>Performance</Badge>
            <Badge>DevOps</Badge>
            <Badge>CI/CD</Badge>
            <Badge>Microservices</Badge>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="space-y-3">
            <div>
              <h3 className="font-medium">E-Certificate on Blockchain</h3>
              <p className="text-gray-400 text-sm">
                Blockchain-based certificate verification system.
              </p>
            </div>

            <div>
              <h3 className="font-medium">LedgerFlow</h3>
              <p className="text-gray-400 text-sm">
                Transaction and workflow management system.
              </p>
            </div>
          </div>
        </Section>

      </div>


      Under Developing........
    </div>
  );
}