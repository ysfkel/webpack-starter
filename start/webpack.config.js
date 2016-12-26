module.exports={
    // entry:'./src/index.js',
    // output:{
    //     path:'./builds',
    //     filename:'bundle.js'
    // },
    entry:{
        common:['jquery'],
        math:'./src/index.js',
        sci:'./src/index_sc.js'
    },
    output:{
        path:'./builds',
        filename:'[name].js'
        // ,chunkFilename: "[name]_[chunkhash:20].js",
        // publicPath: "/builds/",
        // libraryTarget: "var"
    },
    module:{
        loaders:[
            {
                test:/\.js/,
                loader:'babel'
            }
        ]
    }
}