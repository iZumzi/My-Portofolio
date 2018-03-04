$(document).ready(function(){
  $('#addCommentBtn').click(function(){
    alert("Thank you for contacting me! See you soon! ")
    
    var comment = [];
    var addObj = {
        id: Math.floor(Math.random() * 1000),
        name: $('#name').val(),
        mail: $('#email').val(),
        body: $('#message').val()
    };
    console.log(addObj);
    
    comment.push(addObj);
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
        
  });

  $('#first-button').on('click', alertAction);

    function alertAction() {
        alert('Sorry for my Pop-Up...');
        alert('But you should better look at the URL...');
        history.pushState('cv', 'portofolio', 'GlitchInMatrix.Have_A_Nice-Day!.html');
        alert('Thank You!');
    }

}) 