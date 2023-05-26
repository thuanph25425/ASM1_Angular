import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder } from "@angular/forms";
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.productService.addProduct(product).subscribe(data => console.log(data)
      )
      alert("them thanh cong")
    }
  }
}
