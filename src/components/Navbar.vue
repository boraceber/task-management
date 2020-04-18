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
        <v-expansion-panel v-for="item in menu" :key="item.title" class="secondary">
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
            <v-expansion-panel-content style="position:relative">
              <v-form class="d-flex" @submit.prevent>
                <v-btn icon color="primary" small class="mt-2" @click="palette = !palette">
                  <v-icon left :color="fill">mdi-format-color-fill</v-icon>
                  <v-spacer></v-spacer>
                </v-btn>

                <compact-picker flat tile  class="secondary" v-if="palette"
                  style="position:absolute; right:0px; top: 40px; z-index:5"
                  @input="updateValue"
                  :value="colors"
                  :palette="[ 
    '#f00', '#00ff00', '#00ff0055', 'rgb(201, 76, 76)', 'rgba(0,0,255,1)', 'hsl(89, 43%, 51%)', 'hsla(89, 43%, 51%, 0.6)'
  ]"
                ></compact-picker>

                <v-text-field v- v-model="projectTitle" class="mt-0 mr-1 pt-0"></v-text-field>
                <v-btn text small class="mt-3" @click="addProject">
                  <v-icon left big>mdi-plus</v-icon>
                </v-btn>
              </v-form>
              <template>
                <v-chip v-for="item in projects" :key="item" :color="item.color" dark small close class="ma-1">{{item.title}}</v-chip>
              </template>
            </v-expansion-panel-content>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { Compact } from "vue-color";

export default {
  components: {
    "compact-picker": Compact
  },
  methods: {
    addProject() {
      //const {title, color} = this.project 
      this.projects.push({title : this.projectTitle, color: this.fill});
      this.projectTitle = "";
      this.fill = "grey"

    },
    updateValue(e){
      this.fill = e.hex;
      this.palette = false;
    }
  },
  data: () => ({
    drawer: true,
    projectTitle: "",
    projects: [],
    //updateValue: "",
    colors: "",
    fill: "",
    palette: false,
    menu: [
      { icon: "mdi-inbox-arrow-down", color: "pink", title: "Inbox" },
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
      { icon: "mdi-account-multiple", color: "brown", title: "Users" },
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
</style>