const openMenu=()=>{
    document.querySelector('aside').className="active"
    document.querySelector('.backdrop').className="backdrop active"
}

const closeMenu=()=>{
    document.querySelector('aside').className="";
    document.querySelector('.backdrop').className="backdrop "
}

document.getElementById('menu').onclick=(e)=>{
    e.preventDefault();
    openMenu()
}

document.getElementsByClassName('close')[0].onclick=(e)=>{
    e.preventDefault();
    closeMenu();
}