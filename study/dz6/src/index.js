/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
    var p = new Promise(function(resolve, reject) {
        setTimeout(function() { resolve() }, seconds * 1000);
    });
  return  p.then(function() {});
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    return new Promise(function(resolve) {
        let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
        var req = new XMLHttpRequest();
        req.open('GET', url , true);
        req.responseType = 'json';
        req.addEventListener('load', function() {
            var resp = req.response;
            resp.sort(function(a, b) {
                if (a.name > b.name) {
                    return 1
                } else {
                    return -1
                }
            });

            resolve(resp);


        });

        req.send();

    })
}

export {
    delayPromise,
    loadAndSortTowns
};
