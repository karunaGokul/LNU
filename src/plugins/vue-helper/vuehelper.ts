import moment from "moment";
import { Validation } from "vuelidate";
import { ValidationEvaluation, ValidationGroups } from "vue/types/vue";

export class VueHelperProvider {
  public date: DateHelper = new DateHelper();
  public val: ValHelper = new ValHelper();

  clone<T>(object: T): T {
    return this._clone(object);
  }

  getImageUrl(blobText: string) {
    return `data:image/png;base64, ${blobText}`;
  }

  private _clone(object: any) {
    let cloned: any = new (<any>object).constructor();

    for (let key in object) {
      try {
        cloned[key] = object[key];

        if (typeof object[key] == "object")
          cloned[key] = this._clone(object[key]);
      } catch (e) {
        //error
      }
    }
    return cloned;
  }
}

class DateHelper {
  format(date: Date, format?: string) {
    if (!format) format = "MM/DD/YYYY";

    if (date) return moment(date).format(format);
    else return "";
  }

  getString(date: Date): any {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}`;
  }
}

class ValHelper {
  messages(evaluation: ValidationEvaluation, label: string) {
    let error = "";

    if (evaluation.$dirty && evaluation.$invalid) {
      if (
        Object.prototype.hasOwnProperty.call(evaluation, "required") &&
        !evaluation.required
      )
        error = `* required`;
      if (
        Object.prototype.hasOwnProperty.call(evaluation, "email") &&
        !evaluation.email
      )
        error = `enter a valid email`;

      if (
        Object.prototype.hasOwnProperty.call(evaluation, "alphaOnly") &&
        !evaluation.alphaOnly
      )
        error = `enter a character`;

      // if (
      //   Object.prototype.hasOwnProperty.call(evaluation, "passwordRule") &&
      //   !evaluation.passwordRule
      // )
      //   error = `Please enter atleast One UpperCaseLetter, One LowerCaseLetter, One Number and One SpecialCharacter`;

      if (
        Object.prototype.hasOwnProperty.call(evaluation, "upperCaseLetter") &&
        !evaluation.upperCaseLetter
      )
        error = `enter atleast one upper case`;

      if (
        Object.prototype.hasOwnProperty.call(evaluation, "lowerCaseLetter") &&
        !evaluation.lowerCaseLetter
      )
        error = `enter atleast one lower case`;

      if (
        Object.prototype.hasOwnProperty.call(evaluation, "number") &&
        !evaluation.number
      )
        error = `enter atleast one number`;

      if (
        Object.prototype.hasOwnProperty.call(evaluation, "special") &&
        !evaluation.special
      )
        error = `enter atleast one special character`;

      if (
        Object.prototype.hasOwnProperty.call(evaluation, "numeric") &&
        !evaluation.numeric
      )
        error = "enter valid number";
      if (
        Object.prototype.hasOwnProperty.call(evaluation, "minLength") &&
        !evaluation.minLength
      ) {
        let params: any = evaluation.$params;
        error = `Minimum ${params.minLength.min} characters`;
      }
      if (
        Object.prototype.hasOwnProperty.call(evaluation, "maxLength") &&
        !evaluation.maxLength
      ) {
        let params: any = evaluation.$params;
        error = `Maximum ${params.maxLength.max} characters`;
      }

      if (
        Object.prototype.hasOwnProperty.call(evaluation, "sameAsPassword") &&
        !evaluation.sameAsPassword
      )
        error = `Password does't match`;
    }

    //console.log(!evaluation!)
    /*                                              
    if (!evaluation!.$dirty || !evaluation!.$invalid) return errors;

    if (!evaluation!.required) errors.push(`Required`);

    //console.log(!evaluation!.sameAsPassword)

    if(!evaluation!.sameAsPassword) errors.push(`Please enter valid password`);

    if(!evaluation!.numeric) errors.push(`Please enter valid number`);

    if (!evaluation!.invalid) errors.push("");

    console.log(errors)*/

    return error;
  }

  public static validatorErrorMessage(
    validatorName: string,
    propertyName: string,
    propertyValue?: any
  ) {
    const config: any = {
      required: `${propertyName} is required`,
      numeric: "Please enter valid number",
      phone: "Please enter valid number",
      minLength: `Minimum ${propertyValue.min} characters`,
      maxLength: `Maximum ${propertyValue.max} characters`,
      cvvMinLength: "Minimum 3 or 4 characters",
      cvvMaxLength: "Maximum 3 or 4 characters",
      phoneLength: `Phone number 10 or 12 charaters`,
      email: "Please enter a valid email address",
      domain: `Please enter your business email. Don't have one?`,
      number: "Please enter one number",
      special: `Please enter one special character: !@#$%&*`,
      letter: "Please enter one letter",
      validateCardNumber: "Please enter a valid credit card number.",
    };

    return config[validatorName];
  }
}
