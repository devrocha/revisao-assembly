const app = document.getElementById('app') as HTMLElement

export function profilePage() {
    app.innerHTML = `<div class="flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl">Profile Information</h2>
          <button class="px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700">
            <i data-lucide="square-pen"></i>Edit Profile
          </button>
        </div>

        <div class="flex items-center mb-8">
          <img class="w-24 h-24 rounded-full">
          <div class="ml-6">
            <h3 class="text-xl">John Doe</h3>
            <p class="text-neutral-500">john.doe@example.com</p>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm text-neutral-500">Full Name</label>
            <p class="text-neutral-800">John Doe</p>
          </div>
          <div>
            <label class="block text-sm text-neutral-500">Email</label>
            <p class="text-neutral-800">john.doe@example.com</p>
          </div>
          <div>
            <label class="block text-sm text-neutral-500">Bio</label>
            <p class="text-neutral-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <label class="block text-sm text-neutral-500">Location</label>
            <p class="text-neutral-800">New York, USA</p>
          </div>
          <div>
            <label class="block text-sm text-neutral-500">Joined</label>
            <p class="text-neutral-800">May 1, 2025</p>
          </div>
        </div>
      </div>
    </div>`
}