<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>
    <v-content>
      <v-btn absolute dark x-large fab bottom right color="pink" style="bottom:15px;">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-content>
  </v-app>
</template>
<style>

</style>
<script>
import Navbar from './components/Navbar'
export default {
  name: "App",
  components : {
    Navbar
  }
};
</script>
