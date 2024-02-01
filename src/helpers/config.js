import { contractFrgxAbi } from './contractsAbi/Frgx';
import { contractMatrixBaseAbi } from './contractsAbi/matrixBase';

export default {
  contractFrgx: process.env.REACT_APP_CONTRACT_FRGX,
  contractMatrixBase: process.env.REACT_APP_CONTRACT_MATRIX_B,
  apiQraph: process.env.REACT_APP_GRAPH_URL,
  apiUrl: process.env.REACT_APP_API_URL,
  allowedChainId: process.env.REACT_APP_ALLOWED_CHAIN_ID,

  stand: process.env.STAND,

  contractFrgxAbi: contractFrgxAbi,
  contractMatrixBaseAbi: contractMatrixBaseAbi,
};
