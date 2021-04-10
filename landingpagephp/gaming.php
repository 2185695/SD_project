<?php
require "conn.php";
if($conn){

$output = array();
if($r = mysqli_query($conn, "SELECT * FROM GAMING")){
        while($row=$r->fetch_assoc()){
                $output[]=$row;
                }
        echo json_encode($output);
}
else { echo "Incorrect Username";}

}
else{
        echo "Connection Error";
}
?>

