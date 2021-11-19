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




})