import { NgModule } from "@angular/core";
import { HttpClientModule }  from '@angular/common/http';
import { RestService } from "./rest.service";
import { ProductRepositoryService } from "./repository-service/productRepo.service";
import { CategoryRepositoryService } from "./repository-service/categoryRepo.service";
import { CartService } from "./cart.service";
import { OrderService } from "./order.service";
import { OrderRepositoryService } from "./repository-service/orderRepo.service";
import { AlertifyService } from "./alertify.service";
import { ContactService } from "./contact.service";
import { ContactRepoService } from "./repository-service/contact-repo.service";
import { ServicesRepositoryService } from "./repository-service/servicesRepo.service";
import { CommentService } from "./comment.service";
import { CommentRepoService } from "./repository-service/commentRepo.service";
import { AuthorizationService } from "./authentication.service";
import { AuthorizationRepoService } from "./repository-service/authorizationRepo.service";
//import { ContactRepoService } from "./repository-service/contact-repo.service";
//import { ContactService } from "./contact.service";

@NgModule({
  imports:[HttpClientModule],
  providers:[RestService, ProductRepositoryService, CategoryRepositoryService,CartService,AlertifyService,OrderService,OrderRepositoryService,ContactService,ContactRepoService,ServicesRepositoryService,CommentService,CommentRepoService,AuthorizationService,AuthorizationRepoService]
})
export class ServiceModule{
/* ,ContactRepoService,ContactService  */
}
