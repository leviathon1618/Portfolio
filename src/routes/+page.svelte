<script>
  import BioSection from "./Bio_Section.svelte";
  import PortfolioSection from "./Portfolio_Section.svelte";
  import ResumeSection from "./ResumeSection.svelte";
  import ReviewSection from "./ReviewSection.svelte";
  import ContactSection from "./ContactSection.svelte";
  import "@fontsource/roboto"; 
  export async function OPTIONS() {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "https://trello.com",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

// Check if the current environment is a browser
const isBrowser = typeof window !== 'undefined'; 

let isMobile = true;

if (isBrowser && screen.width > 440) {
  isMobile = false;
}
</script>

<main>
  <!--bio section-->
  <BioSection IsMobile={isMobile}></BioSection>

  <!--portfolio section-->
  <PortfolioSection IsMobile={isMobile}></PortfolioSection>

  <!--resume section-->
  <ResumeSection IsMobile={isMobile}></ResumeSection>

  <!--review section-->
  <ReviewSection IsMobile={isMobile}></ReviewSection>

  <!--contact form-->
  <ContactSection IsMobile={isMobile}></ContactSection>
</main>