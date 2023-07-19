var toggleSwitch = function (e) {

    const oneOn = document.getElementById('toggle-1').classList.contains('on');
    const twoOn = document.getElementById('toggle-2').classList.contains('on');
    const threeOn = document.getElementById('toggle-3').classList.contains('on');

    if (!e.target.classList.contains('toggle')) return;

    if (e.target.id == 'toggle-1') {
        e.target.classList.toggle('on');
        if (twoOn && threeOn) {
            document.getElementById('toggle-3').classList.remove('on');
        }
    }
    else if (e.target.id == 'toggle-2') {
        e.target.classList.toggle('on');
        if (oneOn && threeOn) {
            document.getElementById('toggle-1').classList.remove('on');
        }
    }
    else if (e.target.id == 'toggle-3') {
        e.target.classList.toggle('on');
        if (oneOn && twoOn) {
            document.getElementById('toggle-2').classList.remove('on');
        }
    }
};

document.addEventListener('click', toggleSwitch, false);

document.addEventListener('mousedown', function (e) {
    if (!e.target.classList.contains('toggle')) return;
    e.preventDefault();
}, false);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') toggleSwitch(e);
}, false);