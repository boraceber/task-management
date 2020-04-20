<template>
  <div>
    <v-app-bar flat app class="primary" dark clipped-left>
      <v-app-bar-nav-icon large @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-text-field
        class="mt-7 ml-5 text-center"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        label="Search tasks"
        small
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
      <v-expansion-panels flat accordion hover focusable class="mt-4 ml-n1">
        <v-expansion-panel v-for="item in menu" :key="item.title" class="secondary" @click="item.to ? navigateTo(item.to) : ''">
          <v-expansion-panel-header>

              <!-- <a :href="item.to" class="to">
                <v-icon :color="item.color" class="mr-4">{{item.icon}}</v-icon>
                <span class="primary--text">{{item.title}}</span>
              </a> -->
              <div>
                                <v-icon :color="item.color" class="mr-4">{{item.icon}}</v-icon>
                <span class="primary--text">{{item.title}}</span>
              </div>
            

            <template v-slot:actions v-if="!item.subitems">
              <v-icon></v-icon>
            </template>
          </v-expansion-panel-header>
          <template v-if="item.subitems">
            <MenuList></MenuList>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </div>
</template>

<script>
import MenuList from "./MenuList";

export default {
  components: {
    MenuList
  },
  methods: {
    navigateTo(path){
      //console.log(this.menu)
      this.$router.push({path: path});
    }
  },
  data: () => ({
    drawer: true,
    menu: [
      { icon: "mdi-inbox-arrow-down", color: "pink", title: "Inbox", to: "/" },
      {
        icon: "mdi-laptop-mac",
        color: "red",
        title: "Projects",
        subitems: true
      },
      {
        icon: "mdi-code-tags",
        color: "deep-orange",
        title: "Tags",
        subitems: true
      },
      {
        icon: "mdi-account-multiple",
        color: "brown",
        title: "Users",
        to: "/users"
      },
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

.v-expansion-panel-content__wrap {
  padding: 0 24px 0 !important;
  flex: 1 1 auto;
  max-width: 100%;
}
a.to{
  text-decoration: none;
}
</style>