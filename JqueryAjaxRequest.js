function Darkmanajax(jsondata,urls,callback){

	$.ajax({

		type: 'post', // or post?
		dataType: 'json',
		url: urls,
		data: jsondata,

		success: callback,
		error: function(xhr, textStatus, thrownError) {
//                                alert(xhr.status);
//                                alert(thrownError);
//                                alert(textStatus);
		}
	});
}

