/**
 * ContactSection Component
 * 
 * Contact information and social media links section.
 * Features a clean layout with gradient accents.
 * 
 * @component
 */
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "WhatsApp", url: "https://wa.me/5500000000000", icon: MessageCircle },
  { name: "Instagram", url: "https://instagram.com", icon: Instagram },
];

const contactInfo: ContactInfo[] = [
  { icon: Mail, label: "Email", value: "seu@email.com", href: "mailto:seu@email.com" },
  { icon: Phone, label: "Telefone", value: "+55 (00) 00000-0000", href: "tel:+5500000000000" },
  { icon: MapPin, label: "Localização", value: "Sua Cidade, Brasil" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl" />
      </div>

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
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos{" "}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Conversar
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para novos projetos e oportunidades. Entre em contato!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.label} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent-foreground/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <info.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Redes Sociais</h3>
            <p className="text-muted-foreground">
              Me siga nas redes sociais para acompanhar meus trabalhos e novidades.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.div 
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                      {social.name}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
