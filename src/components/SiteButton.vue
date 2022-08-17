<template>
  <a
    :href="[path]"
    :class="[
      primary
        ? 'bg-mainblue rounded-md text-white capitalize px-11 py-4'
        : 'bg-secondaryblue rounded-md text-mainblue capitalize px-11 py-4',
    ]"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'SiteButton',
  props: {
    title: String,
    path: {
      type: String,
      default: () => '#',
    },
    primary: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style></style>
