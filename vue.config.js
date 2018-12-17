// const path = require("path");
// const loader = {
//     loader: 'sass-resources-loader',
//     options: {
//       resources: path.resolve(__dirname, './node_modules/bootstrap/scss/bootstrap.scss')
//     }
// }
//
// module.exports = {
//     configureWebpack: {
//         module: {
//             rules: [
//             {
//                 test: /\.scss$/,
//                 use: [
//                 loader,
//                 'sass-loader'
//                 ]
//             }
//             ]
//         }
//     }
// };
module.exports = {
  baseUrl: (process.env.NODE_ENV && process.env.NODE_ENV === 'production')
    ? '/vueplay/'
    : '/'
}
