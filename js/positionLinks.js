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
					imgWidths = [],
					maxAmtOfHelpfulLinks = 3,
					i, count = 0, imgCount = 0;
					
				$(helpfulLinks+' > div').each(function(){
					childWidths.push($(this).width());
				});
				
				widthOfLinkBlocks = Math.floor(((((parentWidth-containerLeftAndRightPaddingTotal)-helpfulLinksTitleMarginRightAmt)-childWidths[0])/howManyLinks)-howManyLinks);
				
				$(helpfulLinks+' .helpful-link').each(function(){
					var imgWidth = parseInt( $(this).css('padding-left'), 10 ),
						img = {
							paddingLeft	: imgWidth,
							textWidth	: widthOfLinkBlocks-imgWidth
						};
					
					imgWidths.push(img);
					
					imgCount++;
				});
				
				for(i=1;i<howManyChildren;i++){
					if(i<=maxAmtOfHelpfulLinks){
						eachLinkMarginLeftToCenterAmt.push(Math.floor(((widthOfLinkBlocks-(childWidths[i]))-4)/2));
					}else{ return; }
				}
				
				$(helpfulLinks+' .links').css('width',widthOfLinkBlocks);
				
				imgWidths.forEach(function(o){
					$(helpfulLinks+' .links > a > span').css('width',o.textWidth);
				});
				
				$(helpfulLinks+' .links > a > span').css('width',imgWidths.textWidth);
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