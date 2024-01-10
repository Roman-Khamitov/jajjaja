var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var input,search,pr,result,result_arr, locale_HTML, result_store;

locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)

function FindOnPage(name, status) {

	input = document.getElementById(name).value; //получаем значение из поля в html
	
	if(input.length<3&&status==true) {
		alert('Для поиска вы должны ввести три или более символов');
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
	}
        
        if(input.length>=3)
	{
              function FindOnPageGo() {
                     search = '/'+input+'/g';  //делаем из строки регуярное выражение
		     pr = document.body.innerHTML;   // сохраняем в переменную весь body
		     result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
		     result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

                     for(var i=0; i<result.length;i++) {
		        result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
		     for(var i=0; i<result.length;i++) {
			pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}
		     document.body.innerHTML = pr;  //заменяем html код
              }
        }
        function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
        if(status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
	if(!status) { FindOnPageBack(); } //Снимаем выделение
}
//get input
let input = document.getElementById("search");
//get list of value
let list = document.querySelectorAll(".product ");



//function search on the list.
function search (){
  for(let i = 0; i < list.length; i += 1){
    
   //check if the element contains the value of the input
   if(list[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
     list[i].style.display = "block";
   }else{
     list[i].style.display = "none";
   }
  }
}

//to the change run search.
input.addEventListener('input', search);
document.querySelector('#elastic').oninput = function () {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.card div');
	if (val != '') {
		elasticItems.forEach(function (elem) {
			if (elem.innerText.search((RegExp(val,"gi"))) == -1) {
				elem.classList.add('hide');
			}
			else {
				elem.classList.remove('hide');
			}
		});
	}
	else {
		  elasticItems.forEach(function (elem) {
		   
				elem.classList.remove('hide');
			
		  });
	}
}