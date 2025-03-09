import { USER_ACTIONS } from './constants';

export function authorizeAction(email: string, password: string) {
    return {
        type: USER_ACTIONS.AUTH.CALL,
        payload: {
            email,
            password,
        },
    };
}

export function registerAction(email: string, login: string, password: string) {
    return {
        type: USER_ACTIONS.REGISTER.CALL,
        payload: {
            email,
            login,
            password,
        },
    };
}

interface IAuthSuccessPayload {
  accessToken: string, refreshToken: string, email: string, name: string, balance: number
}
export function authorizeSuccessAction(user: IAuthSuccessPayload) {
    return {
        type: USER_ACTIONS.AUTH.SUCCESS,
        payload: {
          user
        },
    };
}

export function errorAction(error: string) {
  return {
    type: USER_ACTIONS.ERROR.CALL,
    payload: {
      error,
    },
  }
}

export function checkTokenAction(token?: string) {
  return {
    type: USER_ACTIONS.CHECK_TOKEN.CALL,
    payload: {
      token,
    }
  };
}

export function enterMoneyAction(price: string) {
  return {
    type: USER_ACTIONS.ENTER_MONEY.CALL,
    payload: {
      price
    }
  }
}

export function enterMoneySuccessAction(price: string) {
  return {
    type: USER_ACTIONS.ENTER_MONEY.SUCCESS,
    payload: {
      price
    }
  }
}

export function spendMoneyAction(price: number) {
  return {
    type: USER_ACTIONS.SPEND_MONEY.CALL,
    payload: {
      price
    }
  }
}

export function withdrawMoneyAction(price: string) {
  return {
    type: USER_ACTIONS.WITHDRAW_MONEY.CALL,
    payload: {
      price
    }
  }
}

export function withdrawMoneySuccessAction(price: string) {
  return {
    type: USER_ACTIONS.WITHDRAW_MONEY.SUCCESS,
    payload: {
      price
    }
  }
}

export function withdrawMoneyFailAction(error: string) {
  return {
    type: USER_ACTIONS.WITHDRAW_MONEY.FAIL,
    payload: {
      error,
    }
  }
}

export function logout() {
  return {
    type: USER_ACTIONS.LOGOUT.CALL,
  };
}
