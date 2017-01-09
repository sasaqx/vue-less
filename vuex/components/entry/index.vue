<template lang="html">
  <section>
    <com-Head></com-Head>
    <div class="index">this is index</div>
    <com-Foot></com-Foot>
  </section>
</template>

<script>
import comHead from '../common/header.vue'
import comFoot from '../common/footer.vue'
export default {
	components: {
    	comHead,
    	comFoot
  	}
}
</script>

<style>
  .index{
    font-size: .4rem;
    color: red;
  }
</style>



