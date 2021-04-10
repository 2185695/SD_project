<?php
require "conn.php";
if($conn){

$output = array();
if($r = mysqli_query($conn, "SELECT * FROM CLOTHING")){
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
/*if($conn){
$files = scandir($dir);
for ($i = 0; $i <count($files); $i++)
        {
                if($files[$i] != '.' && $files[$i] != '..')
                        {
                                echo "File Name -> $files[$i]<br>";
                                $file = pathinfo($files[$i]);
                                $extension = $file['extension'];
                                echo "File Extension ->$extension<br>";
                                echo  "<img src='$dir$files[$i]' style='width:150px;height:150px;'><br>";
                        }
        }}

*/

?>

