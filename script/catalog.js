items = [
    {
        code: '1234',
        title: 'Samsung TV',
        price: 1180,
        desc: '65 inch Samsung 4k curved TV',
        category: 'Electronics',
        image: 'https://c1.neweggimages.com/ProductImage/16C-0003-004J4-S01.jpg'
    },
    {
        code: '4567',
        title:'NERF N-Strike Elite Disruptor Blaster',
        price:9.99,
        desc:'Basic nerf gun',
        category:'Toys',
        image:'https://target.scene7.com/is/image/Target/GUEST_c5702f01-36b9-4875-a094-2803d57b175d?wid=325&hei=325&qlt=80&fmt=webp'
    },
    {
        code:'8900',
        title:'T-Shirt',
        price: 12.99,
        desc:'100% cotton tshirt',
        category:'Clothes',
        image:'https://img.ltwebstatic.com/images2_pi/2019/03/19/15529817302924517509_thumbnail_600x799.webp'
    }
];



function displayProducts() {
    // travel inside the array
    for ( i = 0; i < items.length; i++){
    let display = items[i];
    console.log(display);
    
    
    // for loop - template string
    var layout = `
        <div class="card text-center">
            <div class="card-header">
                <h2><b>$${display.price}</b></h2>
            </div>
            <div class="card-body">
                <h3 class="card-title">${display.title}</h3>
                <img src="${display.image}" alt="">
                <p class="card-text">${display.desc}</p>
            </div>
            <div class="card-footer text-muted">
                Category - <b>${display.category}</b>
            </div>
        </div>
    `;
    
    // Display layout on the DOM 
        $(".catalog-container").append(layout);
    }
}



function init() {
    console.log('Catalog Loaded');

    displayProducts();
}

window.onload = init;