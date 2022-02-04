const path = require('path')

module.exports = {
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "development" ? "" : '/rdpservers'
}