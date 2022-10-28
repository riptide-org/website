<template>
  <div>
    <h2 class="mb-4 is-size-3 has-text-centered">Welcome to Riptide</h2>
    <div class="body-text">
      <p>
        Riptide is a file sharing platform with a twist. We don't store any
        files on our server.
        <br />
        Instead, we act as a gateway between your computer and the person
        downloading your file. This protects your IP address and doesn't have
        any special firewall requirements.
      </p>
      <hr />
      <p>
        Learn how to install Riptide here:
        <a href="https://github.com/riptide-org/client" target="_blank"
          >https://github.com/riptide-org/client</a
        >.
      </p>
    </div>

    <div class="body-text mt-5" >
      <h2 class="mb-4 is-size-3 has-text-centered">How it works</h2>

      <NetworkDiagram/>
      <p>
        Riptide relies on a server agent running locally on your machine as a
        systemd service. This agent is responsible for managing the file
        transfer and communicating with the Riptide server over a websocket
        connection. When a downloader requests a file from you, the agent will
        POST the file to the central server. The server will then begin to
        stream the file to the downloader.
        <br />
        This process is entirely secure, running over https with complete
        end-to-end encryption. Your server agent authenticates with a 256-bit
        key, which is generated when you first install the agent. This key is
        used for all authentication - so no one can pretend to be you or
        upload a file.
        <br/>
        We are entirely open source, and hosting your own central-api is
        encouraged for those who want maximum security.

      </p>
    </div>
  </div>
</template>

<style scoped>
.body-text {
  font-size: 1.25rem;
}
</style>