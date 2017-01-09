<template lang="html">
  <section>
    <com-Head></com-Head>
<<<<<<< HEAD:vuex/components/entry/detail.vue
    <com-List></com-List>
=======
>>>>>>> 98c76ed7fa2ede06e4dd51452d40dccf18b10bef:vuex/components/entry/detail.vue
    <div class="detail">this is detail</div>
    <com-Foot></com-Foot>
  </section>
</template>

<script>

import comHead from '../common/header.vue'
import comList from '../common/list.vue'
import comFoot from '../common/footer.vue'
export default {
	components: {
    	comHead,
       comList,
    	comFoot
  	}
}
</script>

<style>
  .detail{
    font-size: .4rem;
    color: blue;
  }
</style>