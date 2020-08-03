define([], function() {
    const oul = $('.aui');
    return {
        init: function() {
            $.ajax({
                url: 'http://localhost/study/yigou/php/yougodata.php',
                dataType: 'json'
            }).done(function(data) {
                let strhtml = '<ul class="aui">'
                $.each(data, function(index, value) {
                    strhtml += `
                  <a href="detailed.html?sid=${value.sid}" target="blank">
                  <li>
                      <img src="${value.url}" alt="">
                      <div class="goods">
                          <div class="p_name">
                              <a href="">${value.title}</a>
                          </div>
                          <div class="price">
                              <i>￥</i>
                              <strong>${value.price}</strong>
                          </div>
                      </div>
                  </li>
              </a>       
                  `
                });
                strhtml += '</ul>'
                $('.box').html(strhtml)
            })
        }
    }
})