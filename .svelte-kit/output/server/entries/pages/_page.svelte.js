import { d as bind_props, e as stringify, c as pop, p as push } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Skill_Bar($$payload, $$props) {
  let bar_name = $$props["bar_name"];
  let bar_value = $$props["bar_value"];
  $$payload.out += `<div><p style="font-weight: 0; margin-top:0px;margin-bottom:0px" class="svelte-1bacsde">${escape_html(bar_name)}</p> <input${attr("style", `width:100%;background-color: #96bb7c; clip-path: polygon(0 0, ${stringify(bar_value)}% 0, ${stringify(bar_value)}% 100%, 0 100%);`)}${attr("aria-label", bar_name)} type="range"${attr("id", `volume ${stringify(bar_name)}`)} name="volume" min="0" max="100" class="svelte-1bacsde"> <div${attr("style", `margin-left:calc(${stringify(bar_value)}% - 10px); background:#96bb7c; width:15px;height:15px;transform:rotate(45deg);`)}></div> <div${attr("style", `margin-left:calc(${stringify(bar_value)}% - 23px);margin-top:-25px; background:#96bb7c; width:40px;height:20px;z-index: 1; position:relative`)}><p style="padding-top:2px;color:black; text-align:center;font-size:0.8em" class="svelte-1bacsde">${escape_html(bar_value)}%</p></div></div>`;
  bind_props($$props, { bar_name, bar_value });
}
function Bio_Section($$payload, $$props) {
  let IsMobile = $$props["IsMobile"];
  if (IsMobile) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><div style="height:100vh"><h1 class="TopWords svelte-rzgw2q" style="">I'm Levi Delaney, <br>A full stack Developer test</h1> <div id="splash_background" class="svelte-rzgw2q"></div> <img class="splash_image svelte-rzgw2q" src="/splash_image.jpg" alt="background"></div> <div class="padding_outside svelte-rzgw2q" style="display:flex"><div><img style="width:70%;position:absolute" class="green_dots svelte-rzgw2q" src="/green_dots.webp" alt="dots_image"> <img class="profile_image svelte-rzgw2q" src=".\\first_image.jpg" alt="first_image"> <div style="float:right; padding-top:100px;"><div><h2 class="svelte-rzgw2q">My Bio</h2> <p class="svelte-rzgw2q">Detail-oriented, organized and meticulous employee. Works at fast
              pace to meet tight deadlines. Enthusiastic team player ready to
              contribute to company success. Highly skilled software development
              professional bringing enormous talents for software design,
              development and integration. Offering advanced knowledge of
              in-demand programming languages. Background writing code and
              developing systems for web applications. Organized and dependable
              candidate successful at managing multiple priorities with a
              positive attitude. Willingness to take on added responsibilities
              to meet team goals.</p></div> `;
    Skill_Bar($$payload, { bar_value: "75", bar_name: "C#" });
    $$payload.out += `<!----> `;
    Skill_Bar($$payload, { bar_value: "76", bar_name: "HTML" });
    $$payload.out += `<!----> `;
    Skill_Bar($$payload, { bar_value: "88", bar_name: "CSS" });
    $$payload.out += `<!----> `;
    Skill_Bar($$payload, { bar_value: "95", bar_name: "Unity" });
    $$payload.out += `<!----> <br> <a class="button svelte-rzgw2q" href="#contact_me">hire me</a> <a style="background:#6c757d;color:white" class="button svelte-rzgw2q" href="/Levi_Delaney_Resume.pdf" download="Levi Delaney Resume">download cv</a></div></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div><div style="height:100vh"><h1 class="TopWords svelte-rzgw2q" style="">I'm Levi Delaney, <br>A full stack Developer</h1> <div id="splash_background" class="svelte-rzgw2q"></div> <img class="splash_image svelte-rzgw2q" src="/splash_image.jpg" alt="background"></div> <div class="padding_outside svelte-rzgw2q" style="display:flex"><div><img class="green_dots svelte-rzgw2q" src="/green_dots.webp" alt="dots_image"> <img class="profile_image svelte-rzgw2q" src="/first_image.jpg" alt="grad_image"> <div style="float:right; padding-top:100px; max-width:50%"><div><h2 class="svelte-rzgw2q">My Bio</h2> <p class="svelte-rzgw2q">Detail-oriented, organized and meticulous employee. Works at fast
              pace to meet tight deadlines. Enthusiastic team player ready to
              contribute to company success. Highly skilled software development
              professional bringing enormous talents for software design,
              development and integration. Offering advanced knowledge of
              in-demand programming languages. Background writing code and
              developing systems for web applications. Organized and dependable
              candidate successful at managing multiple priorities with a
              positive attitude. Willingness to take on added responsibilities
              to meet team goals.</p></div> `;
    Skill_Bar($$payload, { bar_value: "75", bar_name: "C#" });
    $$payload.out += `<!----> `;
    Skill_Bar($$payload, { bar_value: "76", bar_name: "HTML" });
    $$payload.out += `<!----> `;
    Skill_Bar($$payload, { bar_value: "88", bar_name: "CSS" });
    $$payload.out += `<!----> `;
    Skill_Bar($$payload, { bar_value: "95", bar_name: "Unity" });
    $$payload.out += `<!----> <br> <a class="button svelte-rzgw2q" href="#contact_me">hire me</a> <a style="background:#6c757d;color:white" class="button svelte-rzgw2q" href="/Levi_Delaney_Resume.pdf" download="Levi Delaney Resume">download cv</a></div></div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { IsMobile });
}
function Image_Option($$payload, $$props) {
  let image_path = $$props["image_path"];
  let image_name = $$props["image_name"];
  $$payload.out += `<div class="clip_box svelte-150ud9a" style="width:300px; height:200px;"><img class="scroll svelte-150ud9a" id="scroll_element"${attr("src", image_path)} style="width:300px;" alt="portfolio_image"> <div class="hidden_word svelte-150ud9a"><div class="hidden_word2 svelte-150ud9a"></div> <div class="portfolio_text_tile svelte-150ud9a"></div> <p class="svelte-150ud9a">${escape_html(image_name)}</p></div></div>`;
  bind_props($$props, { image_path, image_name });
}
function Portfolio_Section($$payload, $$props) {
  let IsMobile = $$props["IsMobile"];
  if (IsMobile) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div style="padding-top:50px"><h1 style="text-align:left;padding-left:15%" class="svelte-1mwsgww">My Portfolio</h1> <br> <div style="display: flex; justify-content:center" class="row svelte-1mwsgww"><div class="column svelte-1mwsgww">`;
    Image_Option($$payload, {
      image_path: "/website_images\\heritage-org-nz.webp",
      image_name: "https://www.heritage.org.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\itm-co-nz.webp",
      image_name: "https://www.itm.co.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\smartly.webp",
      image_name: "https://smartly.co.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\southerncross-co-nz.webp",
      image_name: "https://www.southerncross.co.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\powerco-co-nz.webp",
      image_name: "https://www.powerco.co.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\rotoruanz.webp",
      image_name: "https://www.rotoruanz.com"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\mercury-co-nz.webp",
      image_name: "https://www.mercury.co.nz"
    });
    $$payload.out += `<!----></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div style="padding-top:50px"><h1 style="text-align:center" class="svelte-1mwsgww">My Portfolio</h1> <br> <div style="display: flex; justify-content:center" class="row svelte-1mwsgww"><div class="column svelte-1mwsgww">`;
    Image_Option($$payload, {
      image_path: "/website_images\\heritage-org-nz.webp",
      image_name: "https://www.heritage.org.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\itm-co-nz.webp",
      image_name: "https://www.itm.co.nz"
    });
    $$payload.out += `<!----></div> <div class="column svelte-1mwsgww">`;
    Image_Option($$payload, {
      image_path: "/website_images\\powerco-co-nz.webp",
      image_name: "https://www.powerco.co.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\rotoruanz.webp",
      image_name: "https://www.rotoruanz.com"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\mercury-co-nz.webp",
      image_name: "https://www.mercury.co.nz"
    });
    $$payload.out += `<!----></div> <div class="column svelte-1mwsgww">`;
    Image_Option($$payload, {
      image_path: "/website_images\\smartly.webp",
      image_name: "https://smartly.co.nz"
    });
    $$payload.out += `<!----> `;
    Image_Option($$payload, {
      image_path: "/website_images\\southerncross-co-nz.webp",
      image_name: "https://www.southerncross.co.nz"
    });
    $$payload.out += `<!----></div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { IsMobile });
}
function Work_Experience_Section($$payload, $$props) {
  let job_title = $$props["job_title"];
  let employment_type = $$props["employment_type"];
  let company_name = $$props["company_name"];
  let company_location = $$props["company_location"];
  let company_duration = $$props["company_duration"];
  let IsMobile = $$props["IsMobile"];
  if (IsMobile) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div style="width:100%; padding-bottom:30px"><div class="flex_rows svelte-kkctnq"><h2 style="font-size: 1.2em;" class="svelte-kkctnq">${escape_html(job_title)}</h2> <p style="width:120px;display:flex;justify-content:flex-end" class="fulltime_tile_text svelte-kkctnq">${escape_html(employment_type)}</p></div> <div class="flex_rows svelte-kkctnq"><div class="work_info svelte-kkctnq"><img style="width:15px;height:15px;" class="work_icon svelte-kkctnq" src="/address_icon.png" alt="address icon"> <p style="font-size: 12px;" class="work_text svelte-kkctnq">${escape_html(company_location)}</p> <img style="width:15px;height:15px;" class="work_icon svelte-kkctnq" src="/building_icon.png" alt="building icon"> <p style="font-size: 12px;" class="work_text svelte-kkctnq">${escape_html(company_name)}</p></div> <div style="width:120px"><div style="display:flex; align-items:center;justify-content:flex-end"><img style="width:15px;height:15px;" class="calendar_icon svelte-kkctnq" src="/calendar_icon.png" alt="calendar icon"> <p style="margin:0; font-size: 10px;" class="svelte-kkctnq">${escape_html(company_duration)}</p></div></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div style="width:500px; padding-bottom:30px"><div class="flex_rows svelte-kkctnq"><h2 class="svelte-kkctnq">${escape_html(job_title)}</h2> <p class="fulltime_tile_text svelte-kkctnq">${escape_html(employment_type)}</p></div> <div class="flex_rows svelte-kkctnq"><div class="work_info svelte-kkctnq"><img class="work_icon svelte-kkctnq" src="/address_icon.png" alt="address icon"> <p class="work_text svelte-kkctnq">${escape_html(company_location)}</p> <img class="work_icon svelte-kkctnq" src="/building_icon.png" alt="building icon"> <p class="work_text svelte-kkctnq">${escape_html(company_name)}</p></div> <div><div style="display:flex; align-items:center"><img class="calendar_icon svelte-kkctnq" src="/calendar_icon.png" alt="calendar icon"> <p style="margin:0;" class="svelte-kkctnq">${escape_html(company_duration)}</p></div></div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    job_title,
    employment_type,
    company_name,
    company_location,
    company_duration,
    IsMobile
  });
}
function Work_Content($$payload, $$props) {
  let IsMobile = $$props["IsMobile"];
  if (IsMobile) {
    $$payload.out += "<!--[-->";
    Work_Experience_Section($$payload, {
      IsMobile: "true",
      job_title: "Software Developer",
      employment_type: "Full Time",
      company_name: "Datacom",
      company_location: "Auckland",
      company_duration: "2021/05 - Current"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile: "true",
      job_title: "Mobile App Developer",
      employment_type: "Full Time",
      company_name: "Gotcha Nets",
      company_location: "Auckland",
      company_duration: "2020/11 - 2021/05"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile: "true",
      job_title: "Bicycle Mechanic",
      employment_type: "Part Time",
      company_name: "Adventure Cycles",
      company_location: "Auckland",
      company_duration: "2018/01 - 2020/12"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile: "true",
      job_title: "Farm Hand",
      employment_type: "Casual",
      company_name: "Crystal Mountain",
      company_location: "Auckland",
      company_duration: "2017/06 - 2021/01"
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    Work_Experience_Section($$payload, {
      IsMobile: "false",
      job_title: "Software Developer",
      employment_type: "Full Time",
      company_name: "Datacom",
      company_location: "Auckland",
      company_duration: "2021/05 - Current"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile: "false",
      job_title: "Mobile App Developer",
      employment_type: "Full Time",
      company_name: "Gotcha Nets",
      company_location: "Auckland",
      company_duration: "2020/11 - 2021/05"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile: "false",
      job_title: "Bicycle Mechanic",
      employment_type: "Part Time",
      company_name: "Adventure Cycles",
      company_location: "Auckland",
      company_duration: "2018/01 - 2020/12"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile: "false",
      job_title: "Farm Hand",
      employment_type: "Casual",
      company_name: "Crystal Mountain",
      company_location: "Auckland",
      company_duration: "2017/06 - 2021/01"
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { IsMobile });
}
function ResumeSection($$payload, $$props) {
  let IsMobile = $$props["IsMobile"];
  console.log("resume section mobile: " + IsMobile);
  if (IsMobile) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1 class="header svelte-9a224l" style="padding-top:50px;text-align:left;margin-left:15%">Resume</h1> <div style="display:flex;justify-content:center"><img style="width:350px" id="my_photo" src="/resume_image.jpg" alt="picture2"></div> <div class="padding_outside svelte-9a224l"><div><h1 id="work_experience" class="svelte-9a224l">Work Experience</h1> `;
    Work_Content($$payload, { IsMobile });
    $$payload.out += `<!----> <h1 class="svelte-9a224l">Education</h1> `;
    Work_Experience_Section($$payload, {
      IsMobile,
      job_title: "Diploma: Software Development",
      employment_type: "Full Time",
      company_name: "Techtorium",
      company_location: "Auckland",
      company_duration: "2021/01 -2021/12"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile,
      job_title: "Diploma: Information Systems",
      employment_type: "Full Time",
      company_name: "Techtorium",
      company_location: "Auckland",
      company_duration: "2020/01 -2020/12"
    });
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<h1 class="header svelte-9a224l" style="padding-top:50px">Resume</h1> <div class="padding_outside svelte-9a224l"><div><img style="margin-right:50px;width:350px" id="my_photo" src="/resume_image.jpg" alt="picture2"></div> <div style="margin-left:50px"><h1 id="work_experience" class="svelte-9a224l">Work Experience</h1> `;
    Work_Content($$payload, { IsMobile });
    $$payload.out += `<!----> <h1 class="svelte-9a224l">Education</h1> `;
    Work_Experience_Section($$payload, {
      IsMobile,
      job_title: "Diploma: Software Development",
      employment_type: "Full Time",
      company_name: "Techtorium",
      company_location: "Auckland",
      company_duration: "2021/01 -2021/12"
    });
    $$payload.out += `<!----> `;
    Work_Experience_Section($$payload, {
      IsMobile,
      job_title: "Diploma: Information Systems",
      employment_type: "Full Time",
      company_name: "Techtorium",
      company_location: "Auckland",
      company_duration: "2020/01 -2020/12"
    });
    $$payload.out += `<!----></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { IsMobile });
}
function Review_Tile($$payload, $$props) {
  let image_path = $$props["image_path"];
  let review_text = $$props["review_text"];
  let IsMobile = $$props["IsMobile"];
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
  if (IsMobile) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img style="display:flex;width:30px;height:30px;margin:10px 0px" class="photo svelte-dho4ge"${attr("src", image_path)} alt="profile_picture"> <div style="display:flex"><div class="triangle-left svelte-dho4ge" style="margin-left:-15px"></div> <div class="text-box svelte-dho4ge" style="margin:0px"><p class="svelte-dho4ge">${escape_html(selected_text)}</p> <br> <i class="svelte-dho4ge">${escape_html(reviewer_poistion)}</i></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div style="display:flex" class="grid-item svelte-dho4ge"><img style="display:flex" class="photo svelte-dho4ge"${attr("src", image_path)} alt="profile_picture"> <div class="triangle-left svelte-dho4ge"></div> <div class="text-box svelte-dho4ge"><p class="svelte-dho4ge">${escape_html(selected_text)}</p> <br> <i class="svelte-dho4ge">${escape_html(reviewer_poistion)}</i></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { image_path, review_text, IsMobile });
}
function ReviewSection($$payload, $$props) {
  let IsMobile = $$props["IsMobile"];
  if (IsMobile == true) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div style="padding:50px 15% 0px 15%;" class="header"><h1 class="svelte-2oyr2e">My Reviews</h1> <div>`;
    Review_Tile($$payload, {
      IsMobile: "true",
      review_text: "josh",
      image_path: "..\\website_images\\josh photo.jpg"
    });
    $$payload.out += `<!----> `;
    Review_Tile($$payload, {
      IsMobile: "true",
      review_text: "joel",
      image_path: "..\\website_images\\joel photo.jpg"
    });
    $$payload.out += `<!----> `;
    Review_Tile($$payload, {
      IsMobile: "true",
      image_path: "..\\website_images\\oscar photo.jpg",
      review_text: "oscar"
    });
    $$payload.out += `<!----> `;
    Review_Tile($$payload, {
      IsMobile: "true",
      image_path: "..\\website_images\\saurabh photo.jpg",
      review_text: "saurabh"
    });
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<h1 style="display:flex;justify-content:center" class="svelte-2oyr2e">My Reviews</h1> <div class="padding_outside svelte-2oyr2e"><div class="grid-container svelte-2oyr2e">`;
    Review_Tile($$payload, {
      IsMobile,
      review_text: "josh",
      image_path: "..\\website_images\\josh photo.jpg"
    });
    $$payload.out += `<!----> `;
    Review_Tile($$payload, {
      IsMobile,
      review_text: "joel",
      image_path: "..\\website_images\\joel photo.jpg"
    });
    $$payload.out += `<!----> `;
    Review_Tile($$payload, {
      IsMobile,
      image_path: "..\\website_images\\oscar photo.jpg",
      review_text: "oscar"
    });
    $$payload.out += `<!----> `;
    Review_Tile($$payload, {
      IsMobile,
      image_path: "..\\website_images\\saurabh photo.jpg",
      review_text: "saurabh"
    });
    $$payload.out += `<!----></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { IsMobile });
}
function Contact_Form($$payload) {
  $$payload.out += `<form style="width:100%;padding-right:50px" action="https://api.staticforms.xyz/submit" method="post"><input aria-label="access key" type="hidden" name="accessKey" value="c1586de7-c5d0-4167-a9e7-13f9e4d3bd15" class="svelte-mf0izm"> <div style="display:flex"><div style="width:100%; margin-right:35px;"><input placeholder="First name" aria-label="First Name" style="width:100%" type="text" name="name" class="svelte-mf0izm"></div> <div style="width:100%"><input placeholder="Last name" aria-label="Last Name" style="width:100%" type="text" name="last-name" class="svelte-mf0izm"></div></div> <input placeholder="Email" aria-label="Email Address" style="width:100%" type="text" name="email" class="svelte-mf0izm"> <textarea placeholder="Message" aria-label="message Box" style="width:100%" name="message" class="svelte-mf0izm"></textarea> <input type="text" style="display:none" name="replyTo" value="levidelaney2000@gmail.com" class="svelte-mf0izm"> <input type="hidden" name="replyTo" value="@" class="svelte-mf0izm"> <input type="hidden" name="redirectTo" value="https://www.levidelaney.com/" class="svelte-mf0izm"> <input id="send_message" aria-label="submit button" class="button svelte-mf0izm" type="submit" value="Send message"></form>`;
}
function ContactInfo($$payload) {
  $$payload.out += `<div style="width:100%"><h2 class="svelte-4rbb7l">Contact Info</h2> <div class="InfoLine svelte-4rbb7l"><img class="scroll svelte-4rbb7l" id="scroll_element"${attr("src", "../address_icon.png")} alt="portfolio_image"> <p class="svelte-4rbb7l">58 Gaunt Street, Auckland CBD, Auckland 1010</p></div> <div class="InfoLine svelte-4rbb7l"><img class="scroll svelte-4rbb7l" id="scroll_element"${attr("src", "../phone_icon.png")} alt="portfolio_image"> <p class="svelte-4rbb7l">021-029-20282</p></div> <div class="InfoLine svelte-4rbb7l"><img class="scroll svelte-4rbb7l" id="scroll_element"${attr("src", "../email_icon.png")} alt="portfolio_image"> <p class="svelte-4rbb7l">levidelaney2000@gmail.com</p></div></div>`;
}
function ContactSection($$payload, $$props) {
  let IsMobile = $$props["IsMobile"];
  if (IsMobile) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div style="padding-top:50px;padding-bottom:100px; justify-content:center;flex-direction:column;" class="padding_outside svelte-1ejiix" id="contact_me"><h1 class="svelte-1ejiix">Contact Me</h1> <div style="width:100%">`;
    Contact_Form($$payload);
    $$payload.out += `<!----> `;
    ContactInfo($$payload);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div style="padding-top:50px;padding-bottom:100px; justify-content:center;flex-direction:column;align-items:center" class="padding_outside svelte-1ejiix" id="contact_me"><h1 style="padding-bottom:50px" class="svelte-1ejiix">Contact Me</h1> <div style="display: flex; width:100%">`;
    Contact_Form($$payload);
    $$payload.out += `<!----> `;
    ContactInfo($$payload);
    $$payload.out += `<!----></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { IsMobile });
}
function _page($$payload, $$props) {
  push();
  async function OPTIONS() {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "https://trello.com",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }
  const isBrowser = typeof window !== "undefined";
  let isMobile = true;
  if (isBrowser && screen.width > 440) {
    isMobile = false;
  }
  $$payload.out += `<main>`;
  Bio_Section($$payload, { IsMobile: isMobile });
  $$payload.out += `<!----> `;
  Portfolio_Section($$payload, { IsMobile: isMobile });
  $$payload.out += `<!----> `;
  ResumeSection($$payload, { IsMobile: isMobile });
  $$payload.out += `<!----> `;
  ReviewSection($$payload, { IsMobile: isMobile });
  $$payload.out += `<!----> `;
  ContactSection($$payload, { IsMobile: isMobile });
  $$payload.out += `<!----></main>`;
  bind_props($$props, { OPTIONS });
  pop();
}
export {
  _page as default
};
