$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "https://script.google.com/macros/s/AKfycbwkDOHY_zJYVv3Ir2mKXHlZvrLz_SuhnXAu99E9me-cuP9AznmR/exec";
            // var url = "https://script.google.com/macros/s/AKfycbzt2DvyuDfGyy_F5baqaPCf_jldsKFBYw36XfzY3eRB/dev";


            // var data = $(this).

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serializeArray(),
                headers: {
                    // 'Content-Type': 'text/plain;charset=utf-8',
                    'Content-type': 'application/x-www-form-urlencoded',
                },
                success: function (data)
                {

                    console.log(JSON.parse(data));
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});
