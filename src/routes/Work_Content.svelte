<script>
  import WorkExperienceSection from "./Work_Experience_Section.svelte";
  export let IsMobile;
</script>

{#if IsMobile}
  <WorkExperienceSection
    IsMobile="true"
    job_title="Software Developer"
    employment_type="Full Time"
    company_name="Datacom"
    company_location="Auckland"
    company_duration="2021/05 - Current"
  ></WorkExperienceSection>
  <WorkExperienceSection
    IsMobile="true"
    job_title="Mobile App Developer"
    employment_type="Full Time"
    company_name="Gotcha Nets"
    company_location="Auckland"
    company_duration="2020/11 - 2021/05"
  ></WorkExperienceSection>
  <WorkExperienceSection
    IsMobile="true"
    job_title="Bicycle Mechanic"
    employment_type="Part Time"
    company_name="Adventure Cycles"
    company_location="Auckland"
    company_duration="2018/01 - 2020/12"
  ></WorkExperienceSection>
  <WorkExperienceSection
    IsMobile="true"
    job_title="Farm Hand"
    employment_type="Casual"
    company_name="Crystal Mountain"
    company_location="Auckland"
    company_duration="2017/06 - 2021/01"
  ></WorkExperienceSection>
{:else}
  <WorkExperienceSection
    IsMobile="false"
    job_title="Software Developer"
    employment_type="Full Time"
    company_name="Datacom"
    company_location="Auckland"
    company_duration="2021/05 - Current"
  ></WorkExperienceSection>
  <WorkExperienceSection
    IsMobile="false"
    job_title="Mobile App Developer"
    employment_type="Full Time"
    company_name="Gotcha Nets"
    company_location="Auckland"
    company_duration="2020/11 - 2021/05"
  ></WorkExperienceSection>
  <WorkExperienceSection
    IsMobile="false"
    job_title="Bicycle Mechanic"
    employment_type="Part Time"
    company_name="Adventure Cycles"
    company_location="Auckland"
    company_duration="2018/01 - 2020/12"
  ></WorkExperienceSection>
  <WorkExperienceSection
    IsMobile="false"
    job_title="Farm Hand"
    employment_type="Casual"
    company_name="Crystal Mountain"
    company_location="Auckland"
    company_duration="2017/06 - 2021/01"
  ></WorkExperienceSection>
{/if}
