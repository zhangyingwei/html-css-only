function preview() {
  document.querySelectorAll("pre code").forEach((block) => {
    hljs.highlightBlock(block)
  })
}