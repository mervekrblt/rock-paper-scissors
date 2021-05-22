<template>
  <div>
    <circle-item @select-weapon="selectWeapon" :items="items"></circle-item>
    <button @click="computerChoose">Göster</button>
    <div>Score</div>
    <circle-item :items="choosen"></circle-item>
  </div>
</template>

<script>
import CircleItem from "./circles/CircleItem.vue";
export default {
  components: { CircleItem },
  name: "HelloWorld",
  data() {
    return {
      choosen: null,
      items: [
        {
          id: 0,
          text: "rock",
          img: require("../assets/img/rock.png"),
        },
        {
          id: 1,
          text: "paper",
          img: require("../assets/img/paper.png"),
        },
        {
          id: 2,
          text: "scissors",
          img: require("../assets/img/makas.png"),
        },
      ],
    };
  },
  methods: {
    computerChoose() {
      const randomNum = Math.floor(Math.random() * this.items.length);
      console.log(randomNum, this.items[randomNum]);
      this.choosen = [this.items[randomNum]]
    },
    selectWeapon(i) {
      console.log(i);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
