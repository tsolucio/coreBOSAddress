/*********************************************************************************
** The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 *
 ********************************************************************************/

document.write("<script type='text/javascript' src='include/js/Inventory.js'></"+"script>");

function PurchaseOrdersetValueFromCapture(recordid,value,target_fieldname) {
	console.log(recordid,value,target_fieldname);
	var url = "module=Address&action=AddressAjax&ajax=true&file=getAddressInfo&record="+recordid;
	new Ajax.Request(
		'index.php',
		{
			queue: {
				position: 'end',
				scope: 'command'
			},
			method: 'post',
			postBody:url,
			onComplete: function(response) {
				var res = JSON.parse(response.responseText);
				if(target_fieldname == 'linktoaddressbilling'){
				document.EditView.bill_street.value = res.street;
				document.EditView.bill_pobox.value = res.pobox;
				document.EditView.bill_city.value = res.city;
				document.EditView.bill_state.value = res.state;
				document.EditView.bill_code.value = res.postalcode;
				document.EditView.bill_country.value = res.country;
				}
				if(target_fieldname == 'linktoaddressshipping'){
				document.EditView.ship_street.value = res.street;
				document.EditView.ship_pobox.value = res.pobox;
				document.EditView.ship_city.value = res.city;
				document.EditView.ship_state.value = res.state;
				document.EditView.ship_code.value = res.postalcode;
				document.EditView.ship_country.value = res.country;
				}
			}
		});
}


function set_return(product_id, product_name) {
        window.opener.document.EditView.parent_name.value = product_name;
        window.opener.document.EditView.parent_id.value = product_id;
}
function set_return_specific(product_id, product_name) {
        
	//getOpenerObj used for DetailView 
        var fldName = getOpenerObj("purchaseorder_name");
        var fldId = getOpenerObj("purchaseorder_id");
        fldName.value = product_name;
        fldId.value = product_id;
}
function set_return_formname_specific(formname, product_id, product_name) {
        window.opener.document.EditView1.purchaseorder_name.value = product_name;
        window.opener.document.EditView1.purchaseorder_id.value = product_id;
}
function set_return_todo(product_id, product_name) {
        window.opener.document.createTodo.task_parent_name.value = product_name;
        window.opener.document.createTodo.task_parent_id.value = product_id;
}

