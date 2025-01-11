<form
  style="width:100%;padding-right:50px"
  action="https://api.staticforms.xyz/submit"
  method="post"
>
  <!-- Replace with accesKey sent to your email -->
  <input
    aria-label="access key"
    type="hidden"
    name="accessKey"
    value="c1586de7-c5d0-4167-a9e7-13f9e4d3bd15"
  />
  <div style="display:flex">
    <!-- Required -->
    <div style="width:100%; margin-right:35px;">
      <input
        placeholder="First name"
        aria-label="First Name"
        style="width:100%"
        type="text"
        name="name"
      />
    </div>
    <div style="width:100%">
      <input
        placeholder="Last name"
        aria-label="Last Name"
        style="width:100%"
        type="text"
        name="last-name"
      />
    </div>
  </div>

  <input
    placeholder="Email"
    aria-label="Email Address"
    style="width:100%"
    type="text"
    name="email"
  />

  <textarea 
    placeholder="Message"
    aria-label="message Box" 
    style="width:100%" 
    name="message"
  ></textarea>

  <input
    type="text"
    style="display:none"
    name="replyTo"
    value="levidelaney2000@gmail.com"
  />
  <input type="hidden" name="replyTo" value="@" />


    <input
    type="hidden"
    name="redirectTo"
    value="https://www.levidelaney.com/"  />
  <input
    id="send_message"
    aria-label="submit button"
    class="button"
    type="submit"
    value="Send message"
    
  />
</form>

<style>
  #send_message{
    margin-top:20px;
  }
  
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
  input,textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding-top:10px;
    padding-bottom:30px;
  }
input:hover,textarea:hover{
    background-color: rgb(240, 240, 240);
  }

  input,
  textarea {
    border: none;
    border-bottom: 1px solid rgb(170, 170, 170);
  }
  input:focus-visible,
  textarea:focus-visible {
    outline: none;
    border-radius: 5px;
    background: rgb(240, 240, 240);
    border-bottom: 1px solid rgb(109, 109, 109);
  }
</style>
