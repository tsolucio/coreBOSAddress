<?php
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/

global $adb;

$addressid = vtlib_purify($_REQUEST['record']);

if (!empty($addressid)) {
	$adrs = $adb->pquery('select * from vtiger_address where addressid=?',array($addressid));
	if ($adrs and $adb->num_rows($adrs)==1) {
		$add = $adb->fetch_array($adrs);
		$rdo = array(
			'addressid' => $add['addressid'],
			'addressno' => $add['addressno'],
			'reference' => $add['reference'],
			'street' => $add['street'],
			'pobox' => $add['pobox'],
			'city' => $add['city'],
			'state' => $add['state'],
			'postalcode' => $add['postalcode'],
			'country' => $add['country'],
		);
		echo json_encode($rdo);
	}
}
?>
