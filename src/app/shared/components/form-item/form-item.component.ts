import { ProductService } from './../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit{

  public form!:FormGroup;
  public isLoaded:boolean = false;
  public starPerc:string = "85.6%";

  public id!:number;
  public product?:any;
  constructor (private formBuilder:FormBuilder, private route:ActivatedRoute, private productService:ProductService){}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=> {
      this.id = Number(params.get('id'));
    })

    if(this.id){
      this.productService.getProduct(this.id).subscribe(res=>{
        this.product = res;
        this.createForm(this.product);
      });
    } else {
      this.isLoaded = true;
    }
    
    
  }

  createForm(product:any){
    this.isLoaded = true;
    this.form = this.formBuilder.group({
      name:[product!.name,[Validators.required]],
      price:[product!.price,[Validators.required]],
      description:[product!.description,[Validators.required]],
      image:[product!.image,[Validators.required]],
      stars:[product!.stars,[Validators.required]]
    })

    this.form.valueChanges.subscribe(changes => {
      this.product = changes;
      
      //To reset stars to default value when no value is writted
      if(this.product.stars){
        this.starPerc = this.product.stars*100/5 + '%'
      } else{
        this.starPerc="85.6%";
      }
    });

    return this.form;
  }

  onSave() {

  }
}
