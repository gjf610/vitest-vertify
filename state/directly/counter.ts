export class Counter {
  private count: number;

  constructor() {
    this.count = 0
  }
  increment(): void {
    this.count++;
  }

  getCount() {
    return this.count
  }
}