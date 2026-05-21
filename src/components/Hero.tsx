'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import Button from './Button';
import FadeIn from './FadeIn';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctas: Array<{
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  }>;
  backgroundImage?: string;
  backgroundGradient?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctas,
  backgroundImage,
  backgroundGradient = true,
}) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Gradient Overlay */}
      {backgroundGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/80 via-primary-blue/70 to-transparent" />
      )}

      {/* Content */}
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-neutral-white mb-6 leading-tight">
                {headline}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="font-montserrat text-lg md:text-xl text-neutral-light/90 mb-8 leading-relaxed max-w-lg">
                {subheadline}
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                {ctas.map((cta, index) => (
                  <Button
                    key={index}
                    variant={cta.variant || (index === 0 ? 'secondary' : 'outline')}
                    size="lg"
                    onClick={cta.onClick}
                    className={cta.href ? 'cursor-pointer' : ''}
                  >
                    {cta.href ? (
                      <a href={cta.href} className="block">
                        {cta.text}
                      </a>
                    ) : (
                      cta.text
                    )}
                  </Button>
                ))}
              </div>
            </FadeIn>
          </motion.div>

          {/* Visual Element (for future image/animation) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="w-full h-96 bg-accent-yellow/10 rounded-lg flex items-center justify-center">
              <p className="text-neutral-light text-center">
                [Cinematic imagery or video placeholder]
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-white/50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
