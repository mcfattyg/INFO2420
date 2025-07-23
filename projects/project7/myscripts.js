PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "images/print1.png"
	PrintButton2.src = "images/print2.png"
	logo1.src = "images/logo1.png"
	logo2.src = "images/logo2.png"
}


		var imgArray = new Array(
			'FuzzyCatLg.jpg',
			'CatandDogLg.jpg',
			'HuntingDogsLg.jpg',
			'Snake1Lg.jpg'
			

		);


		var titleArray = new Array(
			'Grumpy Cat',
			'Best Friends',
			'Dog Days',
			'Yellow Snake'
			
		);
			
		var imgPath = "images/full/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		
// JavaScript Document