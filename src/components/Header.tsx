'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_MAIN } from '@/lib/data';
import Container from './Container';
import Button from './Button';
import { cn } from '@/lib/utils';

interface NavItemProps {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!children) {
    return (
      <Link href={href} className="text-sm font-medium text-primary-navy hover:text-primary-blue transition-colors">
        {label}
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-medium text-primary-navy hover:text-primary-blue transition-colors flex items-center gap-1"
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
        >
          {children.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-primary-navy hover:bg-neutral-light transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-neutral-white border-b border-neutral-light/30">
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bebas text-2xl text-primary-navy hover:text-primary-blue transition-colors">
            CODEship
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_MAIN.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:inline">
              <Button size="sm" variant="secondary">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary-navy"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2 border-t border-neutral-light/30"
          >
            {NAV_MAIN.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-primary-navy hover:bg-neutral-light rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </Container>
    </header>
  );
};

export default Header;
