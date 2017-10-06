$(".listafile").on( "click", "[class^='delete']", function() {
	var thiss = $(this);
          $.ajax({
            url: "/delete/"+this.id,
            type: 'GET',
            success: function(res) {
                console.log(res);
				if(res !== "OK"){
					alert("Error uploading");
					return;
				}
				thiss.parent().remove();
            }
        });
});

$(document).ready(function() {
     $('#uploadForm').submit(function() {
        $("#browsefilename").empty().text("File is uploading...");
        $(this).ajaxSubmit({
			
		beforeSend: function() {
            var percentVal = '0%';
            $('#browsefilename').html(percentVal);
        },
        uploadProgress: function(event, position, total, percentComplete) {
            var percentVal = percentComplete + '%';
            $('#browsefilename').html(percentVal);
        },

            error: function(xhr) {
        console.log('Error: ' + xhr.status);
            },

            success: function(response) {
        $("#status").empty().text(response);
                console.log(response);
				if(response !== "OK"){
					alert("Error uploading");
					$("#browsefilename").empty().text();
					return;
				}
				try{
					$(".listafile").append('<div class="link1'+(Number($(".listafile [class^='link1']:last").attr('class')[$(".listafile [class^='link1']:last").attr('class').length -1]) +1)+'"><a class="textlink" href="/files/'+$('#filenameinput').val()+'">'+$('#filenameinput').val()+'</a><img class="delete'+(Number($(".listafile [class^='link1']:last").attr('class')[$(".listafile [class^='link1']:last").attr('class').length -1]) +1)+' icon" id="'+$('#filenameinput').val()+'" src="delete.png"/></div>')
				}
				catch(err){
					$(".listafile").append('<div class="link10"><a class="textlink" href="/files/'+$('#filenameinput').val()+'">'+$('#filenameinput').val()+'</a><img class="delete0 icon" id="'+$('#filenameinput').val()+'" src="delete.png"/></div>')
				}
				$("#browsefilename").empty().text();
            }
    });
	return false;
    });    
});

$('#filebrowser').change(function() {
  //$('#title').val(this.value ? this.value.match(/([\w-_]+)(?=\.)/)[0] : '');
  $('#browsefilename').text(this.files[0].name);
  $('#filenameinput').val(this.files[0].name);

})