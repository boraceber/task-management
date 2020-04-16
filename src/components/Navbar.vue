<template>
  <div>
    <v-app-bar flat app class="primary" dark clipped-left>
      <v-app-bar-nav-icon large @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-text-field
        class="mt-7 ml-5 text-center"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        label="Search tasks"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-icon left class="mr-5">mdi-bell</v-icon>
      <v-menu offset-y class="text-center">
        <template v-slot:activator="{on}">
          <v-btn v-on="on" icon class="acc_avatar mr-1" :ripple="false" depressed>
            <!-- <v-icon size="26" left>mdi-account</v-icon> -->
            <v-avatar color="pink" size="40">
              <span class="white--text headline">BÇ</span>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/settings">
            <v-list-item-title>
              <v-icon left>mdi-cog-outline</v-icon>
              <span>Settings</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="/settings">
            <v-list-item-title>
              <v-icon left>mdi-logout-variant</v-icon>
              <span>Sign Out</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="secondary" clipped>
      <v-expansion-panels flat accordion hover focusable class="mt-4">
        <v-expansion-panel
          v-for="item in menu"
          :key="item.title"
          class="secondary"

        >
          <v-expansion-panel-header>
            <div>
              <v-icon :color="item.color" class="mr-4">{{item.icon}}</v-icon>
              <span class="primary--text">{{item.title}}</span>
            </div>
            <template v-slot:actions v-if="!item.subitems">
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <template v-if="item.subitems">
            <v-expansion-panel-content>

                <v-combobox flat
                v-model="chips"
                :items="item.subitems"
                chips
                label="Your favorite hobbies"
                multiple    
                solo
                append-icon=""
                >
                <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item.id)"
                    >
                    <strong>{{ item.title }}</strong>&nbsp;
                    </v-chip>
                </template>
                </v-combobox>

               
            </v-expansion-panel-content>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- <v-list class="mt-6">
        <v-list-item to="/" v-for="item in menu" :key="item.title">
          
          <v-list-item-avatar>
            <v-icon :color="item.color">{{item.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-action v-if="item.subitems">
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-chevron-down</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>-->
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    menu: [
      { icon: "mdi-inbox-arrow-down", color: "pink", title: "Inbox" },
      { icon: "mdi-calendar-today", color: "green", title: "Today" },
      { icon: "mdi-calendar-month", color: "indigo", title: "Next 7 Days" },
      {
        icon: "mdi-laptop-mac",
        color: "red",
        title: "Projects",
        subitems: [
          { id: "1", title: "lorem" },
          { id: "2", title: "ipsum" }
        ]
      },
      {
        icon: "mdi-code-tags",
        color: "deep-orange",
        title: "Tags",
        subitems: [
          { id: "1", title: "lorem" },
          { id: "2", title: "ipsum" }
        ]
      },
      { icon: "mdi-account-multiple", color: "brown", title: "People" },
      { icon: "mdi-cog-outline", color: "blue-grey", title: "Admin" }
    ]
  })
};
</script>

<style lang="css" scoped>
.acc_avatar:before {
  background: transparent !important;
}

.v-expansion-panel--active > .v-expansion-panel-header {
    min-height: inherit;
}
</style>