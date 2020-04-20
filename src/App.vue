<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>
    <v-content>
      <router-view></router-view>
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
