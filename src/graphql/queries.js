/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCoins = `query GetCoins($limit: Int, $start: Int) {
  getCoins(limit: $limit, start: $start) {
    id
    name
    price_usd
    symbol
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    createdBy
    id
    message
    talk {
      clientId
      description
      id
      name
      speakerBio
      speakerName
    }
  }
}
`;
export const getTalk = `query GetTalk($id: ID!) {
  getTalk(id: $id) {
    clientId
    comments {
      nextToken
    }
    description
    id
    name
    speakerBio
    speakerName
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdBy
      id
      message
    }
    nextToken
  }
}
`;
export const listTalks = `query ListTalks(
  $filter: ModelTalkFilterInput
  $limit: Int
  $nextToken: String
) {
  listTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      clientId
      description
      id
      name
      speakerBio
      speakerName
    }
    nextToken
  }
}
`;
