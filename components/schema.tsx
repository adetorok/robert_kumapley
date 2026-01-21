import { brand, nonprofitContent } from "@/content/content";

export function Schema() {
  const person = {
    "@context": "https://schema.org",
    "@type": ["Person", "Speaker"],
    name: brand.fullName,
    jobTitle: brand.headline,
    affiliation: brand.employer,
    address: brand.location,
    sameAs: [brand.nonprofit.url],
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: nonprofitContent.mygoal.title,
    url: nonprofitContent.mygoal.ctas[0].href,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
    </>
  );
}
