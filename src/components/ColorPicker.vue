<template>
  <compact-picker
    flat
    tile
    class="secondary compact-picker"
    @input="updateValue"
    :value="colors"
    :palette="palette"
  ></compact-picker>
</template>

<script>
import { Compact } from "vue-color";
export default {
  data() {
    return {
      colors: "",
      palette: [
        "#bada55",
        "#7fe5f0",
        "#ff0000",
        "#ff80ed",
        "#696969",
        "#133337",
        "#065535",
        "#c0c0c0",
        "#5ac18e",
        "#ff7373",
        "#ffd700",
        "#e6e6fa",
        "#40e0d0",
        "#0000ff",
        "#003366",
        "#faebd7",
        "#800000",
        "#eeeeee",
        "#800080"
      ]
    };
  },
  methods: {
    updateValue(e) {
      //console.log(e.hex + "-" + "false")
      this.$emit("color", { hex: e.hex, showPalette: false });
    }
  },
  components: {
    "compact-picker": Compact
  }
};
</script>

<style lang="css" scoped>
.compact-picker {
  position: absolute;
  right: 0px;
  top: 40px;
  z-index: 5;
}
</style>