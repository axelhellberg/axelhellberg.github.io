var toggleSwitch = function (e) {

    const oneOn = document.getElementById('toggle-1').classList.contains('on');
    const twoOn = document.getElementById('toggle-2').classList.contains('on');
    const threeOn = document.getElementById('toggle-3').classList.contains('on');
    const isHuman = document.getElementById('is-human').checked;

    if (!e.target.classList.contains('toggle')) return;

    if (e.target.id == 'toggle-1') {
        e.target.classList.toggle('on');
        if (twoOn && threeOn && isHuman) {
            document.getElementById('toggle-3').classList.remove('on');
        }
    }
    else if (e.target.id == 'toggle-2') {
        e.target.classList.toggle('on');
        if (oneOn && threeOn && isHuman) {
            document.getElementById('toggle-1').classList.remove('on');
        }
    }
    else if (e.target.id == 'toggle-3') {
        e.target.classList.toggle('on');
        if (oneOn && twoOn && isHuman) {
            document.getElementById('toggle-2').classList.remove('on');
        }
    }
};

var uncheckAll = function (e) {
    if (!e.target.id == 'is-human') return;
    if (e.target.id == 'is-human') {
        document.getElementById('toggle-1').classList.remove('on');
        document.getElementById('toggle-2').classList.remove('on');
        document.getElementById('toggle-3').classList.remove('on');
    }
}

document.addEventListener('click', toggleSwitch, false);

// document.addEventListener('mousedown', function (e) {
//     if (!e.target.classList.contains('toggle')) return;
//     e.preventDefault();
// }, false);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') toggleSwitch(e);
}, false);



document.addEventListener('click', uncheckAll, false);

document.addEventListener('mousedown', function (e) {
    if (!e.target.classList.contains('toggle') || !e.target.id == 'is-human') return;
    e.preventDefault();
}, false);

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.key === ' ') uncheckAll(e);
}, false);
