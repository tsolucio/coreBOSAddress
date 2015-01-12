/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/
document.write("<script type='text/javascript' src='include/js/Inventory.js'></"+"script>");
document.write("<script type='text/javascript' src='include/js/Mail.js'></"+"script>");
document.write("<script type='text/javascript' src='include/js/Merge.js'></"+"script>");

//function for the popup capture hook
function mycapture(recordid,value,target_fieldname) {
	vtlib_setvalue_from_popup(recordid,value,target_fieldname);
  //alert('This is our special intercepted capture function');
  window.close();
}
