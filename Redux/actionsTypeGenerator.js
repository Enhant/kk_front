
export const actionCreator = (name, containerName) => ({
    [name]: {
      CALL: `app/${containerName}/${name}`,
      SUCCESS: `app/${containerName}/${name}_SUCCESS`,
      FAIL: `app/${containerName}/${name}_FAIL`,
    },
  });

export default function actionsTypeGenerator(additionalActionsType = [], containerName) {
    const res = {};
    additionalActionsType.forEach(item => {
      Object.assign(res, actionCreator(item, containerName));
    });
    return res;
}