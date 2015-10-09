require.config({
    paths: {
        "jquery" : '/assets/lib/jquery-2.0.3.min',
        "text":'/assets/lib/text.min',
        "css":'/assets/lib/css.min'
    }
});

require(["jquery","text","css", "/body.js"], function(){        
	window.doc = new bodyClass();	
	require([ "/table.js","/button.js","/textField.js"],function(table,button,field){
		
		var operandOne;
		var operandTwo;
		var operator;

		
		var tbl = new table();
		var txtF = new field();

		var btn0 = new button();
		var btn1 = new button();
		var btn2 = new button();
		var btn3 = new button();
		var btn4 = new button();
		var btn5 = new button();
		var btn6 = new button();
		var btn7 = new button();
		var btn8 = new button();
		var btn9 = new button();
		var btnDot = new button();
		var btnEqual = new button();
		var btnSub = new button();
		var btnDiv = new button();
		var btnSum = new button();
		var btnMult = new button();

		var btnSqrt = new button();
		var btnClear = new button();
		var btnPow = new button();
		var btnBack = new button();
		var btnPor = new button();
		
		btn0.setText(0);
		btn1.setText(1);
		btn2.setText(2);
		btn3.setText(3);
		btn4.setText(4);
		btn5.setText(5);
		btn6.setText(6);
		btn7.setText(7);
		btn8.setText(8);
		btn9.setText(9);

		btnDot.setText(" . ");
		btnSum.setText("+");
		btnSub.setText("-");
		btnDiv.setText("  / ");
		btnMult.setText("  * ");
		btnEqual.setText(" = ");
		btnClear.setText("c");
		btnSqrt.setText("√");
		btnPow.setText("^");
		btnPor.setText("%");




		doc.append(txtF);
		doc.append(tbl);
		tbl.addRow();
		tbl.addRow();
		tbl.addRow();
		tbl.addRow();
		tbl.addRow();

		tbl.addCell(0);
		tbl.addCell(0);
		tbl.addCell(0);
		tbl.addCell(0);

		tbl.addCell(0);

		tbl.addCell(1);
		tbl.addCell(1);
		tbl.addCell(1);
		tbl.addCell(1);	
		tbl.addCell(1);

		tbl.addCell(2);
		tbl.addCell(2);
		tbl.addCell(2);
		tbl.addCell(2);	
		tbl.addCell(2);

		tbl.addCell(3);
		tbl.addCell(3);
		tbl.addCell(3);
		tbl.addCell(3);	
		tbl.addCell(3);	
		

		tbl.addCell(4);	
		tbl.addCell(4);	
		tbl.addCell(4);	
		tbl.addCell(4);	
		
		tbl.addCellContent(0,0,btn7);
		tbl.addCellContent(0,1,btn8);
		tbl.addCellContent(0,2,btn9);
		tbl.addCellContent(0,3,btnDiv);
		tbl.addCellContent(0,4,btnClear);



		tbl.addCellContent(1,0,btn4);
		tbl.addCellContent(1,1,btn5);
		tbl.addCellContent(1,2,btn6);
		tbl.addCellContent(1,3,btnMult);
		tbl.addCellContent(1,4,btnSqrt);
		
		

		tbl.addCellContent(2,0,btn1);
		tbl.addCellContent(2,1,btn2);
		tbl.addCellContent(2,2,btn3);
		tbl.addCellContent(2,3,btnSub);
		tbl.addCellContent(2,4,btnPow);

		tbl.addCellContent(3,0,btnDot);
		tbl.addCellContent(3,1,btn0);
		tbl.addCellContent(3,2,btnEqual);
		tbl.addCellContent(3,3,btnSum);
		tbl.addCellContent(3,4,btnPor);

		$(btn0._view).on("click", function(){
            if(txtF.getText() == 0){
        		txtF.setText(0);
        	}else{
				txtF.setText(txtF.getText() + "0");
			}
        })
        $(btn1._view).on("click", function(){
        	if(txtF.getText() == 0){
        		txtF.setText(1);
        	}else{
				txtF.setText(txtF.getText() + "1");
			}
        })
        $(btn2._view).on("click", function(){
        	if(txtF.getText() == 0){
        		txtF.setText(2);
        	}else{
				txtF.setText(txtF.getText() + "2");
			}
        })
        $(btn3._view).on("click", function()
        	{if(txtF.getText() == 0){
        		txtF.setText(3);
        	}else{
				txtF.setText(txtF.getText() + "3");
			}
        })
        $(btn4._view).on("click", function(){
        	if(txtF.getText() == 0){
        		txtF.setText(4);
        	}else{
				txtF.setText(txtF.getText() + "4");
			}
        })
        $(btn5._view).on("click", function(){
        	if(txtF.getText() == 0){
        		txtF.setText(5);
        	}else{
				txtF.setText(txtF.getText() + "5");
			}
        })
        $(btn6._view).on("click", function(){
        	if(txtF.getText() == 0){
        		txtF.setText(6);
        	}else{
				txtF.setText(txtF.getText() + "6");
			}
        })
        $(btn7._view).on("click", function(){
        	if(txtF.getText() == 0){
        		txtF.setText(7);
        	}else{
				txtF.setText(txtF.getText() + "7");
			}
        })
		$(btn8._view).on("click", function(){
			if(txtF.getText() == 0){
        		txtF.setText(8);
        	}else{
				txtF.setText(txtF.getText() + "8");
			}
        })
        $(btn9._view).on("click", function(){
        	if(txtF.getText() == 0){
        		txtF.setText(9);
        	}else{
				txtF.setText(txtF.getText() + "9");
			}
        })
        $(btnDot._view).on("click", function(){
        	
				txtF.setText(txtF.getText() + ".");
			
        })
        $(btnSum._view).on("click", function(){
        	operandOne = parseFloat( txtF.getText());
            operator = 1;
            txtF.setText("0");
        })
        $(btnSub._view).on("click", function(){
        	operandOne = parseFloat( txtF.getText());
            operator = 2;
            txtF.setText("0");
        })
        $(btnDiv._view).on("click", function(){
        	operandOne = parseFloat( txtF.getText());
            operator = 3;
            txtF.setText("0");
        })
        $(btnMult._view).on("click", function(){
        	operandOne = parseFloat( txtF.getText());
            operator = 4;
            txtF.setText("0");
        })
        $(btnClear._view).on("click", function(){
            txtF.setText("");
        })
        $(btnSqrt._view).on("click", function(){
            result = Math.sqrt(txtF.getText());
            txtF.setText(result);
        })
        $(btnPow._view).on("click", function(){
            result = Math.pow(txtF.getText());
            txtF.setText(result);
        })
        $(btnPor._view).on("click", function(){
            result = Math.sqrt(txtF.getText());
            txtF.setText(result);
        })

		$(btnEqual._view).on("click", function(){
			operandTwo =  parseFloat(txtF.getText());
			switch(operator)
			{
				case 1:
					result = operandOne + operandTwo;
					txtF.setText(result);
					break;
				case 2:
					result = operandOne - operandTwo;
					txtF.setText(result);
					break;
				case 3:
					if(operandTwo == 0){
						alert("Тоог тэгт хувааж болохгүй");
					}
					else{
						result = operandOne / operandTwo;
						txtF.setText(result);
					}
					break;
				case 4:
					result = operandOne * operandTwo;
					txtF.setText(result);
					break;
			}	
        })
	});
});


















