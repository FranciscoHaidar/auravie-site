import { useEffect } from 'react';
import { SITE_URL, businessInfo } from '../seoPages';

const setMeta = (selector, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

export function SeoHead({ page }) {
  useEffect(() => {
    if (!page) return;

    const url = `${SITE_URL}${page.path}`;
    document.title = page.title;

    setMeta('meta[name="title"]', 'content', page.title);
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="twitter:url"]', 'content', url);
    setMeta('meta[property="twitter:title"]', 'content', page.title);
    setMeta('meta[property="twitter:description"]', 'content', page.description);
    setLink('canonical', url);

    const existing = document.getElementById('route-structured-data');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'route-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: page.h1,
      description: page.description,
      url,
      about: page.focus,
      provider: {
        '@type': 'MedicalClinic',
        name: businessInfo.legalName,
        telephone: businessInfo.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: businessInfo.streetAddress,
          addressLocality: businessInfo.city,
          addressRegion: businessInfo.region,
          addressCountry: businessInfo.country,
        },
      },
    });
    document.head.appendChild(script);

    return () => {
      const routeSchema = document.getElementById('route-structured-data');
      if (routeSchema) routeSchema.remove();
    };
  }, [page]);

  return null;
}
