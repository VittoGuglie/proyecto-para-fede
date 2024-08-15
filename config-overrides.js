import HtmlWebpackPlugin from 'html-webpack-plugin';

export default function override(config, env) {
    config.plugins = [
        ...config.plugins,
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ];

    return config;
};
