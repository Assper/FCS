export class StorageService {
  constructor() {
    this.refresh = "dshf98a8f";
    this.confirmationTimeout = null;
  }

  _setConfirmationTimeout() {
    if (this.confirmationTimeout !== null) {
      clearTimeout(this.confirmationTimeout);
    }

    this.confirmationTimeout = setTimeout(() => {
      this.clearConfirmation();
    }, 30000);
  }

  setRefresh(value) {
    localStorage.setItem(this.refresh, value);
  }

  clearRefresh() {
    localStorage.removeItem(this.refresh);
  }

  setConfirmation(confirmationResult) {
    window.confirmationResult = confirmationResult;
    this._setConfirmationTimeout();
  }

  clearConfirmation() {
    delete window.confirmationResult;
    clearTimeout(this.confirmationTimeout);
    this.confirmationTimeout = null;
  }

  getConfirmation() {
    return window.confirmationResult;
  }
}
