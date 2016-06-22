// <script src="https://rawgit.com/mrdark69/DarkmanFramework/master/JqueryAjaxRequest.js" type="text/javascript" ></script>

function Darkmanajax(jsondata,urls,callback){

	$.ajax({

		type: 'post', // or post?
		dataType: 'html',
		url: urls,
		data: jsondata,

		success: callback,
		error: function(xhr, textStatus, thrownError) {

			console.log(thrownError);
//                                alert(xhr.status);
//                                alert(thrownError);
//                                alert(textStatus);
		}
	});
}

function Darkmanajax_form(formdata,urls,callback){

 var post = $("#" + formdata).find("input,textarea,select,hidden").not("#__VIEWSTATE,#__EVENTVALIDATION").serialize();
	$.ajax({

		type: 'post', // or post?
		dataType: 'html',
		url: urls,
		data: post,

		success: callback,
		error: function(xhr, textStatus, thrownError) {

			console.log(thrownError);
//                                alert(xhr.status);
//                                alert(thrownError);
//                                alert(textStatus);
		}
	});
}
