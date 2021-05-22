<template>
  <div>
    <div>Merve</div>
    <circle-item :items=items></circle-item>
  </div>
</template>

<script>
import CircleItem from './circles/CircleItem.vue'
import { items } from './data'
export default {
  components: { CircleItem },
  name: 'HelloWorld',
  data() {
    return {
      items: items,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.itemsBox {
  display: flex;
  border: 2px solid black;
  flex-wrap: wrap;
}
</style>
