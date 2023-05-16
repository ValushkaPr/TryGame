let name = " ";
let game = {
    game: []
}
let panel = 'start';

let nav = () => {
    document.onclick = (e) => {
        e.preventDefault();
        if (e.target.id == 'startGame') {
            go('game','d-block');
        }
        else if (e.target.id == 'restart') {
            go('game','d-block');
            $('.elements').remove();
            $("#game").append(`<div class="elements"></div>`);
        }
    }
}

let go = (page, attribute) => {
    let pages = ['start','game','end'];
    panel = page;
    
    $(`#${page}`).attr('class',attribute);
    pages.forEach(e => {
        if (page != e) {
            $(`#${e}`).attr('class','d-none');
        }
    })
}

let startLoop = () => {
    let inter = setInterval(()=>{
        if(panel !== "start"){
            clearInterval(inter);
        }
        checkName();
    },100);
}

let checkStorage = () => {
    if(localStorage.getItem('userName') != null) {
        $(`#nameImput`).val(localStorage.getItem('userName'));
    }
}

let checkName = () => {
    name = $(`#nameInput`).val().trim();
    if(name != ""){
        localStorage.setItem('userName', name);
        $(`#startGame`).attr('disabled',false);
    }
    else{
        $(`#startGame`).attr('disabled',true);
    }
}
