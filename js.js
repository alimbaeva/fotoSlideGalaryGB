window.addEventListener('load', function () {

    const btnLeft = this.document.querySelector('#left');
    const btnRight = this.document.querySelector('#right');
    const img = this.document.querySelector('img');

    const fotoAddres = ['ma_0.svg', 'ma_1.svg', 'ma_2.svg', 'ma_3.svg'];

    let i = 0;
    function pasteFotoL() {
        (i === fotoAddres.length - 1) ? i = 0 : i++;
        img.src = './img/ma_' + i + '.svg';
    };

    function pasteFotoR() {
        (i === 0) ? i = fotoAddres.length - 1 : i--;
        img.src = './img/ma_' + i + '.svg';
    };

    btnLeft.addEventListener('click', pasteFotoL);
    btnRight.addEventListener('click', pasteFotoR);



    const fotoAddres_2 = ['./img/ma_1.svg', './img/ma_2.svg', './img/ma_3.svg'];

    const fotoMin = this.document.querySelectorAll('.imgMin');
    const imageBig = this.document.querySelector('.imageBig');
    fotoMin.forEach(function (i) {
        i.addEventListener('click', () => {
            const pathImg = i.getAttribute('src');

            if (pathImg) {
                var imgBIG = '';
                fotoAddres_2.forEach(function (path) {
                    if (path === pathImg) {
                        imgBIG = path;
                    }
                })
            }
            if (imgBIG) {
                imageBig.innerHTML = `<img  src="${imgBIG}" alt="">`;
            } else {
                imageBig.innerHTML = `<h3>Такой картинки нету</h3>`;
            }
        })
    })

    console.log(fotoMin);

})