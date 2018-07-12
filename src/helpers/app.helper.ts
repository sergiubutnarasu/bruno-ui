export class AppHelper {
  public static GetId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, result => {
      let random = (Math.random() * 16) | 0,
        value = result == "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }

  public static GetIdWithPrefix(prefix: string) {
    return `${prefix}--${AppHelper.GetId()}`;
  }
}
