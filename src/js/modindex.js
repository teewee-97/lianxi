define([], function() {
    return {
        init: function() {
            $('.commodity').on('mouseover', function() {
                $('.menu ul').show()
            });
            $('.menu ul li').on('mouseover', function() {
                $(this).addClass('active').siblings('li').removeClass('active');
                $('.cartlist').show();
                $('.cartlist .item').eq($(this).index()).show().siblings('.cartlist .item').hide()
            });
            $('.menu ul li').on('mouseout', function() {
                $('.cartlist').hide()
            })
            $('.cartlist').on('mouseover', function() {
                $('.cartlist').show()
            });
            $('.cartlist').on('mouseout', function() {
                $('.cartlist').hide()
            })
        }
    }
})