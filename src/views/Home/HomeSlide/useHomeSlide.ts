import { reactive } from 'vue';

export const useHomeSlide = () => {
  const slideList = reactive([
    {
      id: 1,
      img: require('@img/home/home-slide1.png'),
      title: 'Lending Protocol',
      text: `OSFI's decentralized lending protocol allows users to borrow without the need for traditional financial institutions. Borrowers can use digital assets such as Bitcoin as collateral to obtain loans, while lenders have the opportunity to earn attractive returns.`,
    },
    {
      id: 2,
      img: require('@img/home/home-slide2.png'),
      title: 'Liquidity Protocol',
      text: `OSFI's decentralized liquidity protocol enables users to provide and borrow digital assets, participate in liquidity mining, and engage in other financial activities. Users can maximize the utilization of their assets through the liquidity protocol.`,
    },
    {
      id: 3,
      img: require('@img/home/home-slide3.png'),
      title: 'Prediction Market Protocol',
      text: `OSFI's decentralized prediction market protocol allows users to participate in various prediction markets, including but not limited to event outcomes, market prices, etc. Users can trade assets on the prediction market and make bets on the outcomes of events.`,
    },
    {
      id: 4,
      img: require('@img/home/home-slide4.png'),
      title: 'Decentralized Exchange',
      text: `OSFI's decentralized exchange is a secure and efficient digital asset trading platform that supports various digital assets on the Bitcoin main chain and its second-layer networks. Users can securely trade without the need for trusted intermediaries.`,
    },
    {
      id: 5,
      img: require('@img/home/home-slide5.png'),
      title: 'Financial Governance Protocol',
      text: `OSFI's decentralized financial governance protocol is a crucial tool for community decision-making and governance. Users holding OSFI tokens can participate in platform decisions through the protocol, including proposal voting and parameter adjustments.`,
    },
    /* {
      id: 6,
      img: require('@img/home/home-slide6.png'),
      title: '1111ttttt',
      text: '11111111111',
    }, */
  ]);

  return { slideList };
};
