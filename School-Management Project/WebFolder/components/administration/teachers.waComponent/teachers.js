﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'teachers';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		var
		dataSource 	= sources.adminTeacher,
		courseDS	= sources[getHtmlId('course')];
		
		getHtmlObj('container1').smSearch({
			datasource: dataSource
		});
		
		courseDS.all({
			onSuccess: function(e){
				e.dataSource.select(-1);
			}
		})
	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var combobox1 = {};	// @combobox
	var image3 = {};	// @image
	var container2 = {};	// @container
	var container4 = {};	// @container
	var image2 = {};	// @image
	var matrix1 = {};	// @matrix
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		courseDS.select(-1);
		dataSource.all();
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		if(!this.source.getCurrentElement()){
			return false;
		}
		else if(!this._inited){
			this._inited = true;
			return false;
		}
		
		dataSource.query('speciality.ID = ' + this.getValue());
	};// @lock

	image3.click = function image3_click (event)// @startlock
	{// @endlock
		location.href = 'mailto:' + dataSource.email;
	};// @lock

	container2.click = function container2_click (event)// @startlock
	{// @endlock
		dataSource.addNewElement();
		_ns.adminView.openDialog('teacherDetails')
	};// @lock

	container4.dblclick = function container4_dblclick (event)// @startlock
	{// @endlock
		_ns.adminView.openDialog('teacherDetails');
		return false;
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		var msg = 'Do you want to delete this teacher ?';
		
		if(dhtmlx.confirm){
			dhtmlx.confirm({
				type:"confirm-warning",
				text: msg,
				callback: function(resp) {
					if(resp){
						dataSource.removeCurrent();
					}
				}
			})
		}
		else if(confirm(msg)){
			dataSource.removeCurrent();
		}
	};// @lock

	matrix1.onChildrenDraw = function matrix1_onChildrenDraw (event)// @startlock
	{// @endlock
		switch(true){
			case dataSource.speciality instanceof WAF.DataSourceEmRelatedAttributeValue:
				var that = this;
				dataSource.speciality.load({
					onSuccess: function(e){
						if(e.entity){
							$(that).find('.color').css({
								'background-color' : e.entity.color.getValue()
							});
						}
					}
				});
				break;
			case dataSource.speciality instanceof WAF.Entity:
				this.find('.color').css({
					'background-color' : dataSource.speciality.color.getValue()
				});
				break;
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	WAF.addListener(this.id + "_combobox1", "change", combobox1.change, "WAF");
	WAF.addListener(this.id + "_image3", "click", image3.click, "WAF");
	WAF.addListener(this.id + "_container2", "click", container2.click, "WAF");
	WAF.addListener(this.id + "_container4", "dblclick", container4.dblclick, "WAF");
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	WAF.addListener(this.id + "_matrix1", "onChildrenDraw", matrix1.onChildrenDraw, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
