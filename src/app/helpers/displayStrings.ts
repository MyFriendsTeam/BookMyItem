export class Buttons {  
  private static button: string = "button.";
  private static save: string = "save";
  private static delete: string = 'delete'
  private static add: string = 'add'
  public static get SaveText(): string {
    return Buttons.button + Buttons.save;
  }
  public static get AddText(): string {
    return Buttons.button + Buttons.add;
  }
  public static get DeleteText(): string {
    return Buttons.button + "delete";
  }
}
