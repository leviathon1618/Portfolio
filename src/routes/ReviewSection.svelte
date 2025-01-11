<script>
  import ReviewTile from "./Review_Tile.svelte";
    // Check if the current environment is a browser
		const isBrowser = typeof window !== 'undefined';

		let IsMobile = true;

		if (isBrowser && screen.width > 440) {
			IsMobile = false;
		}
</script>

{#if IsMobile == true}
  <div style="padding:50px 15% 0px 15%;" class="header">
    <h1>My Reviews</h1>

    <div>
      <ReviewTile
        IsMobile="true"
        review_text="josh"
        image_path="..\website_images\josh photo.jpg"
      ></ReviewTile>
      <ReviewTile
        IsMobile="true"
        review_text="joel"
        image_path="..\website_images\joel photo.jpg"
      ></ReviewTile>
      <ReviewTile
        IsMobile="true"
        image_path="..\website_images\oscar photo.jpg"
        review_text="oscar"
      ></ReviewTile>
      <ReviewTile
        IsMobile="true"
        image_path="..\website_images\saurabh photo.jpg"
        review_text="saurabh"
      ></ReviewTile>
    </div>
  </div>
{:else}
  <h1 style="display:flex;justify-content:center">My Reviews</h1>
  <div class="padding_outside">
    <div class="grid-container">
      <ReviewTile
        {IsMobile}
        review_text="josh"
        image_path="..\website_images\josh photo.jpg"
      ></ReviewTile>
      <ReviewTile
        {IsMobile}
        review_text="joel"
        image_path="..\website_images\joel photo.jpg"
      ></ReviewTile>
      <ReviewTile
        {IsMobile}
        image_path="..\website_images\oscar photo.jpg"
        review_text="oscar"
      ></ReviewTile>
      <ReviewTile
        {IsMobile}
        image_path="..\website_images\saurabh photo.jpg"
        review_text="saurabh"
      ></ReviewTile>
    </div>
  </div>
{/if}

<style>
    h1{
        font-family: 'Roboto', sans-serif;
    }
  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    background-color: #f3f3f3;
    padding: 10px;
  }
  .padding_outside {
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    justify-content: center;
  }
</style>
