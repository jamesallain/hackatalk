/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FriendsQueryVariables = {
    first: number;
    after?: string | null;
    searchText?: string | null;
};
export type FriendsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"MainFriend_friends" | "ChannelCreate_friends">;
};
export type FriendsQuery = {
    readonly response: FriendsQueryResponse;
    readonly variables: FriendsQueryVariables;
};



/*
query FriendsQuery(
  $first: Int!
  $after: String
  $searchText: String
) {
  ...MainFriend_friends_2HEEH6
  ...ChannelCreate_friends_2yyznZ
}

fragment ChannelCreate_friends_2yyznZ on Query {
  friends(first: $first, after: $after, searchText: $searchText) {
    edges {
      cursor
      node {
        id
        email
        name
        nickname
        thumbURL
        photoURL
        birthday
        gender
        phone
        statusMessage
        verified
        lastSignedIn
        isOnline
        hasBlocked
        createdAt
        updatedAt
        deletedAt
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment MainFriend_friends_2HEEH6 on Query {
  friends(first: $first, after: $after, searchText: $searchText) {
    edges {
      cursor
      node {
        id
        email
        name
        nickname
        thumbURL
        photoURL
        birthday
        gender
        phone
        statusMessage
        verified
        lastSignedIn
        isOnline
        hasBlocked
        createdAt
        updatedAt
        deletedAt
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "searchText"
},
v3 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v4 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "kind": "Variable",
    "name": "searchText",
    "variableName": "searchText"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FriendsQuery",
    "selections": [
      {
        "args": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "MainFriend_friends"
      },
      {
        "args": (v5/*: any*/),
        "kind": "FragmentSpread",
        "name": "ChannelCreate_friends"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "FriendsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "friends",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "email",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nickname",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "thumbURL",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "photoURL",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "birthday",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "gender",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "phone",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "statusMessage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "verified",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "lastSignedIn",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isOnline",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasBlocked",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updatedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "deletedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "MainFriend_friends",
        "kind": "LinkedHandle",
        "name": "friends"
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "filters": [
          "searchText"
        ],
        "handle": "connection",
        "key": "ChannelCreate_friends",
        "kind": "LinkedHandle",
        "name": "friends"
      }
    ]
  },
  "params": {
    "cacheID": "8d699e5b342242ae65ff45068de5ea81",
    "id": null,
    "metadata": {},
    "name": "FriendsQuery",
    "operationKind": "query",
    "text": "query FriendsQuery(\n  $first: Int!\n  $after: String\n  $searchText: String\n) {\n  ...MainFriend_friends_2HEEH6\n  ...ChannelCreate_friends_2yyznZ\n}\n\nfragment ChannelCreate_friends_2yyznZ on Query {\n  friends(first: $first, after: $after, searchText: $searchText) {\n    edges {\n      cursor\n      node {\n        id\n        email\n        name\n        nickname\n        thumbURL\n        photoURL\n        birthday\n        gender\n        phone\n        statusMessage\n        verified\n        lastSignedIn\n        isOnline\n        hasBlocked\n        createdAt\n        updatedAt\n        deletedAt\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment MainFriend_friends_2HEEH6 on Query {\n  friends(first: $first, after: $after, searchText: $searchText) {\n    edges {\n      cursor\n      node {\n        id\n        email\n        name\n        nickname\n        thumbURL\n        photoURL\n        birthday\n        gender\n        phone\n        statusMessage\n        verified\n        lastSignedIn\n        isOnline\n        hasBlocked\n        createdAt\n        updatedAt\n        deletedAt\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ee98151de7f2ec2d7e653b01daade46d';
export default node;
