<template lang="html">
  <section>
    <com-Head></com-Head>
    <com-List></com-List>
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