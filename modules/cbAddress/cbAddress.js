/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/
document.write("<script type='text/javascript' src='include/js/Inventory.js'></script>");

//function for the popup capture hook
function cbaddresscapture(recordid,value,target_fieldname) {
	vtlib_setvalue_from_popup(recordid,value,target_fieldname);
  //alert('This is our special intercepted capture function');
  window.close();
}

function cbAddressOpenCapture(fromlink,fldname,MODULE,ID) {
	var WindowSettings = "width=680,height=602,resizable=0,scrollbars=0,top=150,left=200";
	var baseURL = "index.php?module=cbAddress&action=Popup&html=Popup_picker&form=vtlibPopupView&forfield="+fldname+"&srcmodule="+MODULE;
	if (MODULE != 'PurchaseOrder')
		var accountid = document.getElementsByName("account_id")[0].value;
	if (MODULE != 'Accounts')
		var contactid = document.getElementsByName("contact_id")[0].value;
	switch (MODULE) {
		case 'Accounts':
			window.open(baseURL+"&forrecord="+ID+"&acc_id="+accountid,"vtlibui10",WindowSettings);
		break;
		case 'Contacts':
			window.open(baseURL+"&forrecord="+ID+"&acc_id="+accountid+"&cont_id="+contactid,"vtlibui10",WindowSettings);
		break;
		case 'SalesOrder':
			window.open(baseURL+"&cont_id="+contactid+"&acc_id="+accountid+"&relmod_id="+accountid,"vtlibui10",WindowSettings);
		break;
		case 'Quotes':
			window.open(baseURL+"&forrecord="+ID+"&acc_id="+accountid+"&cont_id="+contactid,"vtlibui10",WindowSettings);
		break;
		case 'PurchaseOrder':
			window.open(baseURL+"&forrecord="+ID+"&cont_id="+contactid,"vtlibui10",WindowSettings);
		break;
		case 'Invoice':
			window.open(baseURL+"&acc_id="+accountid+"&cont_id="+contactid+"&relmod_id="+accountid,"vtlibui10",WindowSettings);
		break;
	}
}
