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
document.write("<script type='text/javascript' src='include/js/Merge.js'></"+"script>");
document.write("<script type='text/javascript' src='include/js/Mail.js'></script>");



function InvoicesetValueFromCapture(recordid,value,target_fieldname) {
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

function controlVariable() {
	var linkadd6 = document.getElementById("bill_street").value;
	var linkadd2 = document.getElementById("bill_pobox").value;
	var linkadd3 = document.getElementById("bill_city").value;
	var linkadd4 = document.getElementById("bill_code").value;
	var linkadd5 = document.getElementById("bill_country").value;
	if(linkadd6 == '' && linkadd2== '' && linkadd3== '' && linkadd4== '' && linkadd5 ==''){
		return true;
	}else return false;
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

function set_return_specific(product_id, product_name) {
        
	//getOpenerObj used for DetailView 
	var fldName = getOpenerObj("product_name");
        var fldId = getOpenerObj("product_id");
        fldName.value = product_name;
        fldId.value = product_id;
}

function set_return_formname_specific(formname,product_id, product_name) {
        window.opener.document.EditView1.product_name.value = product_name;
        window.opener.document.EditView1.product_id.value = product_id;
}


function set_return_inventory(product_id,product_name,unitprice,qtyinstock,curr_row) {
        window.opener.document.EditView.elements["txtProduct"+curr_row].value = product_name;
        window.opener.document.EditView.elements["hdnProductId"+curr_row].value = product_id;
	window.opener.document.EditView.elements["txtListPrice"+curr_row].value = unitprice;
	getOpenerObj("unitPrice"+curr_row).innerHTML = unitprice;
	getOpenerObj("qtyInStock"+curr_row).innerHTML = qtyinstock;
	window.opener.document.EditView.elements["txtQty"+curr_row].focus()
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

