/***************************************************************************
 *	Author:	Brad Kahl
 *	Date:	9.27.12
 *	Description: Interacts with the MT HELPFUL LINKS, calculates how many
                 links and centers them within there parent element.
 **************************************************************************/

function createLinks(id, opts){
	
	var elements, count = 1;
	
	elements = "<div class='title'>"+opts.title+"</div>";
	
	opts.links.forEach(function(o) {
		if(count<4){
		elements += "<div class='links'>";
			elements += "<a class='helpful-link' href='"+o.url+"' title='"+o.title+"'><span>"+o.title+"</span>";
				elements += "<img class='"+o.icon+"' src='images/spacer.png' alt='' />";
			elements += "</a>";
		elements += "</div>";
		}else{ return console.log('Your links are greater then 4, therefore, it wasnt added to the DOM!'); }
		count++;

	});
	
	$(id).append(elements);
	
	console.log('create links done');	
}

(function($){
    $.fn.helpfulLinks = function(options){
        var id = $(this), opts;

        $.fn.helpfulLinks.defaults = {
			title: "Helpful Links:" 
        };

        opts = $.extend({}, $.fn.helpfulLinks.defaults, options);

        createLinks(id, opts);
    
        return this;    
    };

}(jQuery));