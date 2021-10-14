const path = require("path");

module.exports = {
    entry: {
        index: './src/lib/index.js',
    },
    output:
        {
            library: "url-for-react",
            libraryTarget: "umd2",
            filename:
                '[name].js',
            sourceMapFilename: "[name].js.map",
            path: path.resolve(__dirname, 'dist'),

        }
    ,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
};
