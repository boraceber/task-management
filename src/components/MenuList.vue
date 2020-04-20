<template>
  <div>
    <v-expansion-panel-content style="position:relative">
      <v-form class="d-flex" @submit.prevent="add" ref="form">
        <v-btn icon color="primary" small class="mt-2" @click="showPalette = !showPalette">
          <v-icon left :color="color">mdi-format-color-fill</v-icon>
          <v-spacer></v-spacer>
        </v-btn>

        <ColorPicker v-show="showPalette" @color="setColor($event)" />

        <v-text-field v-model="name" class="mt-0 mr-1 pt-0" :rules="inputRules"></v-text-field>
        <v-btn text small class="mt-3" @click="add">
          <v-icon left big>mdi-plus</v-icon>
        </v-btn>
      </v-form>
      <template>
        <v-chip
          v-for="(item, i) in items"
          :key="item.name"
          :color="item.color"
          dark
          small
          close
          @click:close="remove(i)"
          class="ma-1"
        >{{item.name}}</v-chip>
      </template>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import ColorPicker from "./ColorPicker";

export default {
  data() {
    return {
      name: "",
      items: [],
      color: "",
      showPalette: false,
      inputRules: [
        v => (v !== null && v.length >= 3) || "Min. length should at least be 3"
      ]
    };
  },
  methods: {
    add() {
      if (this.$refs.form.validate()) {
         this.items.push({ name: this.name, color: this.color });
         this.color = "primary";
         setTimeout(() => {
            this.name = "";
         }, 1500);
        //this.$refs.form.resetValidation();
      }
    },
    remove(pos) {
      this.items.splice(pos, 1);
      this.items = [...this.items];
    },
    setColor(e) {
      this.color = e.hex;
      this.showPalette = e.showPalette;
    }
  },
  components: {
    ColorPicker
  },
  created() {},
  mounted(){
    console.log("çalıştı")
  }
};
</script>
