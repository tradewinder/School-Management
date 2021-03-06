﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'groups';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		var
		dg = $$(getHtmlId('dataGrid1'));
		
		insertColPicker(dg , true , {
			colPOptions: {
				attrName  : 'color'
			}
		});
		
		dg.source.all();
	// @region namespaceDeclaration// @startlock
	var studyGroupEvent = {};	// @dataSource
	var container1 = {};	// @container
	// @endregion// @endlock

	// eventHandlers// @lock

	studyGroupEvent.onCollectionChange = function studyGroupEvent_onCollectionChange (event)// @startlock
	{// @endlock
		window[getHtmlId('nbGroups')] = this.length + ' group' + (this.length > 1 ? 's' : '');
		sources[getHtmlId('nbGroups')].sync();
	};// @lock

	container1.click = function container1_click (event)// @startlock
	{// @endlock
		var src = dg.source;
		if(src){
			src.addNewElement();
			dg.editCell(src.length - 1 , 0);
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_studyGroup", "onCollectionChange", studyGroupEvent.onCollectionChange, "WAF");
	WAF.addListener(this.id + "_container1", "click", container1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
