$("#subbut").click(function() {

    $(".progress").each(function () {

        var value = parseInt($(this).attr('data-value'));
        console.log(value + " this is value")
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                console.log("less than 50")
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                console.log("more than 50")
            }
        }

        $("#subbut").attr("disabled", true);
        console.log("parent feedback here")

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

    

    

});
