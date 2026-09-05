const path = require('path');

module.exports = {
    mode: 'production',
    // локальний шлях, краще використовувати абсолютний вказаний нижче
    entry: './src/index.js',
    // entry: {
    //     // вказівка абсолютного шляху з якого беремо файл з кодом
    //     filename: path.resolve(__dirname, 'src/index.js')
    // },
    output: {
        // Вказівка в яку папку перемістити файл з кодом
        path: path.resolve(__dirname, 'public' /* переіменування назви папки */),
        // переіменування назви фінального готового файлу
        // бувають різні варіанти назв на розсуд розробника: main.js, index.js, bundle.js (назви в подальшому ускладнюються)
        filename: 'index.js'
    }
}

