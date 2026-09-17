import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { Problem } from "@/components/Problem";
import { SolutionIntro } from "@/components/SolutionIntro";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { MetaAds } from "@/components/MetaAds";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { DemoCall } from "@/components/DemoCall";
import { FinalCta } from "@/components/FinalCta";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

/* ==========================================================================
   iSuite AI - Meta Ads landing page
   --------------------------------------------------------------------------
   Section order follows build spec 7.1 - 7.13, with ONE section dropped:
   7.8 Suitable Business Types. It listed showrooms, clinics, salons and
   studios while the proof strip at the top of the page names IT companies,
   consulting firms and agencies - the same job, done twice, with the two
   copies disagreeing about who the product is for. The strip is the one that
   matches the current audience, so it kept the job.

   The component and its copy are both still in the repo. To bring it back:
   re-add the import and drop <BusinessTypes /> in below <MetaAds />.

   Background rhythm - dark anchors bookend the page, with the optional
   third taken up at Meta Ads. DARK is deep forest #01152F, LIGHT is warm
   oat #F2F6FC:
     Hero            DARK  #01152F
     Proof Strip     off-white
     Problem         white
     Solution        off-white
     How It Works    white
     Benefits        off-white
     Meta Ads        DARK  #01152F
     Trust           white
     FAQ             off-white
     Demo call       DARK
     Final CTA       off-white  #01152F
     Lead Form       white     (must stay light for trust)
     Footer          DARK  #01152F
   ========================================================================== */

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <ProofStrip />
        <Problem />
        <SolutionIntro />
        <HowItWorks />
        <Benefits />
        <MetaAds />
        <Trust />
        <Faq />
        <DemoCall />
        <FinalCta />
        <LeadForm />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
