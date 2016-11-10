import moment from 'moment';
import merge from 'lodash/merge';
import sortBy from 'lodash/sortBy';

import {
  CREATE_EXPENSE_DATE_CHANGE,
  CREATE_EXPENSE_TIME_CHANGE,
  INPUT_CHANGE,
  CREATE_EXPENSE_REQUEST,
  CREATE_EXPENSE_REQUEST_ERR,
  CREATE_EXPENSE_REQUEST_SUCC,
  GET_EXPENSES_REQUEST_ERR,
  GET_EXPENSES_REQUEST_SUCC,
  CLOSE_MODAL
} from 'constants/actionTypes';

/**
 * @typedef {object} CreateExpenseState
 * @property {MomentDate} date
 * @property {MomentDate} time
 * @property {string} description
 * @property {number} amount
 * @property {string} comment
 */

/**
 * @typedef {object} ModalState
 * @property {boolean} isOpen
 * @property {?string} msg
 */

/**
 * @typedef {object} Expense
 * @property {ObjectId} id
 * @property {Date|MomentDate|string} date
 * @property {string} description
 * @property {number} amount
 * @property {string|undefined} comment
 */

/**
 * @typedef {object.<ObjectId, Expense>} ExpensesById
 */

/**
 * @typedef {object} ExpensesState
 * @property {CreateExpenseState} create
 * @property {boolean} isFetching
 * @property {ModalState} modal
 * @property {ObjectId} expenseIds
 * @property {ExpensesById} expensesById
 */

/**
 * @type {ExpensesState}
 */
const initialState = {
  create: {
    date: moment(),
    time: moment().hours(0).minutes(0),
    description: '',
    amount: '',
    comment: '',
  },
  isFetching: false,
  modal: {
    isOpen: false,
    msg: null,
  },
  expenseIds: [],
  expensesById: {},
};

function expenses(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return merge({}, state, {
        modal: { isOpen: false, msg: null },
      });

    case CREATE_EXPENSE_DATE_CHANGE:
      return merge({}, state, {
        create: { date: action.date },
      });

    case CREATE_EXPENSE_TIME_CHANGE:
      return merge({}, state, {
        create: { time: action.date },
      });

    case INPUT_CHANGE:
      return merge({}, state, {
        create: { [action.id]: action.value },
      });

    case CREATE_EXPENSE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case CREATE_EXPENSE_REQUEST_ERR:
    case GET_EXPENSES_REQUEST_ERR:
      return merge({}, state, {
        isFetching: false,
        modal: { isOpen: true, msg: action.msg },
      });

    case CREATE_EXPENSE_REQUEST_SUCC:
      {
        const unsortedIds = state.expenseIds.slice();
        const expensesById = Object.assign({}, state.expensesById);

        addExpense(action.expense, unsortedIds, expensesById);

        // sort by descending date
        const expenseIds = sortBy(unsortedIds, id => expensesById[id].date)
          .reverse();

        return merge({}, state, {
          create: initialState.create,
          isFetching: false,
          modal: { isOpen: true, msg: action.msg },
          expenseIds,
          expensesById,
        });
      }

    case GET_EXPENSES_REQUEST_SUCC:
      {
        const expenseIds = [];
        const expensesById = {};

        action.expenses.forEach(el => addExpense(el, expenseIds, expensesById));

        // @todo see what happens with the merge when the array is not empty
        // expensesById merges right, but the expenseIds replaces the values on the given positions
        return merge({}, state, { expenseIds, expensesById });
      }

    default:
      return state;
  }
}

/**
 *
 * @param {Expense} obj
 * @param {ObjectId[]} expenseIds
 * @param {ExpensesById} expensesById
 */
function addExpense(obj, expenseIds, expensesById) {
  const expense = Object.assign({}, obj);
  const { id } = expense;

  delete expense.id;

  expenseIds.push(id);
  expensesById[id] = expense;
}

export { initialState };
export default expenses;
