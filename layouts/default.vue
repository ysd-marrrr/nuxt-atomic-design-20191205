<template>
  <div>
    <nav class="navbar main-navbar is-primary is-vcentered">
      <div class="navbar-brand"><h1>Nuxt.js x Atomic Design Sample</h1></div>
    </nav>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.main-navbar {
  h1 {
    line-height: 2;
    font-weight: bold;
    font-size: 150%;
  }
}
</style>
