<script>
  export let bar_name;
  export let bar_value;
</script>

<div>
  <p style="font-weight: 0; margin-top:0px;margin-bottom:0px">{bar_name}</p>
  <input
    style="width:100%;background-color: #96bb7c; clip-path: polygon(0 0, {bar_value}% 0, {bar_value}% 100%, 0 100%);"
    aria-label={bar_name}
    type="range"
    id="volume {bar_name}"
    name="volume"
    min="0"
    max="100"
  />

  <div
    style="margin-left:calc({bar_value}% - 10px); background:#96bb7c; width:15px;height:15px;transform:rotate(45deg);"
  ></div>
  <div
    style="margin-left:calc({bar_value}% - 23px);margin-top:-25px; background:#96bb7c; width:40px;height:20px;z-index: 1; position:relative"
  >
    <p style="padding-top:2px;color:black; text-align:center;font-size:0.8em">
      {bar_value}%
    </p>
  </div>
</div>

<style>
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 50%; /* Adjust width */
    height: 5px; /* Adjust height */
    padding: 0;
    border-radius: 0px; /* Track corners */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0px; /* Thumb width */
    height: 0px; /* Thumb height */
    cursor: pointer;
  }
  p,input{
    font-family: 'Roboto', sans-serif;
  }
</style>
