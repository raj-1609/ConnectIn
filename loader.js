let i = 1;
	let num = 200;
	let lim = 4;
	let container = document.querySelector(".container");

	for (i; i < lim; i++){
		let span = document.createElement('span');
		span.setAttribute("class", "bubble");
		span.style.zIndex = `${lim - i}`;	
		span.style.height = `${(i*50) + num}px`;
	    span.style.width = `${(i*50) + num}px`;
		span.style.animationDelay = `${.5/i}s`;
		container.append(span);
	}
