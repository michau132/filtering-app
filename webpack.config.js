//Konfiguracja Webpack

module.exports = {
    entry: "./src/index.jsx",
    output: { filename: "./out.js" },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,  exclude: /node_modules/,
                loader: 'babel',
                query: { presets: [ 'es2015', 'stage-2', 'react'] }
            }
        ]
    }
};