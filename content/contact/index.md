---
layout: layouts/base.njk
eleventyNavigation:
  key: Contact
  order: 4
---
<div class="min-h-[50vh] grid place-content-center justify-items-center relative">
  <h2 class="font-bold text-4xl my-5">Contact</h2>
  <!-- <p class="font-light text-xl">Read our data driven and evidence based Tales</p> -->
  <!-- <a class="text-6xl font-light absolute bottom-5 text-gray-300 animate-bounce" href="#maincontent"><span class="iconify" data-icon="mdi-chevron-down"></span></a> -->
</div>

<div id="maincontent" class="max-w-[30rem] mx-auto">
  <h4 class="font-medium text-md text-center mb-2">Find us on Social Media</h4>
  <div class="flex justify-center gap-3 text-xl mb-20">
      <a href="mailto:tinydatatales@gmail.com"><span class="iconify text-[#f2a60c]" data-icon="mdi-email"></span></a>
      <a href="https://twitter.com/tinydatatales"><span class="iconify text-[#1A8CD8]" data-icon="mdi-twitter"></span></a>
      <a href="https://www.instagram.com/tinydatatales/"><span class="iconify text-[#FF3040]" data-icon="mdi-instagram"></span></a>
      <a href="https://github.com/tinydatatales"><span class="iconify text-[#010409]" data-icon="mdi-github"></span></a>
  </div>

  <h4 class="font-medium text-md text-center mb-2">Send us a message</h4>
  <form name="Contact Form" method="POST" action="success" data-netlify="true" onSubmite="submit" data-netlify-honeypot="bot-field">
    <input name="bot-field" hidden>
    <div class="mb-6">
      <label for="name" class="block text-sm font-medium mb-2">Name <span class="text-red-500">*</span></label>
      <input type="text" name="Name" id="name" placeholder="Name" class="bg-transparent block w-full border border-gray-300 p-2 text-sm rounded">
    </div>
  
    <div class="mb-6">
      <label for="email" class="block text-sm font-medium mb-2">Email <span class="text-red-500">*</span></label>
      <input type="email" name="Email" id="email" placeholder="Email" class="bg-transparent block w-full border border-gray-300 p-2 text-sm rounded">
    </div>
  
    <div class="mb-6">
      <label for="message" class="block text-sm font-medium mb-2">Message <span class="text-red-500">*</span></label>
      <textarea name="Message" id="message" placeholder="Message" rows="6" class="bg-transparent block w-full border border-gray-300 p-2 text-sm rounded"></textarea>
    </div>
  
    <button type="submit" class="block w-full bg-blue-700 text-white py-2 rounded-md font-medium hover:bg-blue-800">Send</button>
  </form>
</div>