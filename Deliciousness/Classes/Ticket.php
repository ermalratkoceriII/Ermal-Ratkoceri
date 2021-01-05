<?php 
class Ticket{
    private $_db,
            $_data;

    public function __construct($tickets = null){
        $this->_db = DB::getInstance();
    }

    public function create($fields = array()){
        if(!$this->_db->insert('tickets', $fields)){
            throw new Exception ('There was a problem with creating your Ticket.');
        }
    }

    public function exists(){
        return (!empty($this->_data)) ? true : false;
    }

    public function data(){
        return $this->_data;
    }

}