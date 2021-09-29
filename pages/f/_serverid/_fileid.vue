<template>
  <pre>{{ JSON.stringify(fileData) }}</pre>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { serverid, fileid } = params
    const fileData = await $axios.$get(`/api/v1/server/${serverid}/file/${fileid}`)
    // todo: 404
    return { fileData }
  }
}
</script>
