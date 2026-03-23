/*Dev side
    Validate CSS w/ .stylrlintrc.json
    Validate JS w/ eslint
    Transpie to ES5
    Saving must lint CS or JS
    Saving refreshes broswer
    `gulp` triggers the devlopment
*/
const { src, dest, series, watch} = require (`gulp`),
    CSSLinter = require(`gulp-stylelint`);

    let lintCSS = () => {
    return src(`styles/**/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

exports.lintCSS = lintCSS;
/*
    Product Side
    creates a folder called `prod`
        img, js, html, css
    `gulp build` triggers the prodcution track
*/
