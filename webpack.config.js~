module.exports = {
    entry: "./js/script.js",
    output: {
        path: __dirname + '/y/',
        filename: "bundle.js"
    },

 module: {
        loaders: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
			   loader: 'babel-loader',
			    query: {
                     presets: ['es2015']
                 }         

    		}
        ]
    }

   
};
