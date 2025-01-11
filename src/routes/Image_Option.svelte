<script>
  export let image_path;
  export let image_name;
  let image_width = 300;
</script>

<div class="clip_box" style="width:300px; height:200px;">
  <img
    class="scroll"
    id="scroll_element"
    src={image_path}
    style="width:300px;"
    alt="portfolio_image"
  />
  <div class="hidden_word">
    <div class="hidden_word2"></div>
    <div class="portfolio_text_tile"></div>
    <p>{image_name}</p>
  </div>
</div>

<style>
  .portfolio_text_tile {
    background-color: #96bb7c;
    position: absolute;
    top: 100px;
    left: 150px;
    transform: translate(-50%, -50%);
    width: 270px;
    height: 20px;
    padding: 10px;
    border-radius: 20px;
  }
  p {
    font-family: 'Roboto';
    width: 300px;
    height: 200px;
    color: black;
    margin: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: larger;
    z-index: 2;
    position: absolute;
  }
  p:hover {
    z-index: -1;
  }
  .clip_box {
    clip-path: inset(0px);
    margin: 14px 7px 7px 7px;
    overflow: none;
  }

  .hidden_word2 {
    width: 300px;
    height: 200px;
    background: black;
    opacity: 0.3;
    position: absolute;
  }
  .hidden_word2::content {
    width: 300px;
    height: 200px;
    background: black;
    opacity: 0;
    z-index: -1;
    position: absolute;
  }
  .hidden_word {
    position: absolute;
    background: white;

    z-index: 1;
  }
  .hidden_word:hover {
    background: white;
    opacity: 0;

    z-index: -1;
  }
  .scroll {
    position: absolute;
  }
  .scroll:hover {
    z-index: 3;
    animation: bannermove 13s linear infinite;
  }
  @keyframes bannermove {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: -1300px; /* container height - (no. of images - 1) * image height */
    }
  }
</style>
