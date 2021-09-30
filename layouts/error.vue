<template>
  <div>
    <h2 class="text-2xl leading-7 font-semibold text-center">
      <span v-if="error.customMessage != null">{{ error.customMessage }}</span>
      <span v-else-if="error.statusCode === 404">Page Not Found</span>
      <span v-else>An Error Occured</span>
    </h2>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>
