export const UserContainer = 'UserProvider';
export const USER_ACTIONS = {
  AUTH: {
    CALL: `app/${UserContainer}/AUTH`,
    SUCCESS: `app/${UserContainer}/AUTH_SUCCESS`,
    FAIL: `app/${UserContainer}/AUTH_FAIL`,
  },
  CHECK_TOKEN: {
    CALL: `app/${UserContainer}/CHECK_TOKEN`,
  },
  LOGOUT: {
    CALL: `app/${UserContainer}/LOGOUT`,
  },
  ENTER_MONEY: {
    CALL: `app/${UserContainer}/ENTER_MONEY`,
    SUCCESS: `app/${UserContainer}/ENTER_MONEY_SUCCESS`,
    FAIL: `app/${UserContainer}/ENTER_MONEY_FAIL`,
  },
  SPEND_MONEY: {
    CALL: `app/${UserContainer}/SPEND_MONEY`,
    SUCCESS: `app/${UserContainer}/SPEND_MONEY_SUCCESS`,
    FAIL: `app/${UserContainer}/SPEND_MONEY_FAIL`,
  },
  WITHDRAW_MONEY: {
    CALL: `app/${UserContainer}/WITHDRAW_MONEY`,
    SUCCESS: `app/${UserContainer}/WITHDRAW_MONEY_SUCCESS`,
    FAIL: `app/${UserContainer}/WITHDRAW_MONEY_FAIL`,
  },
  REGISTER: {
    CALL: `app/${UserContainer}/REGISTER`,
    SUCCESS: `app/${UserContainer}/REGISTER_SUCCESS`,
    FAIL: `app/${UserContainer}/REGISTER_FAIL`,
  },
  ERROR: {
    CALL: `app/${UserContainer}/ERROR`
  }
};
