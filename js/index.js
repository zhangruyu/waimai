window.onload=function(){
	let imgs=document.querySelectorAll("#banner img");
	let btn=document.querySelectorAll("#banner .btns .btn");
	let banner=document.querySelector("#banner");
	let w=banner.offsetWidth;

	imgs.forEach(function(element,index){
		if(index!=0){
			element.style.left=w+"px";
		}
	})
	let t=setInterval(move,2000);
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}

	let now=0;
	let next=0;
	function move(){
		next++;
		if(next==imgs.length){
			next=0;
		}
		btn.forEach(function(v){
			v.classList.remove("hot");
		})
		btn[next].classList.add("hot");
		imgs[next].style.left=w+"px";
		animate(imgs[now],{left:-w});
		animate(imgs[next],{left:0});
		now=next;

	}
/*
	btn.forEach(function(value,i){
		if(i>now){
			btn[now].classList.remove("hot");
			btn[i].classList.add("hot");
			imgs[i].style.left=w+"px";
			animate(imgs[now],{left:-w});
			animate(imgs[i],{left:0});
			next=now=i;
			move();
		}
	})*/

	window.onresize=function(){
		w=banner.offsetWidth;
	}
}