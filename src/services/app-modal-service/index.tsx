import { ModalInterface } from '@interfaces/common-interfaces';

class AppModalPublishSubscriber {
  private modals: Map<string, (data: ModalInterface) => void>;

  constructor() {
    this.modals = new Map();
  }

  publish = (key: string, data: ModalInterface) => {
    const subscriber = this.modals.get(key);

    if (!subscriber) {
      return;
    }

    subscriber(data);
  };

  subscribe = (key: string, callback: (data: ModalInterface) => void) => {
    const modal = this.modals.get(key);

    if (modal) {
      return;
    }
    this.modals.set(key, callback);
  };

  unsubscribe = (key: string) => {
    this.modals.delete(key);
  };
}

export const AppModalService = new AppModalPublishSubscriber();

class AppModal {
  open = (data: ModalInterface) => {
    AppModalService.publish('app-modal', data);
  };

  close = () => {
    AppModalService.publish('app-modal', {
      component: null,
      onClose: () => {},
    });
  };
}

const newAppModal: { open: (data: ModalInterface) => void; close: () => void } = new AppModal();

export default newAppModal;
