<template>
  <div class="itemsBox">
    <div v-for="( item, index ) in items" :key="item.id">
      <h2>{{ item.text.toUpperCase() }}</h2>
      <img @click="selectWeapon(index)" :class="{ selected: index == selectedItem || items.length == 1 }" :src="item.img" class="circle">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: null
    }
  },
  props: ['items'],
  methods: {
    selectWeapon(i) {
      this.selectedItem = i
      this.$emit('select-weapon', i)
    }
  },
}
</script>

<style scoped>
.circle {
  border-radius: 50%;
  transition: all transform 0.5s;
  max-width: fit-content;
  filter: grayscale();
  width: 120px;
	height: 120px;
	border: 6px solid whitesmoke;
	box-shadow: 2px 2px 10px 2px rgba(56, 218, 151, 0.5);
	transition: transform filter 0.4s ;
}

.circle:hover {
  filter: none;
  cursor: pointer;
  transform: scale(1.1);
}

.selected {
  filter: none;
}

.itemsBox {
  display: flex;
  justify-content: space-around;
  min-width: fit-content;
}
</style>