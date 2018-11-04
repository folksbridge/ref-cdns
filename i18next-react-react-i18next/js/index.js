var reactI18nextModule = reactI18next.reactI18nextModule;

i18next.
use(reactI18nextModule).
init({
  interpolation: {
    // React already does escaping
    escapeValue: false },

  lng: 'en', // 'en' | 'es'
  resources: {
    en: {
      translation: {
        age: { label: 'Age' },
        home: { label: 'Home' },
        name: { label: 'Name' } } },


    es: {
      translation: {
        age: { label: 'Años' },
        home: { label: 'Casa' },
        name: { label: 'Nombre' } } } } },




function (err, t) {
  if (err) {
    return console.error(err);
  }
});


var I18n = reactI18next.I18n;

function Gator(_ref) {var gator = _ref.gator;
  return (
    React.createElement(I18n, null,

      function (t) {
        return (
          React.createElement('div', null,
            React.createElement('label', null, t('name.label')),
            React.createElement('span', null, gator.name, ' \uD83D\uDC0A'), ' ', React.createElement('br', null),
            React.createElement('label', null, t('age.label')),
            React.createElement('span', null, gator.age), ' ', React.createElement('br', null),
            React.createElement('label', null, t('home.label')),
            React.createElement('span', null, gator.home)));


      }));



}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', function () {
    if (i18next.language !== 'en') {
      i18next.changeLanguage('en');
    } else
    {
      i18next.changeLanguage('es');
    }
  });

  var gator = {
    name: 'Alli',
    age: 8,
    home: 'Bayou' };

  ReactDOM.render(

  React.createElement('div', null,
    React.createElement('h3', null, 'Using react-i18next'),
    React.createElement(Gator, { gator: gator })),


  document.querySelector('#placeholder'));

});