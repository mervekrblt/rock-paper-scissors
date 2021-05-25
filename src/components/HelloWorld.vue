<template>
  <div>
    <circle-item @select-weapon="selectWeapon" :items="items"></circle-item>

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
      userChosen: null,
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
      this.choosen = null;
      setTimeout(
        function () {
          const randomNum = Math.floor(Math.random() * this.items.length);
          this.choosen = [this.items[randomNum]];
        }.bind(this),
        1500
      );
    },
    selectWeapon(i) {
      this.userChosen = this.items[i].text;
      this.computerChoose()
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  width: 50px;
  height: 50px;
  transition: all 0.2s;
}

img:hover {
  cursor: pointer;
  transform: scale(1.5);
}

.bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
