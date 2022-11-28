class FigureCalculator {
  /**
     * @typedef {import('./MathBasic')} MathBasic
     * @param {MathBasic} mathBasic
     */
  constructor(mathBasic) {
    this.mathBasic = mathBasic;

    this.validateArgs = this.validateArgs.bind(this);
  }

  static validateArgs(expectedArgsCount, ...args) {
    if (args.length !== expectedArgsCount) {
      throw new Error(`fungsi hanya menerima ${expectedArgsCount} parameter`);
    }

    if (args.some((arg) => typeof arg !== 'number')) {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this.validateArgs(2, ...args);

    return this.mathBasic.multiply(2, this.mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this.validateArgs(2, ...args);

    return this.mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, base] = this.validateArgs(3, ...args);

    return this.mathBasic.add(this.mathBasic.add(sideA, sideB), base);
  }

  calculateTriangleArea(...args) {
    const [base, height] = this.validateArgs(2, ...args);

    return this.mathBasic.divide(this.mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
