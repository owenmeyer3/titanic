window.onload = function() {
    function filterOnClick() {
        var age = document.getElementById('age').value.toString();
        var sex = document.getElementById('sex').value.toString();
        var pclass = document.getElementById('pclass').value.toString();
        localStorage.setItem("age",age);
        localStorage.setItem("sex",sex);
        localStorage.setItem("pclass",pclass);
    
    }
    
    d3.select('#filter-btn').on('click', filterOnClick)
 }


