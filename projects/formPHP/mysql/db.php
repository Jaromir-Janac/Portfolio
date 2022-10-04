<?php 

function Connection(){
    global $connection;
    // připojení do databáze
    $connection = mysqli_connect("md335.wedos.net:3306","w299766_port","gDhKcp6D","d299766_port");

    if($connection){
        echo "Jsme propojení s databází";
    } else {
        die("Ou, něco se pokazilo");
    } 
}

function AddQuest(){
    global $connection;
    $text = $_POST["question"];
    $text = addslashes($text);
    
    $query = "INSERT INTO questions(text) VALUES('$text')";
    
    $result = mysqli_query($connection,$query);
    
    if(!$result){
        die("Nepodařilo se data zapsat do databáze.");
    } 
}


function SelectQuest(){
    global $connection;
    global $result;
    $query = "SELECT * FROM questions";
    $result = mysqli_query($connection,$query);
    
    if(!$result){
        die("Nepodařilo se vybrat data z databáze.");
    }
}



//    $username = mysqli_real_escape_string($connection, $username);
//    $password = mysqli_real_escape_string($connection, $password);


?>

