<template>
  <footer>
    <div class="bg-secondaryblue container mx-auto rounded-t-lg">
      <div class="grid md:grid-cols-3 p-20 gap-[1.875rem]">
        <section id="footer-col-1" class="flex flex-col gap-y-5">
          <h3 class="footer-title text-xl font-medium">Chat N' reChat</h3>
          <p>
            Sebenernya banyak banget aplikasi chatting yang lebih bagus <br />
            dari ini, maka dari itu lebih baik pake yang lain aja deh ya<br />
            daripada pake aplikasi yang ini.
          </p>
          <span> COPYRIGHT (C) 2021. DESIGN BY NAUVAL </span>
        </section>
        <section id="footer-col-2" class="flex flex-col gap-y-5">
          <h3 class="footer-title text-xl font-medium">Sitemap</h3>
          <ul class="flex flex-col gap-y-[0.625rem]">
            <li :key="SitemapItem.slug" v-for="SitemapItem in SitemapItems">
              {{ SitemapItem.title }}
            </li>
          </ul>
        </section>
        <section id="footer-col-3" class="flex flex-col gap-y-5">
          <h3 class="footer-title text-xl font-medium">Tetep Terhubung</h3>
          <p>Lihat kami pansos di sosial media berikut:</p>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      SitemapItems: [],
    };
  },
  created() {
    this.SitemapItems = [
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
};
</script>

<style></style>
