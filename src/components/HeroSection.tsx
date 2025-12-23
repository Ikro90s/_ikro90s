/**
 * HeroSection Component
 * 
 * Main hero section with introduction text and profile photo placeholder.
 * Features gradient background effects and smooth animations.
 * 
 * @component
 */
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left space-y-6 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-primary font-medium text-sm tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bem-vindo ao meu portfólio
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Ikro90s
              </span>
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Desenvolvedor apaixonado por criar experiências digitais incríveis 
              e transformar ideias em código elegante e funcional.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={scrollToProjects}
                  className="bg-gradient-to-r from-primary to-accent-foreground hover:opacity-90 transition-opacity text-primary-foreground px-8 py-6"
                >
                  Ver Projetos
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10 px-8 py-6"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Entre em Contato
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Photo Placeholder */}
          <motion.div 
            className="flex-shrink-0 lg:mr-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-foreground rounded-full blur-lg opacity-50 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent-foreground/20 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                {/* Replace this div with an img tag containing your photo */}
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Sua foto aqui
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
