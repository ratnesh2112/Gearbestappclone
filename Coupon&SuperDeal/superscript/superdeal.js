// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'gearbest.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'c25fa3a5e6msh61f1f097cd8e7a1p10ea4ejsn16730f77d07d'
// 	}
// };

// fetch('https://gearbest.p.rapidapi.com/search?query=Xiaomi&page=1', options)
// 	.then(response => response.json())
// 	.then(response => append(response.data))
// 	.catch(err => console.error(err));


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'gearbest.p.rapidapi.com',
		'X-RapidAPI-Key': 'f895bc34efmsh8c3c074cebfdb51p1be13ajsnf0afd2a4a975'
	}
};

fetch('https://gearbest.p.rapidapi.com/search?query=Xiaomi&page=1', options)
	.then(response => response.json())
	.then(response => append(response.data))
	.catch(err => console.error(err));

let append = (data) =>{

    console.log(data)

    let container = document.getElementById('product');

    container.innerHTML = null ;

    data.forEach((el)=>{

        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = el.goodsImage;
        image.style.cursor = "pointer";
        image.setAttribute("class" , "photo")
        image.addEventListener("click",function(){
            showProduct(el);
        })

        let title = document.createElement('p');
        title.innerText = el.goodsTitle;
        title.style.cursor = "pointer"
        title.addEventListener("click", function(){
            showProduct(el);
        })

        let price = document.createElement('h2');
        price.innerText = `$ ${el.displayPrice}`;
        price.style.color = "crimson";

        let rrp = document.createElement('p')
        rrp.innerText = `RRP : $ ${Math.floor(Math.random() * 501)}`
        rrp.style.textDecoration = "line-through";
        rrp.style.color = "grey";
        rrp.style.fontSize = "15px"

        let img = document.createElement('img');
        img.src ="https://uidesign.gbtcdn.com/GB/image/2019/20190417_9244/cart_default.png";
        img.addEventListener("click" ,function(){
            add(el)
        })
        img.setAttribute("class","cart");

        div.append(image , title , price ,rrp,img);

        container.append(div);

    })
}

function showProduct(el)
{
    localStorage.setItem("product" , JSON.stringify(el));
    window.location.href= "product.html";
}

function add(el)
{
    alert("Product Added To Cart");

    localStorage.setItem("cart" , JSON.stringify(el));
}