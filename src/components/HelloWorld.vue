
<template>
  <div>
    <circle-item @select-weapon="selectWeapon" :items="items"></circle-item>

    <modal
      name="modal"
      transition="scale"
      :height="300"
      :width="220"
      classes="cute-dog-profile-photo"
    >
      <div>
        <img :src="gif" alt="" />
        <h1>{{ winner }}</h1>
        <button @click="tryAgain">{{ buttonText }}</button>
      </div>
    </modal>

    <h1>COMPUTER CHOICE</h1>
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
      winner: "",
      gif: "",
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
      this.winner = "";
      this.userChosen = this.items[i].text;
      this.computerChoose();
      setTimeout(
        function () {
          this.displayWinner();
        }.bind(this),
        3000
      );
    },
    tryAgain() {
      this.$modal.hide('modal')
      this.choosen = null
      this.winner = ""
      this.gif = ""
      document.querySelector('.selected').classList.remove("selected")
    },

    displayWinner() {
      const u = this.userChosen;
      const c = this.choosen[0].text;
      if (u === c) {
        return this.draw()
      }

      //Check for Rock
      if (u === "rock") {
        if (c === "scissors") {
          return this.won();
        } else {
          return this.lost();
        }
      }
      //Check for Paper
      if (u === "paper") {
        if (c === "scissors") {
          return this.lost();
        } else {
          return this.won();
        }
      }
      //Check for Scissors
      if (u === "scissors") {
        if (c === "rock") {
          return this.lost();
        } else {
          return this.won();
        }
      }
    },
    won() {
      return (
        (this.gif = "https://i.imgur.com/zEebRgQ.gif"),
        (this.winner = "You Won"),
        this.$modal.show("modal")
      );
    },
    lost() {
      this.gif =
        "https://64.media.tumblr.com/144e69f0deb89da67b069e88d6c5bf0c/tumblr_nitye8f62h1tq4of6o1_400.gifv";
      this.winner = "You Lost";
      this.$modal.show("modal");
    },
    draw() {
      this.gif ="https://media4.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif"
      this.winner = "Oops Draw",
      this.$modal.show("modal")
    }
  },
  computed: {
    buttonText() {
      if(this.winner == "You Lost" || this.winner == "You Draw") {
        return "Try Again"
      }else {
        return "Play Again"
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 30vh;
  height: 30vh;
  border-radius: 50%;
}

.selected {
  filter: none;
}

button {
  display: inline-block;
  padding: 1px 2px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: grey;
  border: none;
  border-radius: 15px;
  font-family: 'Cabin Sketch', cursive;
}

button:hover {background-color: black}

</style>
