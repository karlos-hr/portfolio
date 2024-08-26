import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './modules/home/home.component';
import { ProjectsComponent } from '@modules/projects/projects.component';
import { NotFoundPageComponent } from '@modules/not-found-page/not-found-page.component';

const routes: Routes = [

  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule)
      },
      // {
      //   path: 'projects',
      //   component: ProjectsComponent,
      //   loadChildren: () => import('@modules/projects/projects.module').then((m) => m.ProjectsModule)
      // }
    ],
    
  },
  { path: '**', pathMatch: 'full',  
    
    component: SkeletonComponent,
    children: [
      {
        path: '',
        component: NotFoundPageComponent 
      }
    ]
    
  }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
