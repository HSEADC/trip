import './index.css'
var jQueryScript = document.createElement('script');
jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
jQueryScript.type = 'text/javascript';

var jQueryUIScript = document.createElement('script');
jQueryUIScript.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
jQueryUIScript.type = 'text/javascript';

document.head.appendChild(jQueryScript);
document.head.appendChild(jQueryUIScript);

$(document).ready(function() {
  $(".Q_Icons-Burger").click(function() {
    $(".menu-mobile").hide();
    $(".blur-mobile").show();
    $(".none").show();
  });

  $(".close").click(function() {
    $(".menu-mobile").show(); 
    $(".blur-mobile").hide(); 
    $(".none").hide();
  });
  
});



var form = document.getElementById("my-form");
          
          async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("my-form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
              method: form.method,
              body: data,
              headers: {
                  'Accept': 'application/json'
              }
            }).then(response => {
              if (response.ok) {
                status.innerHTML = "Спасибо за подписку!";
                form.reset()
              } else {
                response.json().then(data => {
                  if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                  } else {
                    status.innerHTML = "Ой! Что-то не так";
                  }
                })
              }
            }).catch(error => {
              status.innerHTML = "Ой! Что-то не так";
            });
          }
          form.addEventListener("submit", handleSubmit)