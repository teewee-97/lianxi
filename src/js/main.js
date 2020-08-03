require.config({
    paths: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min'
    }
});

require(['jquery'], function($) {
    let mod = $('#currentpage').attr('currentmod');
    if (mod) {
        require([mod], function(modindex) {
            modindex.init()
        });
        require([mod], function(modliebiao) {
            modliebiao.init()
        })

    }

})