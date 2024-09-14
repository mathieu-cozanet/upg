(function(){
  // Add to Cart Interaction - by CodyHouse.co
  var cart = document.getElementsByClassName('js-cd-cart');
  if(cart.length > 0) {
  	var cartAddBtns = document.getElementsByClassName('js-cd-add-to-cart'),
  		cartBody = cart[0].getElementsByClassName('cd-cart__body')[0],
  		cartList = cartBody.getElementsByTagName('ul')[0],
  		cartListItems = cartList.getElementsByClassName('cd-cart__product'),
  		cartTotal = cart[0].getElementsByClassName('cd-cart__checkout')[0].getElementsByTagName('span')[0],
  		cartCount = cart[0].getElementsByClassName('cd-cart__count')[0],
  		cartCountItems = cartCount.getElementsByTagName('li'),
  		cartUndo = cart[0].getElementsByClassName('cd-cart__undo')[0],
  		productId = 0, //this is a placeholder -> use your real product ids instead
  		cartTimeoutId = false,
  		animatingQuantity = false;
		initCartEvents();


		function initCartEvents() {
			// add products to cart
			for(var i = 0; i < cartAddBtns.length; i++) {(function(i){
				cartAddBtns[i].addEventListener('click', addToCart);
			})(i);}

			// open/close cart
			cart[0].getElementsByClassName('cd-cart__trigger')[0].addEventListener('click', function(event){
				event.preventDefault();
				toggleCart();
			});
			
			cart[0].addEventListener('click', function(event) {
				if(event.target == cart[0]) { // close cart when clicking on bg layer
					toggleCart(true);
				} else if (event.target.closest('.cd-cart__delete-item')) { // remove product from cart
					event.preventDefault();
					removeProduct(event.target.closest('.cd-cart__product'));
				}
			});

			// update product quantity inside cart
			cart[0].addEventListener('change', function(event) {
				if(event.target.tagName.toLowerCase() == 'select') quickUpdateCart();
			});

			//reinsert product deleted from the cart
			cartUndo.addEventListener('click', function(event) {
				if(event.target.tagName.toLowerCase() == 'a') {
					event.preventDefault();
					if(cartTimeoutId) clearInterval(cartTimeoutId);
					// reinsert deleted product
					var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted')[0];
					Util.addClass(deletedProduct, 'cd-cart__product--undo');
					deletedProduct.addEventListener('animationend', function cb(){
						deletedProduct.removeEventListener('animationend', cb);
						Util.removeClass(deletedProduct, 'cd-cart__product--deleted cd-cart__product--undo');
						deletedProduct.removeAttribute('style');
						quickUpdateCart();
					});
					Util.removeClass(cartUndo, 'cd-cart__undo--visible');
				}
			});
		};

		function addToCart(event) {
			event.preventDefault();
			if(animatingQuantity) return;
			var cartIsEmpty = Util.hasClass(cart[0], 'cd-cart--empty');
			//update cart product list
			addProduct(this);
			//update number of items 
			updateCartCount(cartIsEmpty);
			//update total price
			updateCartTotal(this.getAttribute('data-price'), true);
			//show cart
			Util.removeClass(cart[0], 'cd-cart--empty');
		};

		function toggleCart(bool) { // toggle cart visibility
			var cartIsOpen = ( typeof bool === 'undefined' ) ? Util.hasClass(cart[0], 'cd-cart--open') : bool;
		
			if( cartIsOpen ) {
				Util.removeClass(cart[0], 'cd-cart--open');
				//reset undo
				if(cartTimeoutId) clearInterval(cartTimeoutId);
				Util.removeClass(cartUndo, 'cd-cart__undo--visible');
				removePreviousProduct(); // if a product was deleted, remove it definitively from the cart

				setTimeout(function(){
					cartBody.scrollTop = 0;
					//check if cart empty to hide it
					if( Number(cartCountItems[0].innerText) == 0) Util.addClass(cart[0], 'cd-cart--empty');
				}, 500);
			} else {
				Util.addClass(cart[0], 'cd-cart--open');
			}
		};

		function addProduct(target) {
			// this is just a product placeholder
			// you should insert an item with the selected product info
			// replace productId, productName, price and url with your real product info
			// you should also check if the product was already in the cart -> if it is, just update the quantity
			productId = productId + 1;
			switch (Number(number)) {
			case 1:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/killahelmet1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Killa Helmet</h3><span class="cd-cart__price">$15</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 2:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/warriorhelmet1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Warrior Helmet</h3><span class="cd-cart__price">$13</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 3:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/specopshelmet1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Spec Ops Helmet</h3><span class="cd-cart__price">$13</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 4:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/mvshelmet1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">MVS Combat Helmet</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 5:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/killavest1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Killa Vest</h3><span class="cd-cart__price">$15</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 6:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/6b43vest1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">6B43 Vest</h3><span class="cd-cart__price">$13</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 7:
                  var productAdded =
                     '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/mvsheavyvest1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">MVS Heavy Vest</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                     productId +
                     '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                     productId +
                     '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
                  break;
            case 8:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/m65jacket1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Field Jacket</h3><span class="cd-cart__price">$12</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 9:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/mvsshirt1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">MVS BDU Top</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 10:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/tshirt1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">TShirt</h3><span class="cd-cart__price">$8</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 11:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/combatpants1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">MVS Combat Pants</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 12:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/cargopants1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Cargo Pants</h3><span class="cd-cart__price">$8</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 13:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/militaryboots1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Assault Boots</h3><span class="cd-cart__price">$9</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 14:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/combatboots1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Combat Boots</h3><span class="cd-cart__price">$8</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 15:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/tacticalgloves1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Tactical Gloves</h3><span class="cd-cart__price">$9</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 16:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/workinggloves1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Working Gloves</h3><span class="cd-cart__price">$8</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 17:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/combatbag1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">EVO Combat Bag</h3><span class="cd-cart__price">$14</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 18:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/6SH118bag1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">6SH118 Backpack</h3><span class="cd-cart__price">$12</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 19:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/combatpack1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">MVS Combat Pack</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 20:
                  var productAdded =
                     '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/weapon1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Weapons</h3><span class="cd-cart__price">$30</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                     productId +
                     '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                     productId +
                     '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 21:
                  var productAdded =
                     '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/nbc1.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">NBC Outfit</h3><span class="cd-cart__price">$40</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                     productId +
                     '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                     productId +
                     '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 22:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/prioqueue.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Priority Queue</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 23:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/clantag.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Custom Clan Tag</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 24:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/supporterb.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Supporter Bronze</h3><span class="cd-cart__price">$15</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 25:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/supporters.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Supporter Silver</h3><span class="cd-cart__price">$30</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 26:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/supporterg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Supporter Gold</h3><span class="cd-cart__price">$50</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 27:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Clan Bundle Lvl. 1</h3><span class="cd-cart__price">$75</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 28:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Clan Bundle Lvl. 2</h3><span class="cd-cart__price">$100</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
			case 29:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Clan Bundle Lvl. 3</h3><span class="cd-cart__price">$125</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 30:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Any 1 Clothing</h3><span class="cd-cart__price">$20</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 31:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Any 1 Armor</h3><span class="cd-cart__price">$30</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 32:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Any 1 Pouch</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 33:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Any 1 Weapon</h3><span class="cd-cart__price">$30</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 34:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/upg.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Any 1 Melee</h3><span class="cd-cart__price">$10</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
            case 35:
               var productAdded =
                  '<li class="cd-cart__product"><div class="cd-cart__image"><img src="assets/img/flag.png" alt="placeholder"></div><div class="cd-cart__details"><h3 class="truncate">Flag</h3><span class="cd-cart__price">$5</span><div class="cd-cart__actions"><a href="#1" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-' +
                  productId +
                  '"></label><span class="cd-cart__select"><select class="reset" id="cd-product-' +
                  productId +
                  '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
               break;
         }

		function removeProduct(product) {
			if(cartTimeoutId) clearInterval(cartTimeoutId);
			removePreviousProduct(); // prduct previously deleted -> definitively remove it from the cart
			
			var topPosition = product.offsetTop,
				productQuantity = Number(product.getElementsByTagName('select')[0].value),
				productTotPrice = Number((product.getElementsByClassName('cd-cart__price')[0].innerText).replace('$', '')) * productQuantity;

			product.style.top = topPosition+'px';
			Util.addClass(product, 'cd-cart__product--deleted');

			//update items count + total price
			updateCartTotal(productTotPrice, false);
			updateCartCount(true, -productQuantity);
			Util.addClass(cartUndo, 'cd-cart__undo--visible');

			//wait 8sec before completely remove the item
			cartTimeoutId = setTimeout(function(){
				Util.removeClass(cartUndo, 'cd-cart__undo--visible');
				removePreviousProduct();
			}, 8000);
		};

		function removePreviousProduct() { // definitively removed a product from the cart (undo not possible anymore)
			var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted');
			if(deletedProduct.length > 0 ) deletedProduct[0].remove();
		};

		function updateCartCount(emptyCart, quantity) {
			if( typeof quantity === 'undefined' ) {
				var actual = Number(cartCountItems[0].innerText) + 1;
				var next = actual + 1;
				
				if( emptyCart ) {
					cartCountItems[0].innerText = actual;
					cartCountItems[1].innerText = next;
					animatingQuantity = false;
				} else {
					Util.addClass(cartCount, 'cd-cart__count--update');

					setTimeout(function() {
						cartCountItems[0].innerText = actual;
					}, 150);

					setTimeout(function() {
						Util.removeClass(cartCount, 'cd-cart__count--update');
					}, 200);

					setTimeout(function() {
						cartCountItems[1].innerText = next;
						animatingQuantity = false;
					}, 230);
				}
			} else {
				var actual = Number(cartCountItems[0].innerText) + quantity;
				var next = actual + 1;
				
				cartCountItems[0].innerText = actual;
				cartCountItems[1].innerText = next;
				animatingQuantity = false;
			}
		};

		function updateCartTotal(price, bool) {
			cartTotal.innerText = bool ? (Number(cartTotal.innerText) + Number(price)).toFixed(2) : (Number(cartTotal.innerText) - Number(price)).toFixed(2);
		};

		function quickUpdateCart() {
			var quantity = 0;
			var price = 0;

			for(var i = 0; i < cartListItems.length; i++) {
				if( !Util.hasClass(cartListItems[i], 'cd-cart__product--deleted') ) {
					var singleQuantity = Number(cartListItems[i].getElementsByTagName('select')[0].value);
					quantity = quantity + singleQuantity;
					price = price + singleQuantity*Number((cartListItems[i].getElementsByClassName('cd-cart__price')[0].innerText).replace('$', ''));
				}
			}

			cartTotal.innerText = price.toFixed(2);
			cartCountItems[0].innerText = quantity;
			cartCountItems[1].innerText = quantity+1;
		};
  }
})();