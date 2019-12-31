/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
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
export const createTalk = `mutation CreateTalk(
  $condition: ModelTalkConditionInput
  $input: CreateTalkInput!
) {
  createTalk(condition: $condition, input: $input) {
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
export const deleteComment = `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
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
export const deleteTalk = `mutation DeleteTalk(
  $condition: ModelTalkConditionInput
  $input: DeleteTalkInput!
) {
  deleteTalk(condition: $condition, input: $input) {
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
export const updateComment = `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
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
export const updateTalk = `mutation UpdateTalk(
  $condition: ModelTalkConditionInput
  $input: UpdateTalkInput!
) {
  updateTalk(condition: $condition, input: $input) {
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
