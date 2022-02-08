<form class="grid gap-6 grid-cols-2 max-w-4xl mx-auto">
  <div>
    <label for="name" class="block font-bold mb-1"
      >Your name <span class="text-emerald-500 ml-1" aria-label="Required input">*</span></label
    >
    <input type="text" id="name" class="input" required />
  </div>

  <div>
    <label for="email" class="block font-bold mb-1"
      >Your email <span class="text-emerald-500 ml-1" aria-label="Required input">*</span></label
    >
    <input type="email" id="email" class="input" required />
  </div>

  <div class="col-span-2">
    <label for="message" class="block font-bold mb-1"
      >What's up? <span class="text-emerald-500 ml-1" aria-label="Required input">*</span></label
    >
    <textarea id="message" class="input resize-y h-32" required />
  </div>

  <button class="btn btn-primary col-span-2 justify-self-center">Send message</button>
</form>
