function talk(){
    var know = {

        //key is the recogmixzed word from user input(left side)
        //value is the response to the user from chatbot(right side)
        "Hello": "Hi there &#128540",// hexadecimal representation of emoji
        "Who are you?": "My name is Chatty Lorry",
        "How are you?": "I am fine, thanks for asking",
        "What can you do for me?": "Not much but you can ask anything and I will ask what I can.",
        "Okay": "You are welcome.",
        "what is your gender?": "I dont have gender, Moloro created me to assist with her orders.",
        "What are you upto?":"Just busy with work, you know there is no rest .",
        "Enjoy your day.":"Thanks"

    };

    var user =  document.getElementById('userBox').value;//listens to input
    document.getElementById('chatLog').InnerHTML =
    user + "<br>";// loops and renders a response to the chatlog element


    //checking input is found in the db then respond
    if(user in know){
        document.getElementById('chatLog').innerHTML = know[user] +"<br>"

    }

    //if not then ttell user u dont understand
    else{
        document.getElementById('chatLog').innerHTML = "Sorry, I dont understand your question."
    }
}