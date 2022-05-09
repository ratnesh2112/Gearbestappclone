// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'gearbest.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'f895bc34efmsh8c3c074cebfdb51p1be13ajsnf0afd2a4a975'
// 	}
// };

// fetch('https://gearbest.p.rapidapi.com/get_products_from_category?category_url=smart-wristband-c_11351%2F&page=1', options)
// 	.then((res)=>{
//         return res.json()
//     })
// 	.then((res) => {
//         let data = res.data;
//         console.log(data);
//         append(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
	

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'gearbest.p.rapidapi.com',
		'X-RapidAPI-Key': 'c25fa3a5e6msh61f1f097cd8e7a1p10ea4ejsn16730f77d07d'
	}
};

fetch('https://gearbest.p.rapidapi.com/get_products_from_category?category_url=smart-wristband-c_11351%2F&page=1', options)
	.then(response => response.json())
	.then(response => append(response.data))
	.catch(err => console.error(err));



    
let append = (data) =>{

    let container = document.getElementById('product');

    container.innerHTML = null ;

    data.forEach((el)=>{

        let div = document.createElement('div');

        let image = document.createElement('img');
        image.src = el.goodsImage;
        image.style.cursor = "pointer";
        image.addEventListener("click", function(){
            showProduct(el);
        })

        let title = document.createElement('p');
        title.innerText = el.goodsTitle;
        title.style.cursor = "pointer";
        title.addEventListener("click", function(){
            showProduct(el);
        })

        let price = document.createElement('h2');
        price.innerText = `$ ${el.displayPrice}`;
        price.style.color = "crimson";

        let strp = document.createElement('h4');
        strp.innerText = `RRP: $ ${el.shopPrice}`;
        strp.style.textDecoration = "line-through";

        let cpn = document.createElement('div');
        cpn.setAttribute("id","couponleft");

        let left = document.createElement('p');
        left.innerText=`Coupon Left : ${Math.floor(Math.random() * 101)}`;
        left.setAttribute("class","left")

        let num = document.createElement("h4");
        left.setAttribute("class","code")
        num.innerText = "T81A532109D53001";

        cpn.append(left , num)

        div.append(image , title , price , strp ,cpn);

        container.append(div);

    })
}
function showProduct(el)
{
    localStorage.setItem("product" , JSON.stringify(el));
    window.location.href= "product.html"
}