'use strict';

export default class PhonesService {
  static getPhones(callback, params = {}) {
    let url = '/data/phones/phones.json';

    if (params.query) {
      url += '?query=' + params.query;
    }

    PhonesService.sendRequest('/data/phones/phones.json?query', (phones) => {
      if (!params.query) {
        callback(phones);

        return ;
      }

      let filteredPhones = phones.filter((phone) => {
        return phone.name.toLowerCase().includes(params.query);
      });

      callback(filteredPhones);
    });
  }

  static getPhone(id) {
    return phoneDetails;
  }

  static sendRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.send(); // (1)

    xhr.onload = function() { // (3)
      if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        let data = JSON.parse(xhr.responseText);

        callback(data);
      }
    };
  }
}