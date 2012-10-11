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
					containerPaddingLeft = parseInt($(helpfulLinks).css('padding-left'),10),
					containerPaddingRight = parseInt($(helpfulLinks).css('padding-right'),10),
					containerLeftAndRightPaddingTotal = containerPaddingLeft+containerPaddingRight,
					helpfulLinksTitleMarginRightAmt = parseInt($(helpfulLinks+' div').css('margin-right'),10)*howManyChildren,
					eachLinkMarginLeftToCenterAmt = [],
					maxAmtOfHelpfulLinks = 3,
					i, count = 0;
					
				$(helpfulLinks+' > div').each(function(){
					childWidths.push($(this).width());
				});
				
				// subtract container padding left and right and addition 12 px from total allowed space for the helpful links 
				// FROM the parent width and round down.	
				widthOfLinkBlocks = Math.floor((parentWidth-containerLeftAndRightPaddingTotal)-12);

				// subtract the value of the title width and title margin right from the current width value of widthOfLinkBlocks because this value
				// isn't apart of the calculation.
				widthOfLinkBlocks = Math.floor(widthOfLinkBlocks-(helpfulLinksTitleMarginRightAmt+childWidths[0]));

				// divide how many links used by the remaining widthOfLinkBlocks width to get width of each block.
				widthOfLinkBlocks = Math.floor(widthOfLinkBlocks/howManyLinks);
				
				for(i=1;i<howManyChildren;i++){
					if(i<=maxAmtOfHelpfulLinks){
						eachLinkMarginLeftToCenterAmt.push(Math.floor(((widthOfLinkBlocks-(childWidths[i]))-4)/2));
					}else{ return; }
				}
				
				$(helpfulLinks+' .links').css('width',widthOfLinkBlocks);
				
				$(helpfulLinks+' .links > a').each(function(){
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