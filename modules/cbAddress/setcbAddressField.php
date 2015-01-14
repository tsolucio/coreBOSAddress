<?php
/*************************************************************************************************
 * Copyright 2015 JPL TSolucio, S.L. -- This file is a part of TSOLUCIO coreBOS Customizations.
 * Licensed under the vtiger CRM Public License Version 1.1 (the "License"); you may not use this
 * file except in compliance with the License. You can redistribute it and/or modify it
 * under the terms of the License. JPL TSolucio, S.L. reserves all rights not expressly
 * granted by the License. coreBOS distributed by JPL TSolucio S.L. is distributed in
 * the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. Unless required by
 * applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing
 * permissions and limitations under the License. You may obtain a copy of the License
 * at <http://corebos.org/documentation/doku.php?id=en:devel:vpl11>
 *************************************************************************************************
 *  Module       : cbAddress Set Helper Link Field on Inventory modules
 *  Version      : 1.0
 *  Author       : JPL TSolucio, S. L.
 *************************************************************************************************/
class cbAddressSetLinkFields extends VTEventHandler {
	private $_moduleCache = array();

	/**
	 * @param $handlerType
	 * @param $entityData VTEntityData
	 */
	public function handleEvent($handlerType, $entityData) {
	}

	public function handleFilter($handlerType, $focus) {
		global $adb,$log,$currentModule;
		if ($handlerType=='corebos.filter.editview.setObjectValues' and
			in_array($currentModule, array('Quotes','SalesOrder','Invoice','PurchaseOrder')) and
			((isset ($_REQUEST['account_id']) and $_REQUEST['account_id'] != '') or
			 (isset ($_REQUEST['contact_id']) && $_REQUEST['contact_id'] != '')) and
			($_REQUEST['record'] == '' || $_REQUEST['convertmode'] == "potentoinvoice") and
			$_REQUEST['convertmode'] != 'update_so_val' and
			$_REQUEST['convertmode'] != 'update_quote_val'
		) {
			if (isset($_REQUEST['account_id'])) {
				$sql = 'select linktoaddressbilling,linktoaddressshipping from vtiger_account where accountid=?';
				$crmid = vtlib_purify($_REQUEST['account_id']);
			} else {
				$sql = 'select linktoaddressbilling,linktoaddressshipping from vtiger_contactdetails where contactid=?';
				$crmid = vtlib_purify($_REQUEST['contact_id']);
			}
			$ab = $adb->query_result($adb->pquery($sql,$crmid),0,'linktoaddressbilling');
			$as = $adb->query_result($adb->pquery($sql,$crmid),0,'linktoaddressshipping');
			$focus->column_fields['linktoaddressbilling'] = $ab;
			$focus->column_fields['linktoaddressshipping'] = $as;
		}
		return $focus;
	}
}
