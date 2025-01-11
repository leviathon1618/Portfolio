<script>
  import SkillBar from "./Skill_Bar.svelte";
  // import "@fontsource/roboto"; 
  
  // Check if the current environment is a browser
		const isBrowser = typeof window !== 'undefined';

		let IsMobile = true;

		if (isBrowser && screen.width > 440) {
			IsMobile = false;
		}
</script>

{#if IsMobile}
  <div>
    <div style="height:100vh">
      <h1 class="TopWords" style="">
        I'm Levi Delaney, <br />A full stack Developer test
      </h1>
      <div id="splash_background"></div>
      
      <img class="splash_image" src="/splash_image.jpg" alt="background" />
    </div>

    <div class="padding_outside" style="display:flex">
      <div>
        <img
          style="width:70%;position:absolute"
          class="green_dots"
          src="/green_dots.webp"
          alt="dots_image"
        />
        <img class="profile_image" src=".\first_image.jpg" alt="first_image" />

        <div style="float:right; padding-top:100px; ">
          <div>
            <h2>My Bio</h2>
            <p>
              Detail-oriented, organized and meticulous employee. Works at fast
              pace to meet tight deadlines. Enthusiastic team player ready to
              contribute to company success. Highly skilled software development
              professional bringing enormous talents for software design,
              development and integration. Offering advanced knowledge of
              in-demand programming languages. Background writing code and
              developing systems for web applications. Organized and dependable
              candidate successful at managing multiple priorities with a
              positive attitude. Willingness to take on added responsibilities
              to meet team goals.
            </p>
          </div>
          <SkillBar bar_value="75" bar_name="C#"></SkillBar>
          <SkillBar bar_value="76" bar_name="HTML"></SkillBar>
          <SkillBar bar_value="88" bar_name="CSS"></SkillBar>
          <SkillBar bar_value="95" bar_name="Unity"></SkillBar>
          <br />
          <a class="button" href="#contact_me">hire me</a>
          <a
            style="background:#6c757d;color:white"
            class="button"
            href="/Levi_Delaney_Resume.pdf"
            download="Levi Delaney Resume">download cv</a
          >
        </div>
      </div>
    </div>
  </div>
{:else}
  <div>
    <div style="height:100vh">
      <h1 class="TopWords" style="">
        I'm Levi Delaney, <br />A full stack Developer
      </h1>
      <div id="splash_background"></div>
      <img class="splash_image" src="/splash_image.jpg" alt="background" />
    </div>

    <div class="padding_outside" style="display:flex">
      <div>
        <img class="green_dots" src="/green_dots.webp" alt="dots_image" />
        <img class="profile_image" src="/first_image.jpg" alt="grad_image" />

        <div style="float:right; padding-top:100px; max-width:50%">
          <div>
            <h2>My Bio</h2>
            <p>
              Detail-oriented, organized and meticulous employee. Works at fast
              pace to meet tight deadlines. Enthusiastic team player ready to
              contribute to company success. Highly skilled software development
              professional bringing enormous talents for software design,
              development and integration. Offering advanced knowledge of
              in-demand programming languages. Background writing code and
              developing systems for web applications. Organized and dependable
              candidate successful at managing multiple priorities with a
              positive attitude. Willingness to take on added responsibilities
              to meet team goals.
            </p>
          </div>
          <SkillBar bar_value="75" bar_name="C#"></SkillBar>
          <SkillBar bar_value="76" bar_name="HTML"></SkillBar>
          <SkillBar bar_value="88" bar_name="CSS"></SkillBar>
          <SkillBar bar_value="95" bar_name="Unity"></SkillBar>
          <br />
          <a class="button" href="#contact_me">hire me</a>
          <a
            style="background:#6c757d;color:white"
            class="button"
            href="/Levi_Delaney_Resume.pdf"
            download="Levi Delaney Resume">download cv</a
          >
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .button {
    text-transform: uppercase;
    padding: 15px 25px;
    background: #96bb7c;
    color: black;
    font-weight: 500;
    font-size: 0.7em;
    letter-spacing: 1px;
    border-radius: 50px;
  }

  .green_dots {
    position: absolute;
    width: 20%;
    left: 25%;
    opacity: 0.5;
  }

  .profile_image {
    position: relative;
    top: 100px;
    width: 350px;
    object-fit: cover;
  }

  .splash_image {
    left: 0;
    top: 0;
    position: absolute;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1,h2,p,a{
    font-family: 'Roboto';
  }
  p {
    color: rgb(107, 107, 107);
    font-size: 1em;
    font-weight: 500;
    position: relative;
    /* letter-spacing: 1px; */
  }
  #splash_background {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .TopWords {
    color: white;
    width: 100%;
    height: 100%;
    letter-spacing: 5px;
    text-align: center;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
  }
  .padding_outside {
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    justify-content: center;
  }
</style>
