import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './componenets/dashboard/dashboard.component';
import {FormLayoutComponent} from './generic-components/formlayout/formlayout.component';
import {PanelsComponent} from './generic-components/panels/panels.component';
import {OverlaysComponent} from './generic-components/overlays/overlays.component';
import {MediaComponent} from './generic-components/media/media.component';
import {MessagesComponent} from './generic-components/messages/messages.component';
import {MiscComponent} from './generic-components/misc/misc.component';
import {EmptyComponent} from './generic-components/empty/empty.component';
import {ChartsComponent} from './generic-components/charts/charts.component';
import {FileComponent} from './generic-components/file/file.component';
import {DocumentationComponent} from './generic-components/documentation/documentation.component';
import {AppMainComponent} from './componenets/main/app.main.component';
import {InputComponent} from './generic-components/input/input.component';
import {ButtonComponent} from './generic-components/button/button.component';
import {TableComponent} from './generic-components/table/table.component';
import {ListComponent} from './generic-components/list/list.component';
import {TreeComponent} from './generic-components/tree/tree.component';
import {CrudComponent} from './generic-components/crud/crud.component';
import {BlocksComponent} from './generic-components/blocks/blocks.component';
import {FloatLabelComponent} from './generic-components/floatlabel/floatlabel.component';
import {InvalidStateComponent} from './generic-components/invalidstate/invalidstate.component';
import {TimelineComponent} from './generic-components/timeline/timeline.component';
import {IconsComponent} from './generic-components/icons/icons.component';
import {LandingComponent} from './generic-components/landing/landing.component';
import {LoginComponent} from './generic-components/login/login.component';
import {ErrorComponent} from './generic-components/error/error.component';
import {NotfoundComponent} from './generic-components/notfound/notfound.component';
import {AccessComponent} from './generic-components/access/access.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppMainComponent,
        children: [
          {path: '', component: DashboardComponent},
        ],
      },
      {path: 'pages/landing', component: LandingComponent},
      {path: 'pages/login', component: LoginComponent},
      {path: 'pages/error', component: ErrorComponent},
      {path: 'pages/notfound', component: NotfoundComponent},
      {path: 'pages/access', component: AccessComponent},
      {path: '**', redirectTo: 'pages/notfound'},
    ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
