import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import {AnimateModule} from 'primeng/animate';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from "primeng/paginator";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

@NgModule({
  imports: [
    AccordionModule,
    AutoCompleteModule,
    AnimateModule,
    AvatarModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    PaginatorModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    SplitButtonModule,
    StepsModule,
    TabViewModule,
    TableModule,
    ToastModule,
    VirtualScrollerModule
  ],
  exports: [
    AnimateModule,
    AccordionModule,
    AutoCompleteModule,
    AvatarModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    KeyFilterModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    PaginatorModule,
    RadioButtonModule,
    SplitButtonModule,
    StepsModule,
    TabViewModule,
    TableModule,
    ToastModule,
    VirtualScrollerModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class PrimeNgModule {
}
