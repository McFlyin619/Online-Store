let items = [];

class Item {
    constructor(code,title,price,description,category,image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
    }
}

function register() {
    
    // save input values in variables
    var code = $('#code').val();
    var title = $('#title').val();
    var price = $('#price').val();
    var desc = $('#description').val();
    var category = $('#category').val();
    var image = $('#image').val();

    // create the object (using the constructor)
    var newItem = new Item(code,title,price,desc,category,image);

    // push the item to array
    items.push(newItem);

    // display on the console
    console.log(newItem);
    console.log(items);

    $('#code').val('');
    $('#title').val('');
    $('#price').val('');
    $('#description').val('');
    $('#category').val('');
    $('#image').val('');

}





function init() {
    console.log('Admin Loaded');

    $('#btn-register').on('click',function(){
        register();
    });
}

window.onload = init;