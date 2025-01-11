<script>
  export let job_title;
  export let employment_type;
  export let company_name;
  export let company_location;
  export let company_duration;
  export let IsMobile;
</script>

{#if IsMobile}
  <div style="width:100%; padding-bottom:30px">
    <!--top line-->
    <div class="flex_rows">
      <h2 style="font-size: 1.2em;">{job_title}</h2>
      <p
        style="width:120px;display:flex;justify-content:flex-end"
        class="fulltime_tile_text"
      >
        {employment_type}
      </p>
    </div>
    <!--second line-->
    <div class="flex_rows">
      <div class="work_info">
        <img
          style="width:15px;height:15px;"
          class="work_icon"
          src="/address_icon.png"
          alt="address icon"
        />
        <p style="font-size: 12px;" class="work_text">{company_location}</p>
        <img
          style="width:15px;height:15px;"
          class="work_icon"
          src="/building_icon.png"
          alt="building icon"
        />
        <p style="font-size: 12px;" class="work_text">{company_name}</p>
      </div>

      <div style="width:120px">
        <div style="display:flex; align-items:center;justify-content:flex-end">
          <img
            style="width:15px;height:15px;"
            class="calendar_icon"
            src="/calendar_icon.png"
            alt="calendar icon"
          />
          <p style="margin:0; font-size: 10px;">{company_duration}</p>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div style="width:500px; padding-bottom:30px">
    <!--top line-->
    <div class="flex_rows">
      <h2>{job_title}</h2>
      <p class="fulltime_tile_text">{employment_type}</p>
    </div>
    <!--second line-->
    <div class="flex_rows">
      <div class="work_info">
        <img class="work_icon" src="/address_icon.png" alt="address icon" />
        <p class="work_text">{company_location}</p>
        <img class="work_icon" src="/building_icon.png" alt="building icon" />
        <p class="work_text">{company_name}</p>
      </div>

      <div>
        <div style="display:flex; align-items:center">
          <img
            class="calendar_icon"
            src="/calendar_icon.png"
            alt="calendar icon"
          />
          <p style="margin:0;">{company_duration}</p>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  h2,p{
    font-family: 'Roboto', sans-serif;
  }
  h2 {
    font-weight: normal;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  .fulltime_tile_text {
    color: black;
    margin: 0;
    font-weight: 700;
  }
  .flex_rows {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .work_info {
    display: flex;
    align-items: center;
  }
  .work_text {
    padding-right: 16px;
    margin: 0;
    color: #6c757d;
  }
  .work_icon {
    width: 20px;
    height: 20px;
    opacity: 0.4;
    padding-right: 4px;
  }
  .calendar_icon {
    width: 20px;
    height: 20px;
    opacity: 0.4;
    padding-right: 8px;
  }
</style>
