const mainMenuElem = document.getElementsByClassName('js-main-menu')[0];
const menuButtonElem = document.getElementsByClassName('js-header-content__menuBtn')[0];
const orderBtnElem = Array.from(document.getElementsByClassName('js-orderBtn'));
const closeOrderSectionBtnElem = document.getElementsByClassName('js-orderSection__closeBtn')[0];
const orderModalElem = document.getElementsByClassName('js-orderSectionModal')[0];
const orderSectionlElem = document.getElementsByClassName('js-orderSection')[0];
const orderFormElem = document.getElementsByClassName('js-orderSectionForm')[0];
const menuItemsElem = Array.from(document.getElementsByClassName('js-main-menu-list-item__link'));

onLoadBodyDelClass();

onLoadBackgroundElementsChangePosition();

menuButtonElem.addEventListener('click', onClickMenuButton);

orderBtnElem.forEach(function(item, i, arr) {
	item.addEventListener('click', onClickOrderBtn);
});

closeOrderSectionBtnElem.addEventListener('click', onClickCloseOrderSectionBtn);

orderFormElem.addEventListener('submit', function(e) {
	alert('Форма отправлена!');
});


menuItemsElem.forEach(function(item, i, arr) {
	item.addEventListener('click', function(e){
		e.preventDefault();
		const id = item.getAttribute('href');

		document.querySelector(id).scrollIntoView({
	            behavior: 'smooth',
	            block: 'start'
	        });
	});
});

function onLoadBodyDelClass() {
	const bodyElem = document.getElementsByClassName('no-js')[0];
	bodyElem.classList.remove('no-js');
}

function onLoadBackgroundElementsChangePosition() {
	const personInfoContaineBackgroundElements = document.getElementsByClassName('person-info-container')[0].getElementsByClassName('backgroundElements');

	personInfoContaineBackgroundElements[0].classList.add('background__Sharp_Position');
	personInfoContaineBackgroundElements[1].classList.add('background__DivTag_Position1');
	personInfoContaineBackgroundElements[2].classList.add('background__DivTag_Position2');
	personInfoContaineBackgroundElements[3].classList.add('background__EmptyTag_Position');
	personInfoContaineBackgroundElements[4].classList.add('background__EmptyTag_Position2')
	personInfoContaineBackgroundElements[5].classList.add('background__Braces_Position');

}


function onClickMenuButton() {	
	mainMenuElem.classList.toggle('main-menu_opened');

	if(menuButtonElem.getAttribute('aria-expanded') == 'true') {
				menuButtonElem.setAttribute('aria-expanded', 'false');
				menuButtonElem.setAttribute('aria-label', 'Открыть меню');
			}


			else {
				menuButtonElem.setAttribute('aria-expanded', 'true');
				menuButtonElem.setAttribute('aria-label', 'Закрыть меню');
			}
}

function onClickOrderBtn() {
	orderModalElem.classList.add('orderSectionModal_active');
	orderSectionlElem.classList.add('orderSection_active');
	disableScroll();
	
}
	

function onClickCloseOrderSectionBtn() {
	orderFormElem.reset();
	orderModalElem.classList.remove('orderSectionModal_active');
	orderSectionlElem.classList.remove('orderSection_active');
	enableScroll();
}