# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ProductInvoice(Document):
    # pass
    def validate(self):
        total_amount = 0
        for item in self.products_items:
            total_amount += item.products_price * item.product_quantity
            
        self.total_amount = total_amount

        # Ensure correct indentation for discount and payable amount calculation
        discount_percentage = 10
        discount_amount = (self.total_amount * discount_percentage) / 100

        self.payable_amount = self.total_amount - discount_amount
        self.discount = discount_amount

