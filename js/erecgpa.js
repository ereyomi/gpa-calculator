//toggle side bar with jquery
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
// reset button
document.querySelector('#reset').addEventListener('click',() => {
	let reset =document.querySelector('#ere');
	reset.parentNode.removeChild(reset);
});
//calculate

	let show =document.querySelector('#show');
document.querySelector('.cal').addEventListener('click', () => {

	let unit = document.querySelectorAll('.unitt');
	let point = document.querySelectorAll('.point');
	show.style.display = "block";
	let unitsum = 0;
	let pointsum = 0;
	let tcp = 1;
	for (let i = 0; i < unit.length || i < point.length; i++){	
				if (parseInt(unit[i].value) || parseInt(point[i].value)){
				tcp = (parseInt(unit[i].value))*(parseInt(point[i].value));
					unitsum+=parseInt(unit[i].value);
					pointsum+=parseInt(point[i].value);
				}
		}
		let cgpa= (pointsum/unitsum).toFixed(2);
		if(unitsum == 0 || pointsum == 0 || (isNaN(unitsum)) || (isNaN(pointsum))) {
			show.style.background = "red";
			show.innerHTML = `<span class="close" id="close">&times;</span>All inputs are required for computation
			<br><b>Please</b> complete the form`;
		}else{
			show.style.background = "#009933";
			show.innerHTML =	`<span class="close" id="close">&times;</span>Total Number of Unit (TNU): <b>${unitsum}</b> <br> Total Credit Point (TCP): <b>${pointsum}</b> <br>
	Cummulative Grade point Average (CGPA): <b> ${cgpa} </b>`;
		}
	document.querySelector('.close').addEventListener('click', () => {
		show.style.display ="none";
	
	});

});

//remove elements
$(".gp_box").on("click", "button", function(e){
    	e.preventDefault();
    	$(this).parent().remove();
  });


// createElements
document.querySelector('#numb').addEventListener('click', () => {
	show.style.display ="none";
	let y = document.querySelector('.opt');
	let z = parseInt(y.value);
	let div_m = document.querySelector('.gp_box');
    let div2 = document.getElementById('ere');
    let inputs = document.querySelectorAll('.point');
 
if(!div2){
	div2 = document.createElement('div');
	div2.setAttribute('id','ere');
	div_m.appendChild(div2);

}
let n, m, loop;
if (inputs.length) {
	n = parseInt(inputs.length) + z;
	loop = parseInt(inputs.length) +1;
 }else {
 	loop = 1;
 	n=z;
 }
 console.log(loop);
  console.log(n);
	while(loop<=n) {
		//create a div (box)
		let box2 = document.createElement("div");
        box2.setAttribute('class', 'mydiv');
		div2.appendChild(box2);


		//let l = document.createElement("label");
		//l.innerHTML = `${loop}.<span>&nbsp;</span>`;
		//box2.appendChild(l);

		// number input
		let m = document.createElement("INPUT");
		m.setAttribute('type', 'number');
		m.setAttribute('name', 'number');
		m.setAttribute('value', '');
		m.setAttribute('class', 'point');
		m.setAttribute('placeholder', ' credit point');
		m.setAttribute('min', '1');
		m.setAttribute('max', '1500');
		box2.appendChild(m);

		// number input
		let n = document.createElement("INPUT");
		n.setAttribute('type', 'number');
		n.setAttribute('name', 'number');
		n.setAttribute('value', '');
		n.setAttribute('class', 'unitt');
		n.setAttribute('placeholder', 'unit');
		n.setAttribute('min', '1');
		n.setAttribute('max', '10');
		box2.appendChild(n);




		// create remove buttion
	let remove = document.createElement('button');
    remove.setAttribute('id', 'remove');
    remove.setAttribute('class', 'remove');
   	
    remove.setAttribute("type", "button");
    remove.innerHTML ="<i class='fas fa-times-circle'></i>";
    box2.appendChild(remove);

    

		loop++;

	}
});
