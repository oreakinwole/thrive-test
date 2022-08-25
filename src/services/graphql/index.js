import { gql } from "@apollo/client";

export const GET_USER_REPOS_AND_ORGS = gql`
  query getUserRepos($login: String!) {
    user(login: $login) {
      repositories(first: 10, isFork: false) {
        nodes {
          name
          url
        }
      }

      organizations(first: 10) {
        nodes {
          name
        }
      }
    }
  }
`;
