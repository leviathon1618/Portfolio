<script>
  export let image_path;
  export let review_text;
  export let IsMobile;

  let josh_review = `"Growth over year, especially the last 4-6 months
While we were waiting for another project to land, good to see you focus on training and ramping up on two other client support agreements.
You've taken constructive feedback and applied it, great to see.
Great work on that SEO presentation and learning Lighthouse. This could easily be something that you could work on across all of our customers.
Written communication has improved a lot over the last year
You've shown some really good ability to learn and teach others - Take2, SEO and more.
With the new client solution, it's your chance to step up on all things Kentico, and I've noticed the attitude change and it's great to see your focus on it.
With one of our clients you've done a great job getting familiar and hands on with deployment pipelines
For the technical client request, you gave some great consultation to the customer - helping them do this using best practices."`;

  let joel_review = `"Have seen some great growth in both hard skill and soft skills. Getting much better in clear communications both verbally and via email. 
Great start into putting your hand up to pick up tasks.
Taking an active role in our client's stand ups, I see a good working relationship has been created here between yourself and the client team.
Giving ideas in team discussions. Not just leaving it for seniors to suggest, it has been a great way to demonstrate your involvement in the team and interest to help the team develop.
Taking on feedback and applying it has been great."`;

  let oscar_review = `"I have observed that Levi has improved this year. This just shows his huge potential to become a very significant contributor in the future. 
He has an improved demonstration of eagerness to learn Umbraco Cloud and own the expertise on this platform.
In Kentico related support assignments, he has become more confident in analyzing issues, identifying root causes and proposing effective solutions."`;

  let saurabh_review = `"Working alongside Levi on the big project Sitecore implementation last year was a nice experience. It was impressive to see how quickly Levi levelled up on Sitecore SXA, CSS, JS / FE side of things - enabling him to independently deliver components efficiently.
Levi's increased involvement in new client projects, where he has demonstrated the ability to work independently, showcases his good understanding of these implementations and his capability to take on significant responsibilities.
With Oscar's departure, I'm particularly looking forward - seeing Levi step up. I'm confident in his ability to build upon the skills he developed last year and take the lead on tasks that Oscar previously managed, such as his Kentico skills and Umbraco implementations, among others."
\n
`;
  let selected_text = "";
  let reviewer_poistion = "";

  if (review_text == "josh") {
    selected_text = josh_review;
    reviewer_poistion = "- Josheel Pranlal, Manager | Datacom";
  }
  if (review_text == "joel") {
    selected_text = joel_review;
    reviewer_poistion = "- Joel Kistler, Senior developer | Datacom";
  }
  if (review_text == "oscar") {
    selected_text = oscar_review;
    reviewer_poistion = "- Oscar Barit, Intermediate developer | Datacom";
  }
  if (review_text == "saurabh") {
    selected_text = saurabh_review;
    reviewer_poistion = "- Kumar Saurabh, solution architect | Datacom";
  }
</script>

{#if IsMobile}
  <img
    style="display:flex;width:30px;height:30px;margin:10px 0px"
    class="photo"
    src={image_path}
    alt="profile_picture"
  />
  <div style="display:flex">
    <div class="triangle-left" style="margin-left:-15px"></div>
    <div class="text-box" style="margin:0px">
      <p>{selected_text}</p>
      <br />
      <i>{reviewer_poistion}</i>
    </div>
  </div>
{:else}
  <div style="display:flex" class="grid-item">
    <img
      style="display:flex"
      class="photo"
      src={image_path}
      alt="profile_picture"
    />
    <div class="triangle-left"></div>
    <div class="text-box">
      <p>{selected_text}</p>
      <br />
      <i>{reviewer_poistion}</i>
    </div>
  </div>
{/if}

<style>
  p,i{
    font-family: 'Roboto', sans-serif;
  }
  .grid-item {
    padding: 25px;
  }
  .photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid white;
    filter: drop-shadow(rgb(175, 175, 175) 0px 0px 5px);
  }
  .text-box {
    text-align: left;
    margin: 0px 20px;
    padding: 0 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    background: white;
    filter: drop-shadow(rgb(175, 175, 175) 0px 0px 5px);
  }

  .triangle-left {
    position: absolute;
    margin-top: 30px;
    margin-left: 60px;
    width: 0;
    height: 0;
    border-top: 0px solid transparent;
    border-right: 15px solid #bbbbbb;
    border-bottom: 15px solid transparent;
    z-index: 1;
  }
  p {
    color: #6c757d;
  }
</style>
