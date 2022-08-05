searchBox = document.querySelector('.search-box');
let Images = document.querySelectorAll('.container .image-container .image');

searchBox.oninput = () =>{
    Images.forEach(hide => hide.style.display = 'none')

    let value = searchBox.value;
    Images.forEach(filter => {
        let title = filter.getAttribute('data-title');
        if(value == title){
            filter.style.display = 'block';
        }
        if(searchBox.value ==''){
            filter.style.display = 'block';
        }
    })
 
};
