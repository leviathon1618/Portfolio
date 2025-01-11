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

</script>

<main>
  <!--bio section-->
  <BioSection></BioSection>

  <!--portfolio section-->
  <PortfolioSection></PortfolioSection>

  <!--resume section-->
  <ResumeSection></ResumeSection>

  <!--review section-->
  <ReviewSection></ReviewSection>

  <!--contact form-->
  <ContactSection></ContactSection>
</main>