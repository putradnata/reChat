<template>
  <div class="home bg-baseblue">
    <SiteHeader />
    <SiteHero />
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import SiteHeader from '@/components/SiteHeader.vue';
import SiteHero from '@/components/SiteHero.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  name: 'HomeView',
  components: {
    SiteHeader,
    SiteHero,
    SiteFooter,
  },
};
</script>
