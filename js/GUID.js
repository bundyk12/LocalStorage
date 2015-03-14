function generateGUID(){
    var d = new Date().getTime();
    var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
	sessionStorage.setItem("GUID", guid);
};


function showName() {
	if(localStorage.getItem('name')) {
		var name = localStorage.getItem('name');
		var GUID = sessionStorage.getItem('GUID');
		$('#storageName').append("<p>Hey, " + name + ", your session GUID is: " + GUID + ".</p>");
	};
};

function showColor() {
	if(localStorage.getItem('bgcolor')) {
		var bgcolor = localStorage.getItem('bgcolor');
		$('#storageColor').css("background-color", bgcolor);
	};
};

$('#GUIDstyler').submit(function(){
	var name = $('#name').val();
	var color = $('#color').val();
	localStorage.setItem("name", name);
	localStorage.setItem("bgcolor", color);
});

generateGUID();
showName();
showColor();