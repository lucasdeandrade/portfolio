function enviarMsg(){
    var mensage = document.getElementById("mensage").value;
        mensage.innerHTML = mensage;
    var firstName = document.getElementById("FirstName").value;
        firstName.innerHTML = firstName;
    var lastName = document.getElementById("LastName").value;
        lastName.innerHTML = lastName;

        msgCompleta = "*Mensagem enviada via portifólio* \n\n"+ mensage + "\n\nMensagem de: " + firstName +" "+ lastName;
        msgCompleta = window.encodeURIComponent(msgCompleta)
        msgFomart = "https://wa.me/5512992317251?text="+msgCompleta;
        window.open(msgFomart)
}