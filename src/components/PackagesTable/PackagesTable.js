import { debounce, get } from 'lodash';

export default {
  name: 'PackagesTable',
  components: {
    PackageDialogContent: () => import('@/components/PackagesTable/PackageDialogContent/PackageDialogContent.vue'),
  },

  data: () => ({
    search: null,
    options: {},
    loading: false,
    packageDialog: false,
    headers: [
      {
        text: 'Name',
        value: 'name',
      },
      {
        text: 'Author',
        value: 'author',
      },
      {
        text: 'Date',
        value: 'date',
      },
      {
        text: 'Description',
        value: 'description',
      },
      {
        text: 'Version',
        value: 'version',
      },
    ],
    selectedPackage: {},
  }),
  computed: {
    packages() {
      return this.$store.getters['packages/packagesData'];
    },
    total() {
      return this.$store.state.packages.total;
    },
  },
  watch: {
    options: {
      handler() {
        if (this.search) this.getDataFromApi();
      },
      deep: true,
    },
  },

  created() {},

  methods: {
    async getDataFromApi() {
      this.loading = true;
      await this.$store.dispatch('packages/fetchPackagesSearchList', {
        size: this.options.itemsPerPage,
        q: this.search,
        from: (this.options.page - 1) * this.options.itemsPerPage,
      });
      this.loading = false;
    },
    async onSearch(value) {
      if (value) {
        debounce(this.getDataFromApi, 500)();
      } else {
        await this.$store.dispatch('packages/resetPackagesState');
      }
    },
    viewDetails(item) {
      this.selectedPackage = { ...item };
      this.packageDialog = true;
    },
    closeDetails() {
      this.selectedPackage = {};
      this.packageDialog = false;
    },
    deepGet(obj, path, defaultValue) {
      return get(obj, path, defaultValue);
    },
  },
};
