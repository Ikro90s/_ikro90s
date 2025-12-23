/**
 * Header Component
 * 
 * Responsive navigation header with mobile sidebar support.
 * Uses hamburger menu on mobile devices that triggers a slide-in sidebar.
 * 
 * @component
 */
import { useState } from "react";
import { Menu, Home, Briefcase, Code, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { label: "Início", href: "#home", icon: Home },
  { label: "Sobre", href: "#about", icon: User },
  { label: "Projetos", href: "#projects", icon: Briefcase },
  { label: "Tecnologias", href: "#tech", icon: Code },
  { label: "Contato", href: "#contact", icon: Mail },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ikro90s
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-card">
                <div className="flex flex-col gap-8 mt-8">
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                    Menu
                  </span>
                  <ul className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <motion.button
                          onClick={() => scrollToSection(item.href)}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-base font-medium w-full p-3 rounded-lg hover:bg-accent"
                          whileHover={{ scale: 1.05, x: 10 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon className="h-5 w-5" />
                          {item.label}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};
