function togglemenu() {
    let sidebar = document.getElementById('sidebar');
    let toggle = document.getElementById('toggle-btn');
    if(sidebar.style.display != 'none'){
        sidebar.style.display = 'none';
    }
    else{
        sidebar.style.transition = 'left .4s ease,right .4s ease'
        sidebar.style.display ='block'
    }
}