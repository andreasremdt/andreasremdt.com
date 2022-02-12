<script lang="ts">
  enum ButtonText {
    Default = "Send message",
    Sending = "Sending...",
    Error = "Try again",
    Success = "Message successfully sent!",
  }

  let name: string = "";
  let email: string = "";
  let message: string = "";
  let buttonText: string = ButtonText.Default;
  let error: boolean = false;

  async function handleSubmit() {
    buttonText = ButtonText.Sending;

    const response = await fetch("/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      error = true;
      buttonText = ButtonText.Error;
    } else {
      buttonText = ButtonText.Success;
    }
  }
</script>

{#if error}
  <div
    role="alert"
    class="text-rose-500 border border-rose-200 text-center py-3 px-6 mb-8 rounded shadow-sm shadow-rose-50 w-max mx-auto"
  >
    Yikes! Something went wrong while trying to send the email. Please try again later.
  </div>
{/if}

<form class="grid gap-6 grid-cols-2 max-w-4xl mx-auto" on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="name" class="block font-bold mb-1"
      >Your name <span class="text-emerald-500 ml-1" aria-label="Required input">*</span></label
    >
    <input type="text" id="name" class="input" required bind:value={name} />
  </div>

  <div>
    <label for="email" class="block font-bold mb-1"
      >Your email <span class="text-emerald-500 ml-1" aria-label="Required input">*</span></label
    >
    <input type="email" id="email" class="input" required bind:value={email} />
  </div>

  <div class="col-span-2">
    <label for="message" class="block font-bold mb-1"
      >What's up? <span class="text-emerald-500 ml-1" aria-label="Required input">*</span></label
    >
    <textarea
      id="message"
      class="input resize-y h-32"
      required
      bind:value={message}
      minlength="10"
    />
  </div>

  <button
    class="btn btn-primary col-span-2 justify-self-center"
    type="submit"
    disabled={buttonText !== ButtonText.Default}>{buttonText}</button
  >
</form>
