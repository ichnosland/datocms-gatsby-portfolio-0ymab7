// Promise API
exports.createPages = () => {
  return new Promise((resolve, reject) => {
    // do async work
    console.log('create pages in gatsby node');
  })
}

// Callback API
exports.createPages = (_, pluginOptions, cb) => {
  // do Async work
  cb()
}