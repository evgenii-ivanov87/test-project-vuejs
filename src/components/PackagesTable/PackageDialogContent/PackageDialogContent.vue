<template>
  <v-row no-gutters class="mt-5">
    <v-col cols="12">
      <v-list two-line>
        <div v-if="packageItem.author">
          <v-list-item>
            <v-row>
              <v-col cols="5">
                <v-card-title class="fon.t-weight-regular">Author</v-card-title>
              </v-col>
              <v-col cols="7">
                <v-list-item-content
                  v-for="(value, key) in packageItem.author"
                  :key="value"
                >
                  <v-list-item-title>{{ key }}</v-list-item-title>
                  <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item>
            <v-list-item-action>
              <v-card-title class="font-weight-regular">Author</v-card-title>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>name</v-list-item-title>
              <v-list-item-subtitle>{{ packageItem.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-divider></v-divider>
        <v-list-item>
          <v-row>
            <v-col cols="5">
              <v-card-title class="font-weight-regular">Description</v-card-title>
            </v-col>
            <v-col cols="7">
              <v-list-item-content>
                <v-list-item-subtitle v-html="packageItem.description">
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-row>
            <v-col cols="5">
              <v-card-title class="font-weight-regular">Version</v-card-title>
            </v-col>
            <v-col cols="7">
              <v-list-item-content>
                <v-list-item-subtitle v-html="packageItem.version">
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-row>
            <v-col cols="5">
              <v-card-title class="font-weight-regular">Date</v-card-title>
            </v-col>
            <v-col cols="7">
              <v-list-item-content>
                <v-list-item-subtitle>
                  {{ $dayjs(packageItem.date).format('MM/DD/YYYY') }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-row>
            <v-col cols="5">
              <v-card-title class="font-weight-regular">Links</v-card-title>
            </v-col>
            <v-col cols="7">
              <v-list-item-content
                v-for="(value, key) in packageItem.links"
                :key="value"
              >
                <v-list-item-title>{{ key }}</v-list-item-title>
                <a class="v-list-item__subtitle" :href="value">{{ value }}</a>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-row>
            <v-col cols="5">
              <v-card-title class="font-weight-regular">Maintainers</v-card-title>
            </v-col>
            <v-col cols="7">
              <v-list-item-content
                v-for="maintainer in packageItem.maintainers"
                :key="maintainer.email"
              >
                <div v-for="(value, key) in maintainer" :key="value">
                  <v-list-item-title>{{ key }}</v-list-item-title>
                  <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
                </div>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-row>
            <v-col cols="5">
              <v-card-title class="font-weight-regular">Publisher</v-card-title>
            </v-col>
            <v-col cols="7">
              <v-list-item-content
                v-for="(value, key) in packageItem.publisher"
                :key="value"
              >
                <v-list-item-title>{{ key }}</v-list-item-title>
                <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PackageDialogContent',
  props: {
    packageItem: {
      type: Object,
    },
  },
};
</script>

<style lang="sass">
@import "PackageDialogContent"
</style>
