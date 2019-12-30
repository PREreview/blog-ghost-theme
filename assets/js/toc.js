(function($) {
    $(window).on("load", function() {
        console.log("toc.js load 4");
        var h2s = $("h2[id]");
        // $("#page-toc").append("<aside id='page-toc' class='page-toc'>");

        $("#page-toc").append("<ul class='page-toc__list'>");

        // $("#toc").append("<ul>");
        //console.log("toc.js toc", $("#toc"));

        h2s.each(function(i) {
            console.log("toc.js", i, $(this).text());
            tocItem = $("#page-toc ul").append(
                "<li><a class='toc__item-link' href='#toc-anchor_" +
                    i +
                    "'>" +
                    $(this).text() +
                    "</a></li>"
            );

            $(this).wrapInner(
                "<span class='toc-anchor' id='toc-anchor_" + i + "'></span>"
            );
        });

        $(".toc__item-link").on("click", function(e) {
            var id = $(this).attr("href");

            var top = $(id).offset().top + 80;
            // console.log("click", id, top);
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: $(id).offset().top - 100
                    },
                    1000,
                    "swing",
                    function() {}
                );
        });
    });
})(window.jQuery);
