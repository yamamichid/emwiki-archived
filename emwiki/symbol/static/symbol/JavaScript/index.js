var context = {
    'article_base_uri': 'http://localhost:8888/article/',
    'adjust_name_url': '/symbol/adjust-name'
}
$(function(){
    function select(anchor){
        //アンカーされているコンテンツをマーク(CSSでborderを指定して囲むため)
        $("#symbol").find('.selected').removeClass('selected');
        $("#symbol").find(anchor).addClass('selected');
    }
    select(location.anchor);
    $("#content").on('click', 'span[data-href]', function(){
        var url = encodeURI(context['article_base_uri'] + $(this).attr('data-href'));
        return window.open(url, '_blank').focus();
    })

    $("#content").on('click', '[data-link]' , function(){
        let url = undefined;
        var link = $(this).attr('data-link').split("#");
        link[0] = decodeURIComponent(link[0]);
        location.href = $(this).attr('data-link');
        select(link[1]);
    })
});