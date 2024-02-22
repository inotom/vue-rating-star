/** @prettier */

export const MAX_RATE = 5;

export class Rate {
  private value: number;
  private visualValue: number;
  private max: number;

  public constructor(value = 0, max = MAX_RATE) {
    if (value < 0) {
      throw Error(`value(${value}) must be a positive number`);
    }

    if (max <= 0) {
      throw Error(`max(${max}) must be a positive number`);
    }

    if (value > max) {
      throw Error(`max(${max}) must be a greater than value(${value})`);
    }

    this.value = value;
    this.visualValue = value;
    this.max = max;
  }

  public set(value: number): Rate {
    if (this.isValidValue(value)) {
      this.value = value;
    }
    return this;
  }

  public get(): number {
    return this.value;
  }

  public setVisualValue(value: void | number): Rate {
    if (typeof value === 'undefined') {
      this.visualValue = this.value;
    } else if (this.isValidValue(value)) {
      this.visualValue = value;
    }
    return this;
  }

  public getVisualValue(): number {
    return this.visualValue;
  }

  public increment(): Rate {
    if (this.value < this.max) {
      this.value = Math.floor(this.value) + 1;
    }
    this.setVisualValue(void 0);
    return this;
  }

  public decrement(): Rate {
    const i = Math.floor(this.value);
    this.value = i > 0 ? i - 1 : 0;
    this.setVisualValue(void 0);
    return this;
  }

  private isValidValue(value: number): boolean {
    return value >= 0 && value <= this.max;
  }

  public static createNew(value = 0, max = MAX_RATE): Rate {
    return new Rate(value, max);
  }
}
