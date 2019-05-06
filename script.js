
var list = document.getElementById('add_block');
var stateList = document.getElementById('add_button');
function closeDiv(openedElem) {
    if (openedElem && openedElem.style.display == 'block') {
        openedElem.style.display = 'none';
    }
};

function top_walker (node, test_func, last_parent) {
	while ( node && node !== last_parent ) {
		if ( test_func(node) ) {
			return node;
		}
		node = node.parentNode;
	}
}
// console.log(list);
document.documentElement.addEventListener('click', function (event) {
	var isClickWithinOpenedDiv = top_walker(event.target, function (node) {
		return node === list
	})
	if (!isClickWithinOpenedDiv) {
		closeDiv(list)
	}
}, true)

stateList.addEventListener('click', function(){list.style.display = 'block'})



var button = document.querySelector('#create_event');
    button.onclick = function(){
        var name = document.querySelector('#name').value.split(' ');
        var elementChildrens = document.querySelector("#row_data").children;
        var event_number, event_time, event_name = '';
        for(var i = 0; i < name.length; i++){
            event_number = name[0].slice(0, -1);
            event_time = name[1].slice(0, -1);
            event_name = name[2];
        }
       

        for (var i=0, child; child=elementChildrens[i]; i++) {
            if(child.innerText === event_number){
            child.innerHTML += ' ' + '<h3 class="text-center">' +  event_time + '</h3>' + ' ' + '<p class="text-center">' + event_name + '</p>';
            }       
        }

        name = document.querySelector('#name').value = "";
       
    }




var item = document.getElementsByClassName('item');
var info = document.getElementById('info-block');
var new_event = document.getElementById('new_event');
var add_new_info = document.getElementById('add_new_info');
var date_new_event = document.getElementById('date_new_event');
var people_new_event = document.getElementById('people_new_event');
var txt_write = document.getElementById('txt_write');
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', function(e) {
    // console.log(e.target)
    add_new_info.onclick = function(){
        item[i].innerHTML = '<h3 class="text-center">' + new_event.value + '</h3>' + '<p class="text-center">' + date_new_event.value + '</p>' + '<p class="text-center">' + people_new_event.value + '</p>' + '<p class="text-center">' + txt_write.value + '</p>';
        // console.log(item[i].innerHTML);
        item[i].classList.remove('active');
    }
    if(this !== e.target)
      return;
      console.log(i);
    item[i].classList.add('active');
    this.appendChild(info);
    item[i] += new_event;
    info.style.display = "block";
  });
}
 

   