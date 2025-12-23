/**
 * Footer Component
 * 
 * Simplified website footer with copyright information.
 * Features a gradient border and clean minimal design.
 * 
 * @component
 */
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent mb-2">
              Ikro90s
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ikro90s. Todos os direitos reservados.
            </p>
          </div>

          {/* Back to top */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
