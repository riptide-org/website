<template>
  <pre>{{ JSON.stringify(fileData, null, 4) }}</pre>
</template>

<script>
export default {
  async asyncData({ params, error, $axios }) {
    const { serverid, fileid } = params
    try {
      const fileData = await $axios.$get(`/api/v1/server/${serverid}/file/${fileid}`)
      return { fileData }
    } catch ({ response }) {
      // TODO: Handle server unavailble, once handled in API
      if (response && response.status === 404) {
        error({ statusCode: 404, customMessage: 'File Not Found' })
      } else {
        error({ statusCode: 500 })
      }
    }
  }
}
</script>
