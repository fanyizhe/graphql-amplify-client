/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = `subscription OnCreateComment($createdBy: String!) {
  onCreateComment(createdBy: $createdBy) {
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
export const onCreateTalk = `subscription OnCreateTalk {
  onCreateTalk {
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
export const onDeleteComment = `subscription OnDeleteComment($createdBy: String!) {
  onDeleteComment(createdBy: $createdBy) {
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
export const onDeleteTalk = `subscription OnDeleteTalk {
  onDeleteTalk {
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
export const onUpdateComment = `subscription OnUpdateComment($createdBy: String!) {
  onUpdateComment(createdBy: $createdBy) {
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
export const onUpdateTalk = `subscription OnUpdateTalk {
  onUpdateTalk {
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
