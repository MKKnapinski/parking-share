import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {StyleClassModule} from 'primeng/styleclass';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeSelectModule} from 'primeng/treeselect';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {BlockViewer} from './generic-components/blockviewer/blockviewer.component';

import {AppCodeModule} from './generic-components/app-code/app.code.component';
import {AppComponent} from './app.component';
import {AppMainComponent} from './componenets/main/app.main.component';
import {AppTopBarComponent} from './componenets/topbar/app.topbar.component';
import {AppFooterComponent} from './componenets/footer/app.footer.component';
import {AppConfigComponent} from './componenets/config/app.config.component';
import {AppMenuComponent} from './componenets/menu/app.menu.component';
import {AppMenuitemComponent} from './componenets/menu/menu-item/app.menuitem.component';

import {DashboardComponent} from './componenets/dashboard/dashboard.component';
import {FormLayoutComponent} from './generic-components/formlayout/formlayout.component';
import {FloatLabelComponent} from './generic-components/floatlabel/floatlabel.component';
import {InvalidStateComponent} from './generic-components/invalidstate/invalidstate.component';
import {InputComponent} from './generic-components/input/input.component';
import {ButtonComponent} from './generic-components/button/button.component';
import {TableComponent} from './generic-components/table/table.component';
import {ListComponent} from './generic-components/list/list.component';
import {TreeComponent} from './generic-components/tree/tree.component';
import {PanelsComponent} from './generic-components/panels/panels.component';
import {OverlaysComponent} from './generic-components/overlays/overlays.component';
import {MediaComponent} from './generic-components/media/media.component';
import {MenusComponent} from './generic-components/menus/menus.component';
import {MessagesComponent} from './generic-components/messages/messages.component';
import {MiscComponent} from './generic-components/misc/misc.component';
import {EmptyComponent} from './generic-components/empty/empty.component';
import {ChartsComponent} from './generic-components/charts/charts.component';
import {FileComponent} from './generic-components/file/file.component';
import {DocumentationComponent} from './generic-components/documentation/documentation.component';
import {CrudComponent} from './generic-components/crud/crud.component';
import {TimelineComponent} from './generic-components/timeline/timeline.component';
import {IconsComponent} from './generic-components/icons/icons.component';
import {BlocksComponent} from './generic-components/blocks/blocks.component';
import {PaymentComponent} from './generic-components/menus/payment.component';
import {ConfirmationComponent} from './generic-components/menus/confirmation.component';
import {PersonalComponent} from './generic-components/menus/personal.component';
import {SeatComponent} from './generic-components/menus/seat.component';
import {LandingComponent} from './generic-components/landing/landing.component';

import {CountryService} from './service/countryservice';
import {CustomerService} from './service/customerservice';
import {EventService} from './service/eventservice';
import {IconService} from './service/iconservice';
import {NodeService} from './service/nodeservice';
import {PhotoService} from './service/photoservice';
import {ProductService} from './service/productservice';
import {MenuService} from './service/app.menu.service';
import {ConfigService} from './service/app.config.service';
import {LoginComponent} from './generic-components/login/login.component';
import {ErrorComponent} from './generic-components/error/error.component';
import {NotfoundComponent} from './generic-components/notfound/notfound.component';
import {AccessComponent} from './generic-components/access/access.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {EffectsModule} from '@ngrx/effects';
import {AuthService} from './auth/auth.service';
import {StoreModule} from '@ngrx/store';
import {AuthModule} from './auth/auth.module';
import {AuthGuard} from './auth/auth.guard';
import {initializer} from './auth/keycloak/keycloak.initializer';
import {environment} from '../environments/environment';
import {reducers} from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ChipModule,
    CodeHighlighterModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ColorPickerModule,
    ContextMenuModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    ImageModule,
    InplaceModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KnobModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OrderListModule,
    OrganizationChartModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    ScrollPanelModule,
    ScrollTopModule,
    SelectButtonModule,
    SidebarModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SplitButtonModule,
    SplitterModule,
    StepsModule,
    TagModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    VirtualScrollerModule,
    AppCodeModule,
    StyleClassModule,

    EffectsModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    AuthModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppConfigComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    DashboardComponent,
    FormLayoutComponent,
    FloatLabelComponent,
    InvalidStateComponent,
    InputComponent,
    ButtonComponent,
    TableComponent,
    ListComponent,
    TreeComponent,
    PanelsComponent,
    OverlaysComponent,
    MenusComponent,
    MessagesComponent,
    MessagesComponent,
    MiscComponent,
    ChartsComponent,
    EmptyComponent,
    FileComponent,
    IconsComponent,
    DocumentationComponent,
    CrudComponent,
    TimelineComponent,
    BlocksComponent,
    BlockViewer,
    MediaComponent,
    PaymentComponent,
    ConfirmationComponent,
    PersonalComponent,
    SeatComponent,
    LandingComponent,
    LoginComponent,
    ErrorComponent,
    NotfoundComponent,
    AccessComponent,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, MenuService, ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
