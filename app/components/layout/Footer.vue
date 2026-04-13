<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#2c2c2c] text-white pt-20 pb-10 px-6">
    
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
      
      <!-- LEFT: NEWSLETTER -->
      <div class="max-w-md">
        <h2 class="text-3xl md:text-4xl font-light mb-4">
          Be An <span class="italic font-secondary">Insider</span>
        </h2>

        <p class="text-sm text-white/70 mb-6">
          Join our newsletter for a VIP pass to unlock the latest trends,
          daily dose of style inspiration, and exclusive offers.
        </p>

        <div class="flex gap-3">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            class="flex-1 px-4 py-3 text-sm bg-white text-black outline-none"
          />
          <button class="px-6 py-3 bg-white text-black text-xs tracking-widest hover:opacity-80">
            Join
          </button>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex gap-16 md:gap-24 ml-auto">
        
        <!-- HELP -->
        <div>
          <h3 class="text-xs tracking-[0.3em] mb-4 text-white/60">HELP</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">FAQ + Help</a></li>
            <li><a href="#" class="hover:underline">How To Use Atome?</a></li>
            <li><a href="#" class="hover:underline">Loyalty Program</a></li>
            <li><a href="#" class="hover:underline">Returns / Exchanges</a></li>
            <li><a href="#" class="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <!-- ABOUT -->
        <div>
          <h3 class="text-xs tracking-[0.3em] mb-4 text-white/60">ABOUT</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:underline">Who We Are</a></li>
            <li><a href="#" class="hover:underline">Find Us Offline</a></li>
            <li><a href="#" class="hover:underline">Terms Of Use</a></li>
            <li><a href="#" class="hover:underline">Terms Of Service</a></li>
          </ul>
        </div>

      </div>
    </div>

    <!-- DIVIDER -->
    <div class="border-t border-white/20 mt-16 pt-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center text-sm text-white/60">
        
        <p>
          © Copyright, LOVE AND FLAIR, {{ year }}
        </p>

        <div class="flex gap-4">
          <a href="#" class="hover:opacity-70">Instagram</a>
          <a href="#" class="hover:opacity-70">Facebook</a>
        </div>

      </div>
    </div>

  </footer>
</template>