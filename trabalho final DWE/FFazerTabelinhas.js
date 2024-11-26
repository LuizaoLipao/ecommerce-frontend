function loadProducts() {
    const http = new XMLHttpRequest();

  
    http.onload = function() {
        if (this.status === 200) {
            const products = JSON.parse(this.response);
            const productList = document.getElementById("productList");
            let productCards = "";
         
            products.forEach((product) => {
                productCards += `
                    <div class="col-md-3">
                        <div class="product-card">
                            <img src="${product.imgurl}" alt="${product.nome}">
                            <h5>${product.descricao}</h5>
                            <p>Preço: R$ ${product.preco}</p>
                        </div>
                    </div>
                `; 
            });
     
            productList.innerHTML = productCards;

    
            document.getElementById("productCount").innerText = `Total de produtos: ${100}`;
        } else {
            console.error('Falha ao carregar produtos');
        }
    };

  
    http.open('GET', 'http://localhost:8080/produto', true);
    http.send();
   
}


window.onload = function() {
    loadProducts();
};
