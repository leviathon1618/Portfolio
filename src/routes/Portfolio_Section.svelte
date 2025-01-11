<script>
  import ImageOption from "./Image_Option.svelte";
    // Check if the current environment is a browser
		const isBrowser = typeof window !== 'undefined';

		let IsMobile = true;

		if (isBrowser && screen.width > 440) {
			IsMobile = false;
		}
</script>

{#if IsMobile}
  <div style="padding-top:50px">
    <h1 style="text-align:left;padding-left:15%">My Portfolio</h1>
    <br />
    <div style="display: flex; justify-content:center" class="row">
      <div class="column">
        <ImageOption
          image_path="/website_images\heritage-org-nz.webp"
          image_name="https://www.heritage.org.nz"
        ></ImageOption>

        <ImageOption
          image_path="/website_images\itm-co-nz.webp"
          image_name="https://www.itm.co.nz"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\smartly.webp"
          image_name="https://smartly.co.nz"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\southerncross-co-nz.webp"
          image_name="https://www.southerncross.co.nz"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\powerco-co-nz.webp"
          image_name="https://www.powerco.co.nz"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\rotoruanz.webp"
          image_name="https://www.rotoruanz.com"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\mercury-co-nz.webp"
          image_name="https://www.mercury.co.nz"
        ></ImageOption>
      </div>
    </div>
  </div>
{:else}
  <div style="padding-top:50px">
    <h1 style="text-align:center">My Portfolio</h1>
    <br />
    <div style="display: flex; justify-content:center" class="row">
      <div class="column">
        <ImageOption
          image_path="/website_images\heritage-org-nz.webp"
          image_name="https://www.heritage.org.nz"
        ></ImageOption>

        <ImageOption
          image_path="/website_images\itm-co-nz.webp"
          image_name="https://www.itm.co.nz"
        ></ImageOption>
      </div>
      <div class="column">
        <ImageOption
          image_path="/website_images\powerco-co-nz.webp"
          image_name="https://www.powerco.co.nz"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\rotoruanz.webp"
          image_name="https://www.rotoruanz.com"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\mercury-co-nz.webp"
          image_name="https://www.mercury.co.nz"
        ></ImageOption>
      </div>
      <div class="column">
        <ImageOption
          image_path="/website_images\smartly.webp"
          image_name="https://smartly.co.nz"
        ></ImageOption>
        <ImageOption
          image_path="/website_images\southerncross-co-nz.webp"
          image_name="https://www.southerncross.co.nz"
        ></ImageOption>
      </div>
    </div>
  </div>
{/if}

<style>
  .column {
    display: inline-block;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  h1{
    font-family: 'Roboto';
  }
</style>
