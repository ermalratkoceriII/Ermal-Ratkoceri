<?php
class DB {
private static $_instance = null;
private $_pdo,
    $_query,
    $_error = false,
    $_results,
    $_count = 0;

    private function __construct() {
        try{
            $this->_pdo = new PDO('mysql:host=' . Config::get('mysql/host') . ';dbname=' . Cofnig::get('mysql/db'), Cofnig::get('mysql/username'), Cofnig::get('mysql/password'));
            echo 'Connected';
        }catch(PDOException $e) {
            die($e->getMessage());
        }
    }

public static function getInstance(){
    if(!isset(self::$_instance)) {
        self::$_instance = new DB();
    }
    return self::$_instance;
}
}