$(document).ready(function() {
   
    $(".wallpaper-icon").click(function() {
        $(".wallpaper-menu").slideToggle();
    });

    $(".wallpaper-option").click(function() {
        var wallpaperData = $(this).attr("data-wallpaper");
        $("body").css("background-image", "url('images/wallpaper" + wallpaperData + ".jpg')");
    });

    
    var thumbnails = $(".thumb");
    var mainImage = $("#mainImage");
    var quotes = ["Discover the world", "Embrace the journey", "Capture the moment", "Seek adventure", "Explore the unknown", "Dream big", "Live with passion", "Create memories", "Cherish every moment", "Love without limits", "Find beauty everywhere", "Make every day count", "Believe in yourself", "Stay curious", "Inspire others"];
    var currentIndex = 0;

    thumbnails.click(function() {
        var index = $(this).index();
        currentIndex = index;
        showImage(index);
    });

    function showImage(index) {
        var selectedImage = $(thumbnails[index]);
        thumbnails.removeClass("active");
        selectedImage.addClass("active");
        mainImage.attr("src", selectedImage.attr("src"));
        $(".caption").text('"' + quotes[index] + '"');
        updateIndicator(index);
    }

   
    $(".arrow-box-left").click(function() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentIndex);
    });

    $(".arrow-box-right").click(function() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
    });

    
    $(".thumbnails-prev").click(function() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        showImage(currentIndex);
    });

    $(".thumbnails-next").click(function() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        showImage(currentIndex);
    });

   
    function updateIndicator(index) {
        var indicatorWidth = (index + 1) * (100 / thumbnails.length);
        $(".indicator").css("transform", "translateX(" + index * (100 / thumbnails.length) + "%)");
        $(".indicator").css("width", indicatorWidth + "%");
    }

    
    showImage(currentIndex);
});
