<template>
  <div class="content has-text-centered">
    <p class="is-size-4"><strong>{{ fileMetadata.username }}</strong> shared a file with you:</p>
    <p class="is-size-4 mb-0"><strong>{{ fileMetadata.file_name }}</strong></p>
    <p class="is-size-6">({{ readableSize }})</p>

    <a :href="downloadLink" target="__blank" class="btn"><b-button type="is-primary"><strong>Download</strong></b-button></a>
    <p class="is-size-5 mt-3"><em>-or-</em></p>
    <b-tooltip label="Click to copy" type="is-light">
      <pre style="cursor: pointer;" @click="copyWget">{{wgetCmd}}</pre>
    </b-tooltip>
    <p style="mt-1">Created {{creationTime}}. This link will expire {{expiryTime}}.</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  async asyncData({ params, error, $axios, $config }) {
    const { agentId, fileId } = params
    try {
      const fileMetadata = await $axios.$get(`/agents/${agentId}/files/${fileId}/metadata`)
      return { fileMetadata, agentId, fileId }
    } catch ({ response }) {
      if (response && response.status === 404) {
        error({ statusCode: 404, customMessage: 'File Not Found' + JSON.stringify(response.data) })
      } else {
        error({ statusCode: 500 })
      }
    }
  },

  methods: {
    copyWget() {
      navigator.clipboard.writeText(this.wgetCmd)
    }
  },

  computed: {
    downloadLink() {
      const { browserBaseURL } = this.$config
      const { agentId, fileId } = this
      return `${browserBaseURL}/agents/${agentId}/files/${fileId}`
    },

    expiryTime() {
      return moment(this.fileMetadata.exp * 1000).fromNow()
    },

    creationTime() {
      return moment(this.fileMetadata.crt * 1000).format('MMMM Do YYYY, h:mm:a')
    },

    wgetCmd() {
      return `wget ${this.downloadLink}`
    },

    readableSize() {
      const bytes = this.fileMetadata.file_size
      const sizes = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB']
      const sizeIndex = Math.floor(Math.log(bytes) / Math.log(1024))
      if (sizeIndex == 0) {
        return bytes + ' bytes'
      }
      return parseFloat(bytes / Math.pow(1024, sizeIndex)).toFixed(2) + ' ' + sizes[sizeIndex]
    }
  }
}
</script>


<style>
  .btn {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md;
  }
</style>