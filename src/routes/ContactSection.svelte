<script>
  import ContactForm from "./Contact_Form.svelte";
  import ContactInfo from "./ContactInfo.svelte";
  export let IsMobile;
</script>

{#if IsMobile}
  <div
    style="padding-top:50px;padding-bottom:100px; justify-content:center;flex-direction:column;"
    class="padding_outside"
    id="contact_me"
  >
    <h1>Contact Me</h1>
    <div style="width:100%">
      <ContactForm></ContactForm>
      <ContactInfo></ContactInfo>
    </div>
  </div>
{:else}
  <div
    style="padding-top:50px;padding-bottom:100px; justify-content:center;flex-direction:column;align-items:center"
    class="padding_outside"
    id="contact_me"
  >
    <h1 style="padding-bottom:50px">Contact Me</h1>
    <div style="display: flex; width:100%">
      <ContactForm></ContactForm>
      <ContactInfo></ContactInfo>
    </div>
  </div>
{/if}

<style>
    h1{
        font-family: 'Roboto', sans-serif;
    }
  .padding_outside {
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    justify-content: center;
  }
</style>
