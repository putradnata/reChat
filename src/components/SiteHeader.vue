<template>
  <div class="w-full top-0 py-10">
    <div class="container mx-auto justify-between flex items-center">
      <div id="logo">
        <img alt="logo" src="@/assets/images/logo.png" class="w-1/3" />
      </div>
      <nav id="navigationmenu">
        <ul class="flex gap-16">
          <li :key="MenuItem.slug" v-for="MenuItem in MenuItems">
            {{ MenuItem.title }}
          </li>
        </ul>
      </nav>
      <div id="cta">
        <SiteButton title="Download" />
      </div>
    </div>
  </div>
</template>

<script>
import SiteButton from './SiteButton.vue';
export default {
  name: 'SiteHeader',
  data() {
    return {
      MenuItems: [],
    };
  },
  created() {
    this.MenuItems = [
      {
        title: 'Home',
        slug: 'home',
        path: '/',
      },
      {
        title: 'Features',
        slug: 'features',
        path: '/features',
      },
      {
        title: 'Techs',
        slug: 'teachs',
        path: '/techs',
      },
      {
        title: 'FAQs',
        slug: 'faqs',
        path: '/faqs',
      },
    ];
  },
  components: { SiteButton },
};
</script>

<style></style>
