window.socialButtons = (function(){

	var targetURL = 'http://stackoverflow.com'; 

	var scriptTwitter = document.createElement('script');
	scriptTwitter.src = 'https://cdn.api.twitter.com/1/urls/count.json?callback=insertCountTwitter&url='+targetURL;
	document.body.appendChild(scriptTwitter); 

	var scriptFacebook = document.createElement('script');
	scriptFacebook.src = 'http://graph.facebook.com/?callback=insertCountFacebook&id='+targetURL;
	document.body.appendChild(scriptFacebook); 

})();


function insertCountTwitter(content) {
  document.querySelector('.twitter b').innerHTML = content.count;
}

function insertCountFacebook(content) {
  if (!content.shares) { content.shares = 0; }
  document.querySelector('.facebook b').innerHTML = content.shares; 
}