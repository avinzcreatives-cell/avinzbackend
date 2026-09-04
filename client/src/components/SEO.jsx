import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/websiteData';

export const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl = "https://www.avinzcreatives.in/",
  ogType = "website",
  ogImage = "https://www.avinzcreatives.in/og-image.png",
  schemaData = null
}) => {
  const fullTitle = title 
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} | Design Agency & Technology Training Institute`;

  const metaDesc = description || COMPANY_INFO.shortDesc;

  // Default Organization & Local Business Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.avinzcreatives.in/#organization",
        "name": COMPANY_INFO.name,
        "url": "https://www.avinzcreatives.in/",
        "logo": "https://www.avinzcreatives.in/favicon.svg",
        "description": COMPANY_INFO.shortDesc,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "142/B, Crosscut Road, Gandhipuram",
          "addressLocality": "Coimbatore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "641012",
          "addressCountry": "IN"
        },
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "sameAs": [
          COMPANY_INFO.socials.facebook,
          COMPANY_INFO.socials.instagram,
          COMPANY_INFO.socials.linkedin,
          COMPANY_INFO.socials.youtube
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.avinzcreatives.in/#website",
        "url": "https://www.avinzcreatives.in/",
        "name": COMPANY_INFO.name,
        "publisher": {
          "@id": "https://www.avinzcreatives.in/#organization"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
