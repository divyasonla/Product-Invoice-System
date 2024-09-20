// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt
frappe.ui.form.on("Product Invoice", {
	refresh(frm) {

	},
    update_total_amount(frm){
        let total_amount = 0;
       

        for(let i of frm.doc.products_items){
           total_amount += i.product_quantity * i.products_price

        }

        frm.set_value("total_amount",total_amount)

        let discount = (total_amount * 10)/100;
        let payable_amount = total_amount - discount;

        frm.set_value("discount" , discount)
        frm.set_value ("payable_amount",payable_amount);
    }

});

frappe.ui.form.on('Product table', {
	refresh(frm) {
		// your code here
	},
    product_quantity(frm,cdt,cdn){
        frm.trigger("update_total_amount")

    },
    products_items_remove(frm){
        frm.trigger("update_total_amount")
    }

})