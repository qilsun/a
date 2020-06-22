jQuery(document).ready( function() {
	setTimeout(function() {
		var website_array = jQuery('div[data-type="website"]');
		if(website_array) {
			jQuery.each( website_array, function( i, val ) {
			  	var lab = jQuery( this ).find( 'label[data-role="label"]' );
				if( lab.text() === 'Guidebook') {
			        let redirection_url = jQuery(this).find('input').val();
		    		localStorage.setItem("setRedirectionURL", redirection_url);
			    }
			});
		}		
	}, 5000);
});

if(location.href.indexOf('/&') !== -1){
	location.replace(location.href.replace('/&', '/?'));
}

var overrideRedirectIntervalId = setInterval(function(){
	if(location.href.indexOf('://form.swainsonapartments.com/') === -1)
	{
		clearInterval(overrideRedirectIntervalId);
		return;
	}
	if(typeof ViewFormCommandDispatcher !== 'undefined' && typeof ViewFormCommandDispatcher.prototype !== 'undefined' && typeof ViewFormCommandDispatcher.prototype.onSubmissionPhaseRedirect === 'function')
	{
		clearInterval(overrideRedirectIntervalId);
		ViewFormCommandDispatcher.prototype.onSubmissionPhaseRedirect = function(details, inRootDOMNode)
		{
			if(details && typeof details.url === 'string' && details.url.indexOf('://www.form.swainsonapartments.com/') !== -1)
			{
				details.url = details.url.replace('://www.form.swainsonapartments.com/', '://form.swainsonapartments.com/');
			}
			this.openURL(details.url, details.target, 'get', details.additional_url_parameters);
		};
	}
}, 100);
var sourceIs = document.querySelector('#form > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > div > div > input[type=text]').value;


if (sourceIs == "a") {
                document.querySelector('#form > div:nth-child(2) > div:nth-child(3) > div > button').style.display = 'none';

		document.querySelector('#form > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div > div > div > select > option:nth-child(2)').disabled="disabled";

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
