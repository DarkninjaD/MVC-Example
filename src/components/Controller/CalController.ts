class CalController {
  MODEL: CalModel;
  VIEW: CalView;
  constructor(MODEL: CalModel, VIEW: CalView) {
    this.MODEL = MODEL;
    this.VIEW = VIEW;
  }

  DoMath(FirstInt: number, SecondInt: number): JSX.Element {
    try {
      this.MODEL.AddOp(FirstInt, SecondInt);
      const value: number = this.MODEL.getNum();
      if (isNaN(value)) throw new Error();
      if (value >= 9000) {
        return this.VIEW.OverN(value);
      }
      return this.VIEW.Default(value);
    } catch (e) {
      console.log("Error");
      return this.VIEW.Bad;
    }
  }
}

export default CalController;
