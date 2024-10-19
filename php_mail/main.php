<?php
$ip = $_SERVER['REMOTE_ADDR'];
$log = fopen('visitors.txt', 'a');
fwrite($log, "$ip\n");
fclose($log);
