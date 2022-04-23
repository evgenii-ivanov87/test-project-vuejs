<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              @input="onSearch"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="packages"
            :loading="loading"
            :search="search"
            :server-items-length="total"
            :options.sync="options"
            sort-by="name"
            :mobile-breakpoint="0"
            disable-sort
            :footer-props="{ itemsPerPageOptions: [10, 25, 50, 100] }"
            @click:row="viewDetails"
          >
            <template v-slot:item.author="{ item }">
              <span>{{ deepGet(item, "author.name", item.name) }}</span>
            </template>
            <template v-slot:item.date="{ item }">
              <span>{{ $dayjs(item.date).format('MM/DD/YYYY') }}</span>
            </template>

            <template v-slot:item.description="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <div class="truncate" v-on="on" v-html="item.description"></div>
                </template>
                <span v-html="item.description"></span>
              </v-tooltip>
            </template>

            <template v-slot:no-data>
              NO DATA
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="packageDialog"
      transition="dialog-top-transition"
      max-width="600"
    >
      <v-card>
        <v-toolbar color="primary" dark>
          <div class="text-h5">{{ selectedPackage.name }}</div>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDetails">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="v-dialog-content overflow-y-auto">
          <PackageDialogContent :packageItem="selectedPackage"> </PackageDialogContent>
          <v-card-actions class="justify-end">
            <v-btn text @click="closeDetails">Close </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script src="./PackagesTable.js"></script>
<style lang="sass">
@import "PackagesTable"
</style>
