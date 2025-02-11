import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Solar Canopy Charger</h3>
            <p className="text-sm text-muted-foreground">
              Umbrella-like design with built-in battery storage, device charging (phones/laptops), picnic table compatibility, and durable panel-connected cloth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/project" className="text-sm text-muted-foreground hover:text-primary">
                  Project Details
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Duke University
              </li>
              <li className="text-sm text-muted-foreground">
                Hudson Hall
              </li>
              <li className="text-sm text-muted-foreground">
                aryan.kothari@duke.edu
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/akothari12/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:aryan.kothari@duke.edu" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Solar Canopy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 