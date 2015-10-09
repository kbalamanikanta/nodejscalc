define(["css!/table.css"], function(){
    var div = "<div></div>";
    var tableClass  = function(){
    	var own = this;
		own.rows = [];
		own._view = $(div);
		own._view.attr("class","table");
		tableClass.prototype.append = function(c)    {
            $("table").append(c._view)
        }
		own.addRow = function(){
			var row = {};
			row._view = $(div);
			row._view.attr("class","row");
			own.rows.push(row);
			row.cells = [];
			$(own._view).append(row._view);
		}
		own.addCell = function(row_index){
			var cell = {};
			cell._view = $(div);
			cell._view.attr("class","cell");
			cell._view.html("&nbsp");
			own.rows[row_index].cells.push(cell);
			own.rows[row_index]._view.append(cell._view);
		}
		own.addCellContent = function(row_index,cell_index,c){
			own.rows[row_index].cells[cell_index]._view.append(c._view);
		}
	}
	return tableClass;
});