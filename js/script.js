$(function() {

    $('.carousel-arrow-left').slider() 
    $('.carousel-arrow-right').slider()
 
});


//shablon////////////////////////////

$(function() {

	var html = $('#test').html();
 	var data = {
 		name: 'Станислав Борисович',
 		work: 'Хасоло',
 		why: 'Хочу учиться, потому что',
 		key: [
 		{
		cause:  'Знание сила',
	},
		{
 		cause: 'Меня не берут в космонавты',
	}
 		],
 		fi: 'фидбек',
 		Strawberry: 'Пожиратель клубники'
 	}

 	var contend = tmpl(html, data);
 	$('body').append(contend)
});

//Lodash//////////////////////////////

$(function() {

	var data = {
	title: "Lodash",
	masiv: [{
		a: 'privet',
		b: 'menya zovyt',
		c: 'karl'
	}]
	};

  	// var lod = $('.suda');
  	var loda = $('#lodash').text();
  	var tpl = _.template(loda);
  	$('body').append(tpl(data));
  	// $loda.html(tpl(data));
});