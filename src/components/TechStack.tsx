/**
 * TechStack Component
 * 
 * Displays the technologies used with icons in a grid layout.
 * Features hover effects and gradient styling.
 * 
 * @component
 */
import { 
  Code2, 
  Palette, 
  Database, 
  Server, 
  Smartphone, 
  GitBranch,
  Terminal,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const technologies: Technology[] = [
  { name: "React", icon: Code2, color: "from-primary to-primary/60" },
  { name: "TypeScript", icon: Terminal, color: "from-accent-foreground to-accent-foreground/60" },
  { name: "Tailwind CSS", icon: Palette, color: "from-primary to-primary/60" },
  { name: "Node.js", icon: Server, color: "from-accent-foreground to-accent-foreground/60" },
  { name: "PostgreSQL", icon: Database, color: "from-primary to-primary/60" },
  { name: "React Native", icon: Smartphone, color: "from-accent-foreground to-accent-foreground/60" },
  { name: "Git", icon: GitBranch, color: "from-primary to-primary/60" },
  { name: "Docker", icon: Layers, color: "from-accent-foreground to-accent-foreground/60" },
];

export const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">
            Habilidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Tecnologias
            </span>{" "}
            que Utilizo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e tecnologias que fazem parte do meu dia a dia como desenvolvedor
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col items-center gap-4">
                <motion.div 
                  className={`p-3 rounded-xl bg-gradient-to-br ${tech.color} bg-opacity-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <tech.icon className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <span className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
