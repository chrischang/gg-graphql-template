import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
};

export type Bet = {
  __typename?: 'Bet';
  amount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  raceId: Scalars['BigInt']['output'];
  racer: Scalars['String']['output'];
  txHash: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type BetFilter = {
  AND?: InputMaybe<Array<InputMaybe<BetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BetFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  raceId?: InputMaybe<Scalars['BigInt']['input']>;
  raceId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  raceId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  raceId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  raceId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  raceId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  raceId_not?: InputMaybe<Scalars['BigInt']['input']>;
  raceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  racer?: InputMaybe<Scalars['String']['input']>;
  racer_gt?: InputMaybe<Scalars['String']['input']>;
  racer_gte?: InputMaybe<Scalars['String']['input']>;
  racer_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  racer_lt?: InputMaybe<Scalars['String']['input']>;
  racer_lte?: InputMaybe<Scalars['String']['input']>;
  racer_not?: InputMaybe<Scalars['String']['input']>;
  racer_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userId_gt?: InputMaybe<Scalars['String']['input']>;
  userId_gte?: InputMaybe<Scalars['String']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId_lt?: InputMaybe<Scalars['String']['input']>;
  userId_lte?: InputMaybe<Scalars['String']['input']>;
  userId_not?: InputMaybe<Scalars['String']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BetPage = {
  __typename?: 'BetPage';
  items: Array<Bet>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  bet?: Maybe<Bet>;
  bets: BetPage;
  race?: Maybe<Race>;
  races: RacePage;
  user?: Maybe<User>;
  users: UserPage;
};


export type QueryBetArgs = {
  id: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetFilter>;
};


export type QueryRaceArgs = {
  id: Scalars['BigInt']['input'];
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RaceFilter>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFilter>;
};

export type Race = {
  __typename?: 'Race';
  bets?: Maybe<BetPage>;
  id: Scalars['BigInt']['output'];
  racePool: Scalars['BigInt']['output'];
  startedTx: Scalars['String']['output'];
  winner: Scalars['String']['output'];
  winnerTx: Scalars['String']['output'];
};


export type RaceBetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<RaceFilter>;
};

export type RaceFilter = {
  AND?: InputMaybe<Array<InputMaybe<RaceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RaceFilter>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  racePool?: InputMaybe<Scalars['BigInt']['input']>;
  racePool_gt?: InputMaybe<Scalars['BigInt']['input']>;
  racePool_gte?: InputMaybe<Scalars['BigInt']['input']>;
  racePool_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  racePool_lt?: InputMaybe<Scalars['BigInt']['input']>;
  racePool_lte?: InputMaybe<Scalars['BigInt']['input']>;
  racePool_not?: InputMaybe<Scalars['BigInt']['input']>;
  racePool_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  startedTx?: InputMaybe<Scalars['String']['input']>;
  startedTx_gt?: InputMaybe<Scalars['String']['input']>;
  startedTx_gte?: InputMaybe<Scalars['String']['input']>;
  startedTx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startedTx_lt?: InputMaybe<Scalars['String']['input']>;
  startedTx_lte?: InputMaybe<Scalars['String']['input']>;
  startedTx_not?: InputMaybe<Scalars['String']['input']>;
  startedTx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  winner?: InputMaybe<Scalars['String']['input']>;
  winnerTx?: InputMaybe<Scalars['String']['input']>;
  winnerTx_gt?: InputMaybe<Scalars['String']['input']>;
  winnerTx_gte?: InputMaybe<Scalars['String']['input']>;
  winnerTx_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  winnerTx_lt?: InputMaybe<Scalars['String']['input']>;
  winnerTx_lte?: InputMaybe<Scalars['String']['input']>;
  winnerTx_not?: InputMaybe<Scalars['String']['input']>;
  winnerTx_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  winner_gt?: InputMaybe<Scalars['String']['input']>;
  winner_gte?: InputMaybe<Scalars['String']['input']>;
  winner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  winner_lt?: InputMaybe<Scalars['String']['input']>;
  winner_lte?: InputMaybe<Scalars['String']['input']>;
  winner_not?: InputMaybe<Scalars['String']['input']>;
  winner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RacePage = {
  __typename?: 'RacePage';
  items: Array<Race>;
  pageInfo: PageInfo;
};

export type User = {
  __typename?: 'User';
  bets?: Maybe<BetPage>;
  id: Scalars['String']['output'];
  totalBetAmount: Scalars['BigInt']['output'];
  winningAmount: Scalars['BigInt']['output'];
};


export type UserBetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UserFilter>;
};

export type UserFilter = {
  AND?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  totalBetAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalBetAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBetAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBetAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalBetAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBetAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBetAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBetAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  winningAmount?: InputMaybe<Scalars['BigInt']['input']>;
  winningAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  winningAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  winningAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  winningAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  winningAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  winningAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  winningAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type UserPage = {
  __typename?: 'UserPage';
  items: Array<User>;
  pageInfo: PageInfo;
};

export type GetAllRacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRacesQuery = { __typename?: 'Query', races: { __typename?: 'RacePage', items: Array<{ __typename?: 'Race', id: any, winner: string, bets?: { __typename?: 'BetPage', items: Array<{ __typename?: 'Bet', id: string, racer: string, raceId: any, userId: string, amount: any, txHash: string }> } | null }> } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserPage', items: Array<{ __typename?: 'User', id: string, totalBetAmount: any, winningAmount: any }> } };


export const GetAllRacesDocument = gql`
    query GetAllRaces {
  races(orderBy: "id", orderDirection: "desc", limit: 20) {
    items {
      id
      winner
      bets {
        items {
          id
          racer
          raceId
          userId
          amount
          txHash
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllRacesQuery__
 *
 * To run a query within a React component, call `useGetAllRacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRacesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllRacesQuery, GetAllRacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRacesQuery, GetAllRacesQueryVariables>(GetAllRacesDocument, options);
      }
export function useGetAllRacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRacesQuery, GetAllRacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRacesQuery, GetAllRacesQueryVariables>(GetAllRacesDocument, options);
        }
export function useGetAllRacesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllRacesQuery, GetAllRacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllRacesQuery, GetAllRacesQueryVariables>(GetAllRacesDocument, options);
        }
export type GetAllRacesQueryHookResult = ReturnType<typeof useGetAllRacesQuery>;
export type GetAllRacesLazyQueryHookResult = ReturnType<typeof useGetAllRacesLazyQuery>;
export type GetAllRacesSuspenseQueryHookResult = ReturnType<typeof useGetAllRacesSuspenseQuery>;
export type GetAllRacesQueryResult = Apollo.QueryResult<GetAllRacesQuery, GetAllRacesQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users(orderBy: "winningAmount", orderDirection: "desc", limit: 1000) {
    items {
      id
      totalBetAmount
      winningAmount
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;