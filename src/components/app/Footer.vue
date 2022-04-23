<template>
  <v-card
    class="flex"
    flat
    tile
  >
    <v-card-title class="black">
      <strong class="subheading">Get connected!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="social in socials"
        :key="social.icon"
        class="mx-4"
        dark
        icon
        target="_blank"
        :href="social.url"
      >
        <v-icon size="24px">
          {{ social.icon }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="py-2 white--text text-center">
      {{ new Date().getFullYear() }} — <strong>Evgenii Ivanov</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    socials: [
      {
        icon: 'mdi-github-circle',
        url: 'https://github.com/evgenii-ivanov87/',
      },
      {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/evgen-ivanov/',
      },
    ],
  }),
};
</script>

<style scoped>

</style>
