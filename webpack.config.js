var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname + '/app',
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
				exclude: /flexboxgrid/,
			},
			{
			    test: /\.css$/,
			    loader: 'style!css?modules',
			    include: /flexboxgrid/,
			},
			{
		        test: /\.(png|jpg)$/,
		        include: __dirname + '/app/static/images',
		        loader: 'file-loader',
		    },
		]
	},
	plugins : [
		HtmlWebpackPluginConfig,
		new webpack.DefinePlugin({
    		'process.env': {
      			'NODE_ENV': JSON.stringify('production')
    		}
  		}),
	]
}