import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private messageService: MessageService) {}

  showInfoSticky(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Informação', detail: message, sticky: true });
  }

  showSuccess(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: message, life: 5000 });
  }

  showInfo(message: string) {
    this.messageService.add({ severity: 'info', summary: 'Informação', detail: message, life: 5000 });
  }

  showWarn(message: string) {
    this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: message, life: 5000 });
  }

  showError(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: message, life: 5000 });
  }

  showErrorHttp(statusCode: string, message: string) {
    this.messageService.add({ severity: 'error', summary: `Erro ${statusCode}`, detail: message, life: 5000 });
  }
}
