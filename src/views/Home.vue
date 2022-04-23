<template>
  <PackagesTable />
</template>

<script>

export default {
  name: 'Home',

  components: {
    PackagesTable: () => import('@/components/PackagesTable/PackagesTable.vue'),
  },
};
</script>
