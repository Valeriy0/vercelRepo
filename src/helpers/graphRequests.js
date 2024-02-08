import { gql } from '@apollo/client';

export const GRAPH_TYPES = {
  MATRIX_INFO: 'matrixInfoRequest',
  USER_INFO: 'userInfoRequest',
};

export const matrixInfoRequest = (userAddress) => {
  const addressFilter = userAddress.toLowerCase();
  return `{
      user(id: "${addressFilter}") { 
        levels {
          levelNumber
          recyclesTotal
          totalReward
          reward24
          lastRewardDay
          expiredAt
          activationTimes
          matrixs {
            id
            place1 {
              value
              receiver {
                id
              }
              realReceiver {
                id
              }
              user {
                id
              }
              status
            }
            place2 {
              value
              receiver {
                id
              }
              realReceiver {
                id
              }
              user {
                id
              }
              status
            }
            place3 {
              value
              receiver {
                id
              }
              realReceiver {
                id
              }
              user {
                id
              }
              status
            }
            place4 {
              value
              receiver {
                id
              }
              realReceiver {
                id
              }
              user {
                id
              }
              status
            }
            place5 {
              value
              receiver {
                id
              }
              realReceiver {
                id
              }
              user {
                id
              }
              status
            }
            place6 {
              value
              receiver {
                id
              }
              realReceiver {
                id
              }
              user {
                id
              }
              status
            }
          }
        }
      }
    }`;
};

export const CHECK_UPLINE_ADDRESS = gql`
  query userData($user: String!) {
    user(id: $user) {
      id
      refNumber
      levels {
        levelNumber
        recyclesTotal
        totalReward
        reward24
        lastRewardDay
      }
    }
  }
`;

export const CHECK_UPLINE_REFNUMBER = gql`
  query userData($refNumber: String!) {
    user(refNumber: $refNumber) {
      id
      refNumber
    }
  }
`;

export const GET_USER_DATA = gql`
  query userData($user: String!) {
    user(id: $user) {
      id
      referral {
        id
      }
      refNumber
      levels {
        levelNumber
        recyclesTotal
        totalReward
        reward24
        lastRewardDay
      }
    }
  }
`;

export const GET_MATRIX_DATA = gql`
  query matrixData($user: String!) {
    user(id: $user) {
      levels {
        levelNumber
        recyclesTotal
        totalReward
        reward24
        lastRewardDay
        expiredAt
        activationTimes
        matrixs {
          id
          place1 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place2 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place3 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place4 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place5 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
          place6 {
            value
            receiver {
              id
            }
            realReceiver {
              id
            }
            user {
              id
            }
            status
          }
        }
      }
    }
  }
`;
