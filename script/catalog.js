items = [
    {
        code: '1122',
        title: 'Samsung TV',
        price: 1180,
        desc: '65 inch Samsung 4k curved TV',
        category: 'Electronics',
        image: 'https://c1.neweggimages.com/ProductImage/16C-0003-004J4-S01.jpg'
    },
    {
        code: '2233',
        title:'NERF N-Strike Elite Disruptor Blaster',
        price:9.99,
        desc:'Basic nerf gun',
        category:'Toys',
        image:'https://target.scene7.com/is/image/Target/GUEST_c5702f01-36b9-4875-a094-2803d57b175d?wid=325&hei=325&qlt=80&fmt=webp'
    },
    {
        code:'4455',
        title:'T-Shirt',
        price: 12.99,
        desc:'100% cotton tshirt',
        category:'Clothes',
        image:'https://img.ltwebstatic.com/images2_pi/2019/03/19/15529817302924517509_thumbnail_600x799.webp'
    },
    {
        code:'6677',
        title:'iPhone 11',
        price: 1000.00,
        desc: 'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity.',
        category:'Electronics',
        image: 'https://target.scene7.com/is/image/Target/GUEST_0cd17c39-1581-46f5-aae6-ab646b1eaae0?wid=488&hei=488&fmt=pjpeg'
    },
    
]; 

function displayCatalog() {
    // travel inside the array
    for ( i = 0; i < items.length; i++){
        var item = items[i];
        drawItem(item);
        
    }
}

function drawItem(product) {
    var layout = `
    <div id="${product.code}" class="${product.category} card text-center">
        <div class="card-header">
            <h2><b>${product.title}</b></h2>
        </div>
        <div class="card-body">
            <h3 class="card-title">$${product.price}</h3>
            <img src="${product.image}" alt="">
            <p class="card-text">${product.desc}</p>
            <button class="btn btn-outline-info btn-block">Add to cart</button>
        </div>
        <div class="card-footer text-muted">
            Category - <b>${product.category}</b>
        </div>
    </div>
    `;

    $('#catalog').append(layout);

}



function Search() {
    var searchText = $('#txt-search').val();

    $('#catalog').html('');

    for (var i = 0; i < items.length; i++) {

        var item = items[i];

        if (item.title.toLowerCase().includes(searchText) || item.desc.toLowerCase().includes(searchText) || item.category.toLowerCase().includes(searchText) || item.price.toString().includes(searchText) || item.code.toString().includes(searchText)){
            drawItem(item);
        } 
    } 
}

function Clothes() {
    $('.Electronics').hide();
    $('.Clothes').show();
    $('.Toys').hide();
}

function Electronics() {
    $('.Electronics').show();
    $('.Clothes').hide();
    $('.Toys').hide();
}

function Toys() {
    $('.Electronics').hide();
    $('.Clothes').hide();
    $('.Toys').show();
}


function init() {

    console.log('Catalog Loaded');

    displayCatalog();
   
    $('#btn-search').click(Search);

    $('#txt-search').change(function(){
        var searchText = $('#txt-search').val();

        for ( var i = 0; i < items.length; i++) {
            if(searchText = '') {
                $('#' + items[i].code).show();
            }
        }
    });

}



window.onload = init;