$().ready(function() {
	
	console.log('position links start');
	// helpful links for micro templates call
	var helpfulLinks = $('.helpful-links').each(function(){
		//checks to see if the helpful links are 
		var horizontalOrVertical = $(this).attr('class').split(" ")[1] || null,
			helpfulLinks = '.'+$(this).attr('class').split(" ")[0];
		
		if(horizontalOrVertical){
			// if horizontal
			if(horizontalOrVertical === "horizontal"){
				var parentWidth = $(this).parent().width(),
					childWidths = [],
					howManyChildren = $(this).children().length,
					howManyLinks = howManyChildren-1,
					widthOfLinkBlocks,
					containerLeftAndRightPaddingTotal = parseInt($(helpfulLinks).css('padding-left').split("px")[0],10)+parseInt($(helpfulLinks).css('padding-right').split("px")[0],10),
					helpfulLinksTitleMarginRightAmt = parseInt($(helpfulLinks+' div').css('margin-right').split("px")[0],10)*howManyChildren,
					eachLinkMarginLeftToCenterAmt = [],
					maxAmtOfHelpfulLinks = 3,
					iconWidths = [],
					i, count = 0, imgCount = 0;
					
				$(helpfulLinks+' > div').each(function(){
					childWidths.push($(this).width());
				});
				
				widthOfLinkBlocks = Math.floor(((((parentWidth-containerLeftAndRightPaddingTotal)-helpfulLinksTitleMarginRightAmt)-childWidths[0])/howManyLinks)-howManyLinks);
				
				$(helpfulLinks+' div.helpful-icon').each(function(){
					var imgWidth = parseInt($('.'+$(this).attr('class').split(" ")[0]).css('width').split("px")[0],10)+parseInt($(this).css('margin-right').split("px")[0],10);
					iconWidths.push(imgWidth);		
				});
				
				$(helpfulLinks+' div.helpful-link').each(function(){
					$(this).css('width',widthOfLinkBlocks-iconWidths[imgCount]);
					imgCount++;
				});
				
				for(i=1;i<howManyChildren;i++){
					if(i<=maxAmtOfHelpfulLinks){
						eachLinkMarginLeftToCenterAmt.push(Math.floor(((widthOfLinkBlocks-(childWidths[i]))-4)/2));
					}else{ return; }
				}
				
				$(helpfulLinks+' .links').css('width',widthOfLinkBlocks);
				$(helpfulLinks+' .links > div').each(function(){
					$('.helpful-link').css('width',widthOfLinkBlocks-iconWidths[count]);
					if(eachLinkMarginLeftToCenterAmt[count] > 0){
						$(this).css('margin-left',eachLinkMarginLeftToCenterAmt[count]);
					}
					count++;
				});
			}
			// if vertical
			else{
			}
			
		}
		else{ 
			console.log('Please specifiy if the DOM element class is horizontal or vertical.'); }
	});

});