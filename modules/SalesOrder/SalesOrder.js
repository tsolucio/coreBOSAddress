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

//function to fill in the address field on uitype 10 capture
function SalesOrdersetValueFromCapture(recordid,value,target_fieldname) {
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
	if(document.getElementById('from_link').value != '') {
        window.opener.document.QcEditView.parent_name.value = product_name;
        window.opener.document.QcEditView.parent_id.value = product_id;
	} else {
        window.opener.document.EditView.parent_name.value = product_name;
        window.opener.document.EditView.parent_id.value = product_id;
	}
}
function set_return_specific(product_id, product_name, mode) {

        //getOpenerObj used for DetailView 
        var fldName = getOpenerObj("salesorder_name");
        var fldId = getOpenerObj("salesorder_id");
        fldName.value = product_name;
        fldId.value = product_id;
	if(mode != 'DetailView')
	{
		window.opener.document.EditView.action.value = 'EditView';
        	window.opener.document.EditView.convertmode.value = 'update_so_val';
        	window.opener.document.EditView.submit();
	}
}
function set_return_formname_specific(formname, product_id, product_name) {
        window.opener.document.EditView1.purchaseorder_name.value = product_name;
        window.opener.document.EditView1.purchaseorder_id.value = product_id;
}
function set_return_todo(product_id, product_name) {
	if(document.getElementById('from_link').value != '') {
        window.opener.document.QcEditView.task_parent_name.value = product_name;
        window.opener.document.QcEditView.task_parent_id.value = product_id;
	} else {
        window.opener.document.createTodo.task_parent_name.value = product_name;
        window.opener.document.createTodo.task_parent_id.value = product_id;
	}
}

