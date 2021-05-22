<template>
  <div class="itemsBox">
    <div v-for="( item, i ) in items" :key="item.id" @click="selectWeapon(i)">
      <section>{{ item.text }}</section>
      <img :src="item.img" width="200px" height="200px" class="circle">
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    selectWeapon(i) {
      console.log(i)
    }
  }
}
</script>

<style>
.circle {
  background: transparent;
  border: 2px red solid;
  border-radius: 50%;
  background-color: violet;
  filter: drop-shadow(2px 4px 8px red);
  transition: transform 0.5s;
}

.circle:hover {
  background-color: teal;
  transform: scale(1.1);
}

.itemsBox {
  display: flex;
  border: 2px solid black;
  flex-wrap: wrap;
}
</style>