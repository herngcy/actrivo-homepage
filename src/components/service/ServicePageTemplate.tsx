"use client";

import type { ServiceData } from "@/lib/service-data";
import { PageWrapper } from "@/components/PageWrapper";
import { ServiceHeroV2 } from "./ServiceHeroV2";
import { ServiceOverview } from "./ServiceOverview";
import { ServiceBentoGrid } from "./ServiceBentoGrid";
import { ServiceMethodology } from "./ServiceMethodology";
import { ServiceImpact } from "./ServiceImpact";
import { ServiceWhyItMatters } from "./ServiceWhyItMatters";
import { ServiceCTA } from "./ServiceCTA";

export function ServicePageTemplate({ data }: { data: ServiceData }) {
  return (
    <PageWrapper pageName={data.badge}>
      <ServiceHeroV2
        badge={data.badge}
        headline={data.headline}
        headlineAccent={data.headlineAccent}
        subtitle={data.subtitle}
        ctaPrimary={data.ctaPrimary}
        ctaSecondary={data.ctaSecondary}
        heroImage={data.heroImage}
        heroStats={data.heroStats}
      />
      <ServiceOverview
        description={data.overviewDescription}
        features={data.overviewFeatures}
        builtFor={data.builtFor}
      />
      <ServiceBentoGrid capabilities={data.capabilities} />
      <ServiceMethodology steps={data.steps} />
      <ServiceImpact stats={data.stats} />
      <ServiceWhyItMatters cards={data.whyCards} />
      <ServiceCTA
        headline={data.ctaHeadline}
        subtitle={data.ctaSubtitle}
        buttonText={data.ctaButtonText}
      />
    </PageWrapper>
  );
}
