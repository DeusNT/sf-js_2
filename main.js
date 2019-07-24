let currentProgressNumber = 0;
$('#button1').click(function button1() {
	const innerNumber = parseFloat($('#button1').text());
	currentProgressNumber = innerNumber + parseFloat(currentProgressNumber) + '%';
	$('#progressbar1').width(currentProgressNumber);
})
$('#button2').click(function button2() {
	const innerNumber = parseFloat($('#button2').text());
	currentProgressNumber = innerNumber + parseFloat(currentProgressNumber) + '%';
	$('#progressbar1').width(currentProgressNumber);
})
$('#button3').click(function button3() {
	const innerNumber = parseFloat($('#button3').text());
	currentProgressNumber = innerNumber + parseFloat(currentProgressNumber) + '%';
	$('#progressbar1').width(currentProgressNumber);
})