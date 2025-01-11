<script>
  import WorkExperienceSection from "./Work_Experience_Section.svelte";
  import WorkExperienceContent from "./Work_Content.svelte";
    // Check if the current environment is a browser
		const isBrowser = typeof window !== 'undefined';

		let IsMobile = true;

		if (isBrowser && screen.width > 440) {
			IsMobile = false;
		}
</script>

{#if IsMobile}
  <h1 class="header" style="padding-top:50px;text-align:left;margin-left:15%">
    Resume
  </h1>
  <div style="display:flex;justify-content:center">
    <img
      style="width:350px"
      id="my_photo"
      src="/resume_image.jpg"
      alt="picture2"
    />
  </div>

  <div class="padding_outside">
    <div>
      <h1 id="work_experience">Work Experience</h1>
      <WorkExperienceContent {IsMobile}></WorkExperienceContent>
      <h1>Education</h1>
      <WorkExperienceSection
        {IsMobile}
        job_title="Diploma: Software Development"
        employment_type="Full Time"
        company_name="Techtorium"
        company_location="Auckland"
        company_duration="2021/01 -2021/12"
      ></WorkExperienceSection>
      <WorkExperienceSection
        {IsMobile}
        job_title="Diploma: Information Systems"
        employment_type="Full Time"
        company_name="Techtorium"
        company_location="Auckland"
        company_duration="2020/01 -2020/12"
      ></WorkExperienceSection>
    </div>
  </div>
{:else}
  <h1 class="header" style="padding-top:50px">Resume</h1>
  <div class="padding_outside">
    <div>
      <img
        style="margin-right:50px;width:350px"
        id="my_photo"
        src="/resume_image.jpg"
        alt="picture2"
      />
    </div>
    <div style="margin-left:50px">
      <h1 id="work_experience">Work Experience</h1>
      <WorkExperienceContent {IsMobile}></WorkExperienceContent>
      <h1>Education</h1>
      <WorkExperienceSection
        {IsMobile}
        job_title="Diploma: Software Development"
        employment_type="Full Time"
        company_name="Techtorium"
        company_location="Auckland"
        company_duration="2021/01 -2021/12"
      ></WorkExperienceSection>
      <WorkExperienceSection
        {IsMobile}
        job_title="Diploma: Information Systems"
        employment_type="Full Time"
        company_name="Techtorium"
        company_location="Auckland"
        company_duration="2020/01 -2020/12"
      ></WorkExperienceSection>
    </div>
  </div>
{/if}

<style>
  #work_experience{
    margin-top:0px;
  }
  .header {
    text-align: center;
    padding-top: 20%;
  }
  .padding_outside {
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    justify-content: center;
  }
  h1{
    font-family: 'Roboto';
  }
</style>
