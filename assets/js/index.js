/*const getAlumnasList= (url) => {
  $.get(url,(response) => {
    console.log(response);
  })
};
getAlumnasList('http://laboratoria.cuadra.co:9339/api/v1/students/?format=json');*/

'use strict';

const getJSON = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if(xhr.status !== 200){
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

const render = (root) => {
  root.append(Coders());
};


$( _ => {

  getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/?format=json', (err, json) => {
    if (err) {
      return alert(err.message);
    }
    state.coders = json;

    const root = $('.root');
    render(root);
  });
});
