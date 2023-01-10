export class EmptyUserValueError extends Error {
  constructor(message?: string) {
    super(message || 'Empty User Value');
    this.name = 'EmptyUserValueError';
  }
}
