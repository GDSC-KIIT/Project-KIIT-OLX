<template>
  <div class="fixed max-w-7xl left-0 right-0 mx-auto top-0 m-0 z-[10]">
    <nav
      class="flex items-center justify-between p-2 max-w-7xl mx-auto text-primary font-popins "
    >
      <div class="flex gap-2 items-center">
        <NuxtImg
          src="/KIIT olx.svg"
          alt="KIIT OLX"
          width="50"
          height="50"
          class="h-[50px] mb-1"
        />
        <h1 class="text-xl"><span class="font-bold">KIIT</span> OLX</h1>
      </div>
      <div
        class="flex items-center space-x-4 md:hidden relative z-10"
        :class="isMenuOpen ? 'hidden' : 'block'"
      >
        <button @click="toggleMenu" class="focus:outline-none">
          <VectorIconsHamburger class="text-2xl" />
        </button>
      </div>
      <div
        class="flex items-center space-x-4 md:hidden relative z-10"
        :class="isMenuOpen ? 'block text-white' : 'hidden'"
      >
        <button @click="toggleMenu" class="focus:outline-none">
          <VectorIconsClose class="text-2xl" />
        </button>
      </div>
      <div
        :class="{
          hidden: !isMenuOpen,
          block: isMenuOpen,
        }"
        class="absolute bg-black/70 md:bg-transparent w-[50%] h-screen md:h-auto md:w-auto top-0 right-0 md:static md:flex items-center justify-center md:space-x-4"
      >
        <ul
          class="md:flex flex flex-col md:flex-row items-center justify-center text-center text-white md:text-primary md:space-x-4 h-[80%] my-auto"
        >
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="p-4 md:p-0 md:m-0 my-2 md:border-0 border-b-2 border-white"
          >
            <a
              :href="item.link"
              class="hover:text-gray-400 text-center text-2xl md:text-base"
              >{{ item.name }}</a
            >
          </li>
          <div :class="isMenuOpen ? 'block' : 'hidden'" class="m-4 md:hidden">
          <div class="text-2xl">
            <a href="/login" class="hover:text-grey-400 text-xl mx-auto w-fit text-white text-center m-4 py-4">Login</a>
            <a
              href="/signup"
              class="hover:text-white flex gap-1 items-center bg-secondary hover:bg-secondary/95 text-white px-4 py-2 rounded-md w-fit m-4 mx-auto"
              >Sign Up
              <!-- <div><VectorIconsRightArrow class="text-xl" /></div -->
            </a>
          </div>
        </div>
        </ul>
        
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <a href="/login" class="hover:text-grey-400">Login</a>
        <a
          href="/signup"
          class="hover:text-white flex gap-1 items-center bg-secondary hover:bg-secondary/95 text-white px-4 py-2 rounded-full"
          >Get Started
          <div><VectorIconsRightArrow class="text-2xl" /></div
        ></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Store", link: "/store" },
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
