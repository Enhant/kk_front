import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Classic from 'components/Games/Classic';

import useInjectReducer from 'Redux/useInjectReducer';
import useInjectSaga from 'Redux/useInjectSaga';
import reducer from './reducer';
import saga from './saga';

import { IStore, IClassic, TGameModes } from 'types';

import Loader from 'components/Loader';

import { getWinnerAction, betAction } from './actions';

function ClassicPage() {
  useInjectReducer('classic', reducer);
  useInjectSaga('classic', saga);

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(getWinnerAction())
  }, []);

  const makeBet = (gameType: TGameModes) => () => dispatch(betAction(gameType))

  const data = useSelector<IStore, IClassic>(state => state.classic);

  if (data?.isLoading || data === undefined) return <Loader/>

  return (
    <Classic
      data={data}
      makeBet={makeBet}
    />
  )
}

export default ClassicPage;
