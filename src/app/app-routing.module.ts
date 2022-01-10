import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/list/list.component";
import { PostComponent } from "./components/post/post.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'p/:id', component: PostComponent},
    { path: 'explore', component: ListComponent},
    { path: 'create', component: AddPostComponent},
    { path: 'u/:username', component: UserComponent}
];




@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule{

}