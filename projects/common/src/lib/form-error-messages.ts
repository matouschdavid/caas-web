export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}
//inputs are name, email, creditCardNumber, creditCardExpiry, creditCardCvv
export const SignUpFormErrorMessages = [
  new ErrorMessage('name', 'required', 'Name is required'),
  new ErrorMessage(
    'name',
    'minlength',
    'Name must be at least 2 characters long'
  ),
  new ErrorMessage(
    'name',
    'maxlength',
    'Name cannot be more than 50 characters long'
  ),
  new ErrorMessage('email', 'required', 'Email is required'),
  new ErrorMessage('email', 'email', 'Email is not valid'),
  new ErrorMessage(
    'email',
    'maxlength',
    'Email cannot be more than 50 characters long'
  ),
  new ErrorMessage('cardNumber', 'required', 'Credit card number is required'),
  new ErrorMessage('cardNumber', 'pattern', 'Credit card number is not valid'),
  new ErrorMessage(
    'cardExpiration',
    'required',
    'Credit card expiry is required'
  ),
  new ErrorMessage(
    'cardExpiration',
    'pattern',
    'Credit card expiry is not valid'
  ),
  new ErrorMessage('cardCVC', 'required', 'Credit card cvc is required'),
  new ErrorMessage('cardCVC', 'min', 'Credit card cvc is not valid'),
  new ErrorMessage('cardCVC', 'max', 'Credit card cvc is not valid'),
];
