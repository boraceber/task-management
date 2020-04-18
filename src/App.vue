<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="pl-5 pt-5 pr-3 overdue" outlined tile>
              <v-card class="d-flex" style="position:relative" flat>
                <v-tooltip top>
                  <template v-slot:activator="{on}">
                    <v-chip color="pink mb-2 mr-2" dark x-small label v-on="on">Overdue</v-chip>
                  </template>
                  <span>Overdue</span>
                </v-tooltip>
                
                <v-tooltip top small>
                  <template v-slot:activator="{on}">
                     <v-chip color="light-blue mb-2 mr-2" dark x-small label v-on="on">Project Name</v-chip>
                  </template>
                  <span>Project Name</span>
                </v-tooltip>
               
                               <v-tooltip top small>
                  <template v-slot:activator="{on}">
                     <v-chip color="primary white--text mb-2" x-small label v-on="on">Draft</v-chip>
                  </template>
                  <span>Status</span>
                </v-tooltip>

                

                <v-spacer></v-spacer>
                <div
                  class="d-flex flex-column justify-space-between align-right"
                  style="position: absolute; top:0px; right:0; height:90px"
                >
                  <v-icon small class="mr-2">mdi-pencil-outline</v-icon>
                  <v-icon small class="mr-2">mdi-comment-outline</v-icon>
                  <v-icon small class="mr-2">mdi-trash-can-outline</v-icon>
                </div>
              </v-card>

              <h1
                class="body-2 primary--text mt-1 mb-2 mr-5"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
              <p class="grey--text caption mb-0">Created by Bora Çeber</p>
              <p class="pink--text caption">Jan 27 2018</p>
            </v-card>
          </v-col>
          <v-col md="2"></v-col>
        </v-row>
      </v-container>

      <v-btn absolute dark x-large fab bottom right color="pink" style="bottom:15px;">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-content>
  </v-app>
</template>
<style>
.ticket {
  border-left: 6px pink solid !important;
}
.complete {
  border-left: 6px solid #3cd1c2 !important;
}
.ongoing {
  border-left: 6px solid orange !important;
}
.overdue {
  border-left: 6px solid pink !important;
}
</style>
<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
