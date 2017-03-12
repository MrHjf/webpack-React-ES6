var webpack = require('webpack');

module.exports = {

	devtool: "eval-source-map",
	entry: ['webpack/hot/dev-server',__dirname + "/app/main.js"],
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			}
		]
	},

	resolve: {
        extensions: [" ", ".js", ".jsx"]
    },

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	//webpack-dev-server配置
	devServer: {
		contentBase: './build',
		historyApiFallback: true,
		inline: true,
		port: 8080
	}
};