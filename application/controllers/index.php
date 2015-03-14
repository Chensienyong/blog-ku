<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class index extends CI_Controller {
	public function __construct() {        
	    parent::__construct();
	}
	public function index()
	{
		$this->load->view('index');
	}
	public function notYet() {
		$this->load->view('websiteUnderConstruction');
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */