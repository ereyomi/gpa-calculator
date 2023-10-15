
//toggle side bar with jquery
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


$(".gp_box").on("click", "button", function(e){
    	e.preventDefault();
    	$(this).parent().remove();
    });





let show =document.querySelector('#show');

//calculate

document.querySelector('.cal').addEventListener('click', () => {

	let unit = document.querySelectorAll('.unit');
	let sel = document.querySelectorAll('.grade');
	
	show.style.display = "block";
	let unitsum = 0;
	let gradee = 0;
	let tcp = 1;
	let tcpadd=0;
	
	/* if(z[i].type == "number") */
		for (let i = 0; i < unit.length || i < sel.length; i++){	

			
				if (parseInt(unit[i].value) || parseInt(sel[i].value)){
				tcp = (parseInt(unit[i].value))*(parseInt(sel[i].value));
					unitsum+=parseInt(unit[i].value);
					gradee+=parseInt(sel[i].value);
					tcpadd+=tcp;
				}
		}

		let gpa= (tcpadd/unitsum).toFixed(2);


		

		if(unitsum == 0 || tcpadd == 0 || (isNaN(unitsum)) || (isNaN(tcpadd))) {

			show.style.background = "red";
			show.innerHTML = `<span class="close" id="close">&times;</span>All inputs are required for computation
			<br><b>Please</b> complete the form`;
		}else{
			show.style.background = "#292C97";
			show.innerHTML =	`<span class="close .col-sm-8" id="close">&times;</span>Total Number of Unit (TNU): <b>${unitsum}</b> <br> Total Credit Point (TCP): <b>${tcpadd}</b> <br>
	Grade point Average (GPA): <b> ${gpa} </b>`;
		}
	document.querySelector('.close').addEventListener('click', () => {
		show.style.display ="none";
	});

});



/*
//remove fuction
let removeElement = (ev) => {
    //let button = ev.target;
    //let pp = ev.target.parentNode;
   	//let field = button.previousElementSibling; // delete box
    //let fieldd = button.nextElementSibling; //delete br
    //document.body.removeChild(parent);
    let divv = document.getElementById('ere');
    let dpv = button.parentElement;


	

   	//button.parentElement.parentNode.removeChild(button.parentElement);



  }
*/



// createElements

document.querySelector('.add').addEventListener('click', () => {
	show.style.display ="none";
	
	let y = document.querySelector('.option').value;
	let z = parseInt(y);
	let div_main = document.querySelector('.gp_box');
    let div1 = document.getElementById('ere');
    let inputs = document.querySelectorAll('.unit');
 
if(!div1){
	div1 = document.createElement('div');
	div1.setAttribute('id','ere');
	div_main.appendChild(div1);

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
		let box = document.createElement("SPAN");
        box.setAttribute('class', 'mydiv');

		div1.appendChild(box);


		//let l = document.createElement("label");
		//l.innerHTML = `${loop}.<span>&nbsp;</span>`;
		//box.appendChild(l);

		//course input
		let i = document.createElement("INPUT");
		i.setAttribute('type', 'text');
		i.setAttribute('name', 'course');
		i.setAttribute('value', '');
		i.setAttribute('placeholder', 'course code');
		box.appendChild(i);

		// number input
		let n = document.createElement("INPUT");
		n.setAttribute('type', 'number');
		n.setAttribute('name', 'number');
		n.setAttribute('value', '');
		n.setAttribute('class', 'unit');
		n.setAttribute('placeholder', 'unit');
		n.setAttribute('min', '1');
		n.setAttribute('max', '10');
		box.appendChild(n);



		//select 
		let s = document.createElement("SELECT");
		s.setAttribute('class', 'grade');
		box.appendChild(s);


		//option

		let grade = {
			a:"A",
			b:"B",
			c:"C",
			d:"D",
			e:"E",
			f:"F",
			};

		let grade_val = {
			a:5,
			b:4,
			c:3,
			d:2,
			e:1,
			f:0,
			};

			let ere;

			for (ere in grade) {
				let o = document.createElement("OPTION");
				o.setAttribute('value', grade_val[ere]);
				let g = document.createTextNode(grade[ere]);
				o.appendChild(g);
				s.appendChild(o);
			}
			

	let remove = document.createElement('button');
    remove.setAttribute('id', 'remove');
    remove.setAttribute('class', 'remove');
    remove.innerHTML ="<i class='fas fa-times-circle'></i>";
    
    //remove.onclick = (e) => {
    	
      //removeElement(e)
    //};
    
    remove.setAttribute("type", "button");
    // remove.innerHTML = "Remove" + loop;
    // remove.innerHTML = '&times;';
    // remove.appendChild(remove_text);
    
    box.appendChild(remove);

    
    

		loop++;

	}

} );

// reset button
document.querySelector('#reset').addEventListener('click',() => {

	
	let reset =document.querySelector('#ere');
	reset.parentNode.removeChild(reset);


});

//exit

document.querySelector('.exit_it').addEventListener('click', () => {
	
		if(navigator.app){
			navigator.app.exitApp();
		}
		else if(navigator.device){
			navigator.device.exitApp;
		}else{
			window.close();
		} 
		//cordova.plugins.exit()

});
