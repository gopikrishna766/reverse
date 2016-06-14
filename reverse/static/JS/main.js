$( document ).ready(function() {
    console.log( "ready!" );
	$("#load").click(function(){
		$.ajax({
		    url: '/rever/',
		    type: 'post',
		    data:{"source":$("#source").val(), 'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val(),},
		    success: function(data) {
		       console.log(data)
		       $("#target").html(data)
		    },
		    failure: function(data) { 
		        alert('Got an error dude');
		    }
		});
	});

});