<?php
$email = $_POST['email'];
$senha = $_POST['senha'];
if($email == 'douglas' && $senha == '1234'){
    $array['status'] = 'ok';
}
//echo json_encode($_POST);
echo json_encode($array);
