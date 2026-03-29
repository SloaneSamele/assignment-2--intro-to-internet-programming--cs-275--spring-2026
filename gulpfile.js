const { src, dest, series, watch} = require (`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    babel = require(`gulp-babel`),
    htmlCompressor = require(`gulp-htmlmin`),
    browserSync = require(`browser-sync`),
    jsCompressor = require(`gulp-uglify`),
    cssCompressor = require(`gulp-clean-css`),
    reload = browserSync.reload;

let lintCSS = () => {
    return src(`styles/main.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
};

let compressHTML = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `./`
            ]
        }
    });
    watch(`js/*.js`, series(transpileJSForDev))
        .on(`change`, reload);

    watch(`styles/**/*.css`, lintCSS)
        .on(`change`, reload);

    watch(`img/**/*`)
        .on(`change`, reload);
};

let copyUnprocessedAssetsForProd = () => {
    return src([
        `./*.*`,
        `./**`,
        `!*.html`,
        `!img/`,
        `!img/.gitignore`,
        `!js/**`,
        `!json/**`,
        `!node_modules/`,
        `!node_modules/**`,
        `!*.json`,
        `!.babelrc`,
        `!.eslintrc`,
        `!.editorconfig`,
        `!gulpfile.js`,
        `!eslint.config.mjs`,
        `!README.md`,
        `!styles/**`,
        `!prod/**`,
    ], {dot: true})
        .pipe(dest(`prod`));
};

let transpileJSForProd = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let compressCSS = () => {
    return src(`styles/*.css`)
    .pipe(cssCompressor())
    .pipe(dest(`prod/styles`));
};

exports.lintCSS = lintCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.compressHTML = compressHTML;
exports.transpileJSForProd = transpileJSForProd;
exports.copyUnprocessedAssetsForProd = copyUnprocessedAssetsForProd;
exports.compressCSS = compressCSS;
exports.default = serve;
exports.serve = series(
    lintCSS,
    transpileJSForDev,
    serve
);
exports.build = series(
    compressHTML,
    compressCSS,
    transpileJSForProd,
    copyUnprocessedAssetsForProd
);
