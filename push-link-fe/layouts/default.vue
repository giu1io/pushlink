<template>
  <div id="page">
    <div><Nuxt /></div>
    <div id="footer">
      Made with &#10084; for
      <a rel="noreferrer" target="_blank" href="https://twitter.com/fedebruni84">@fedebruni84</a>
      by
      <a rel="noreferrer" target="_blank" href="https://giuliomontagner.com">Giulio</a>.
      Fork me on
      <a rel="noreferrer" target="_blank" href="https://github.com/giu1io/pushlink">Github</a>.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  body {
    font-family: sans-serif;
    margin: 0;
  }

  #page {
    min-height: 100vh;
    margin: 0;

    display: grid;
    grid-template-rows: 1fr auto;
  }

  #page > div {
    padding: 10px;
  }

  #footer {
    text-align: center;
    font-size: 0.8em;
    padding: max(0px, env(safe-area-inset-top)) max(10px, env(safe-area-inset-right)) max(10px, env(safe-area-inset-bottom)) max(10px, env(safe-area-inset-left));
  }

  #footer > a, #footer > a:visited {
    color: black;
  }
</style>
