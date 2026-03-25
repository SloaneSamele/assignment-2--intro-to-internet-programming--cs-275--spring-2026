/*Dev side
    +Validate CSS w/ .stylrlintrc.json
    Validate JS w/ eslint
    +Transpie to ES5
    +Saving must lint CS or JS
    Saving refreshes broswer
    `gulp` triggers the devlopment
*/
/*
    Product Side
    creates a folder called `prod`
        img, js, html, css
    `gulp build` triggers the prodcution track
*/
const { src, dest, series, watch} = require (`gulp`),
    CSSLinter = require(`gulp-stylelint`),
    babel = require(`gulp-babel`),


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
        .pipe(dest(`temp/scripts`));
};
let compressHTML = () => {
    return src(`*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

exports.lintCSS = lintCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.compressHTML = compressHTML;
