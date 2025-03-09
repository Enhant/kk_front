import Landing from '../components/Landing';


export default function Home() {
  return (
    <>
      <Landing/>
      <a href="//freekassa.ru/" style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
      }}><img src="//www.free-kassa.ru/img/fk_btn/22.png" title="Приём оплаты на сайте картами"/></a>
    </>
  );
};
