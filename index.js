// Синтаксис для запуска из командной строки: node index.js --lang=UK
const argv = require('optimist').argv;

const sentence = {
  RU: 'Пацак должен делать ку два раза!',
  EN: 'The patsak must do ku twice',
  UK: 'Пацак повинен робити ку два рази!',
};

if (!argv.lang) {
  console.log('Пацак должен делать ку два раза!');
} else {
  console.log(sentence[argv.lang]);
}
