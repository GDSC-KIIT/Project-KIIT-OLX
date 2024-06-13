<template>
  <div class="relative max-w-7xl mx-auto overflow-hidden">
    <div class="overflow-hidden max-w-7xl mx-auto z-[-50]">
      <div
        class="absolute h-[37rem] w-[37rem] rounded-[250px] backdrop-filter blur bg-gradient-to-tr from-footer via-lime-100 z-[-50] left-[50%] translate-x-[-50%] md:hidden "
      />
        <div
            class="absolute h-[35rem] w-[35rem] rounded-[250px] backdrop-filter blur bg-gradient-to-tr from-footer via-lime-100 z-[-50] right-[-50px] top-[-50px] hidden md:block"
        />
      <div
        class="hidden md:block absolute h-[30rem] w-[30rem] rounded-[250px] backdrop-filter blur bg-gradient-to-tr from-footer via-lime-100 z-[-50] left-[-170px] top-[100px]"
      />
      <!-- <div
        class="absolute h-[30rem] w-[30rem] rounded-[250px] backdrop-filter blur bg-gradient-to-tr from-footer via-lime-100 z-[-50] left-[-170px] top-[50px] "
      /> -->
    </div>
    <div class="my-24 sm:my-36 flex flex-col justify-center items-center">
      <div
        class="flex sm:block flex-wrap justify-center items-center font-extrabold font-popins text-primary text-5xl sm:text-6xl text-center leading-[1.15] my-4"
      >
        <div >Connecting Campus</div>
        <div>Sellers & Buyers</div>
      </div>
      <div
        class="mt-5 text-lg text-gray-700 sm:text-xl max-w-2xl text-center backdrop:blur-sm mx-auto p-2"
      >
        <span class="font-extrabold">KIIT OLX</span> is designed specifically for the KIIT University under GDSC
        KIIT. It enables easy exchange of owned items among students, faculty,
        and staff.
      </div>
      <div class="flex items-center my-4">
        <a
          href="/signup"
          class="hover:text-white flex gap-1 items-center bg-secondary hover:bg-secondary/95 text-white px-4 py-2 rounded-full"
          >Get Started
          <div><VectorIconsRightArrow class="text-2xl" /></div
        ></a>
      </div>
    </div>
  </div>
</template>
