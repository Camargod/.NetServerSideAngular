import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@auth0/auth0-angular";
import { CategoryPageComponent } from "./pages/category-page/category-page.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { UserComponent } from "./pages/user/user.component";

const routes : Routes = [
    { path: '', component: HomeComponent },
    { path:'login',component: LoginComponent},
    { path:'category/:categoryName', component: CategoryPageComponent},
    { path:'profile', component: UserComponent},
    { path:'favorites', component: FavoritesComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports:[RouterModule]
})
export class AppRoutingModule {}