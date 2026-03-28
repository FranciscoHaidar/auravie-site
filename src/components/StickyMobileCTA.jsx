import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export function StickyMobileCTA({ whatsappLink }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling down past hero
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-mobile-cta">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
        <Calendar size={20} />
        <span>AGENDAR AVALIAÇÃO</span>
      </a>
    </div>
  );
}
