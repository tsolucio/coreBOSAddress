/*********************************************************************************
** The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 *
 ********************************************************************************/
function addressCaptureOnSalesOrder(fromlink,fldname,MODULE,ID) {
	var accountid = document.getElementsByName("account_id")[0].value;
	var contactid = document.getElementsByName("contact_id")[0].value;
	window.open("index.php?module=Address&action=Popup&html=Popup_picker&form=vtlibPopupView&forfield="+fldname+"&srcmodule="+MODULE+"&cont_id="+contactid+"&acc_id="+accountid+"&relmod_id="+accountid,"vtlibui10","width=680,height=602,resizable=0,scrollbars=0,top=150,left=200");
}