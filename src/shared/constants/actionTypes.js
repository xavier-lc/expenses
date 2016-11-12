const REQUEST = '_request';
const ERROR = '_error';
const SUCCESS = '_success';

const INPUT_CHANGE = 'input_change';
const EXPENSE_DATE_CHANGE = 'date_change';
const EXPENSE_TIME_CHANGE = 'time_change';
const FILTER_DATE_CHANGE = 'filter_date_change';
const CLOSE_MODAL = 'close_modal';

const REGISTRATION_REQUEST = 'registration' + REQUEST;
const REGISTRATION_REQUEST_ERR = REGISTRATION_REQUEST + ERROR;
const REGISTRATION_REQUEST_SUCC = REGISTRATION_REQUEST + SUCCESS;

const LOGIN_REQUEST = 'login' + REQUEST;
const LOGIN_REQUEST_ERR = LOGIN_REQUEST + ERROR;
const LOGIN_REQUEST_SUCC = LOGIN_REQUEST + SUCCESS;

const CREATE_EXPENSE_REQUEST = 'create_expense' + REQUEST;
const CREATE_EXPENSE_REQUEST_ERR = CREATE_EXPENSE_REQUEST + ERROR;
const CREATE_EXPENSE_REQUEST_SUCC = CREATE_EXPENSE_REQUEST + SUCCESS;

const GET_EXPENSES_REQUEST = 'get_expenses' + REQUEST;
const GET_EXPENSES_REQUEST_ERR = GET_EXPENSES_REQUEST + ERROR;
const GET_EXPENSES_REQUEST_SUCC = GET_EXPENSES_REQUEST + SUCCESS;

const DELETE_EXPENSE_REQUEST = 'delete_expense' + REQUEST;
const DELETE_EXPENSE_REQUEST_ERR = DELETE_EXPENSE_REQUEST + ERROR;
const DELETE_EXPENSE_REQUEST_SUCC = DELETE_EXPENSE_REQUEST + SUCCESS;

const EDIT_EXPENSE = 'edit_expense';
const CANCEL_EDIT_EXPENSE = 'cancel_' + EDIT_EXPENSE;
const EDIT_EXPENSE_REQUEST = EDIT_EXPENSE + REQUEST;
const EDIT_EXPENSE_REQUEST_ERR = EDIT_EXPENSE_REQUEST + ERROR;
const EDIT_EXPENSE_REQUEST_SUCC = EDIT_EXPENSE_REQUEST + SUCCESS;

export {
  ERROR,
  SUCCESS,
  INPUT_CHANGE,
  EXPENSE_DATE_CHANGE,
  EXPENSE_TIME_CHANGE,
  FILTER_DATE_CHANGE,
  CLOSE_MODAL,
  REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_ERR,
  REGISTRATION_REQUEST_SUCC,
  LOGIN_REQUEST,
  LOGIN_REQUEST_ERR,
  LOGIN_REQUEST_SUCC,
  CREATE_EXPENSE_REQUEST,
  CREATE_EXPENSE_REQUEST_ERR,
  CREATE_EXPENSE_REQUEST_SUCC,
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_REQUEST_ERR,
  GET_EXPENSES_REQUEST_SUCC,
  DELETE_EXPENSE_REQUEST,
  DELETE_EXPENSE_REQUEST_ERR,
  DELETE_EXPENSE_REQUEST_SUCC,
  EDIT_EXPENSE,
  CANCEL_EDIT_EXPENSE,
  EDIT_EXPENSE_REQUEST,
  EDIT_EXPENSE_REQUEST_ERR,
  EDIT_EXPENSE_REQUEST_SUCC
};
