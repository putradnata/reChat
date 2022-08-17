<template>
  <header id="hero" class="h-screen pt-9 items-center">
    <div class="container h-full mx-auto">
      <div class="grid grid-cols-2 items-center">
        <div id="content" class="flex flex-col gap-y-4">
          <span class="uppercase text-mainblue font-medium">
            CHAT N’ RECHAT
          </span>
          <h1 class="font-bold text-[2.125rem]">
            Sebuah aplikasi chatting yang <br />
            bisa bikin kamu lupa diri, tapi <br />
            tidak lupa jasa pahlawan!
          </h1>
          <p>
            Sebenernya banyak banget aplikasi chatting yang lebih bagus dari<br />
            ini, maka dari itu lebih baik pake yang lain aja deh ya daripada<br />
            pake aplikasi yang ini.
          </p>
          <div class="flex gap-x-4">
            <SiteButton title="Register" :primary="true" />
            <SiteButton title="Learn More" :primary="false" />
          </div>
        </div>
        <div id="heroImage" class="flex justify-center">
          <img id="heroImage" src="@/assets/images/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SiteButton from './SiteButton.vue';

export default {
  name: 'SiteHero',
  components: { SiteButton },
};
</script>

<style></style>
