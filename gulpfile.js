const { src, dest, watch } = require(`gulp`),
    cssLinter = require(`gulp-stylelint`),
    jsLinter = require(`gulp-eslint`),
    sass = require(`gulp-sass`),
    browserSync = require(`browser-sync`);
    reload = browserSync.reload;

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

exports.lintJS = lintJS;
exports.lintCSS = lintCSS;
