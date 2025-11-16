import { Mail, MapPin, Phone } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <FooterBackgroundGradient />
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-20 text-center">
        <TextHoverEffect text="COSINTR" className="h-36 w-full max-w-4xl" />
        <p className="max-w-2xl text-sm text-muted-foreground">
          From World Laws to Working Intelligence
        </p>

        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:gap-8">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-white" />
            <span>Colombo 6, Srilanka</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-white" />
            <span>info@cosintr.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-white" />
            <span>+94 77 677 6875</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} COSINTR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
