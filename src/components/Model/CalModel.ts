class CalModel {
  total: number;
  constructor() {
    this.total = 0;
  }

  AddOp(FirstInt: number, SecondInt: number): void {
    this.total = FirstInt + SecondInt;
  }

  getNum() {
    return this.total;
  }
}

export default CalModel;
