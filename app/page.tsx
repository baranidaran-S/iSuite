import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { SolutionIntro } from "@/components/SolutionIntro";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { MetaAds } from "@/components/MetaAds";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

/* ==========================================================================
   iSuite AI - Meta Ads landing page
   --------------------------------------------------------------------------
   PHASE 1 OF THE ADS REDESIGN. The page was 11 sections of explanation for
   traffic that arrives from an Instagram ad and gives it about five seconds.
   The trim is judged on one test, taken from the product pages that work:
   does the section SHOW the product doing something, or only describe it?

   DROPPED HERE: 7.2 Proof Strip. A "Built for" marquee of business types
   that claimed nothing and proved nothing, and whose list (IT companies,
   consulting firms, agencies) contradicted the business types offered in the
   lead form. The form is the one that has to be right, so the strip went.

   ALREADY DROPPED: 7.8 Suitable Business Types, which duplicated the strip.
   With the strip gone it is now free to return, and it is wanted back with a
   "who this is NOT for" half - see the redesign plan.

   Both components and their copy are still in the repo. To restore either:
   re-add the import and drop the element back into <main>.

   KEPT DELIBERATELY, against the first draft of the plan:
     - Solution, because it carries the looping chat demo, the only animated
       product on the page. Its four capability tiles were cut instead: three
       of the four repeated a Benefits card word for word.
     - Trust, because "What it doesn't do" is the strongest thing a page with
       no ratings, counts or guarantees can say, and because the required
       pricing sentence lives there.

   Background rhythm - DARK is deep forest #052C1E, LIGHT is warm oat #F4F2EC:
     Hero            DARK
     Problem         white
     Solution        off-white
     How It Works    DARK
     Benefits        off-white
     Meta Ads        DARK
     Trust           white
     FAQ             off-white
     Final CTA       DARK
     Lead Form       white     (must stay light for trust)
     Footer          DARK
   ========================================================================== */

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Problem />
        <SolutionIntro />
        <HowItWorks />
        <Benefits />
        <MetaAds />
        <Trust />
        <Faq />
        <FinalCta />
        <LeadForm />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
