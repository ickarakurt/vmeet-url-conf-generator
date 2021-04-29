$( document ).ready(function() {
    $('#create-url').on('click',function(){
        let urlParams = "#"
        const inputCount = $('input[type=text]').length
        $('input, select').each(function(){
            const field = $(this)
            const val = field.val();
            const confName = $(this).attr('id')
            console.log(confName)
            console.log(val)
            if(val){
                if(urlParams != "#")
                    urlParams+= '&'
                urlParams+= 'config.' + confName + '=' + val
            }
     
        })
        $('#result').text(urlParams)
    })
});