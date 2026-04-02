// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Relief Operations
export const GET_OPERATIONS = gql`
  query GetOperations($first: Int = 20) {
    nodeOperations(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeOperation {
          body {
            processed
            summary
          }
          disasterType {
            ... on TermInterface {
              id
              name
            }
          }
          operationStatus
          location
          startDate {
            timestamp
          }
          peopleServed
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_OPERATION_BY_PATH = gql`
  query GetOperationByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeOperation {
            id
            title
            path
            body {
              processed
            }
            disasterType {
              ... on TermInterface {
                id
                name
              }
            }
            operationStatus
            location
            startDate {
              timestamp
            }
            peopleServed
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Resources
export const GET_RESOURCES = gql`
  query GetResources($first: Int = 20) {
    nodeResources(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeResource {
          body {
            processed
            summary
          }
          resourceType {
            ... on TermInterface {
              id
              name
            }
          }
          audience
          downloadUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_RESOURCE_BY_PATH = gql`
  query GetResourceByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeResource {
            id
            title
            path
            body {
              processed
            }
            resourceType {
              ... on TermInterface {
                id
                name
              }
            }
            audience
            downloadUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Situation Updates
export const GET_UPDATES = gql`
  query GetUpdates($first: Int = 20) {
    nodeUpdates(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeUpdate {
          body {
            processed
            summary
          }
          operationName
          updateDate {
            timestamp
          }
          urgencyLevel
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_UPDATE_BY_PATH = gql`
  query GetUpdateByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeUpdate {
            id
            title
            path
            body {
              processed
            }
            operationName
            updateDate {
              timestamp
            }
            urgencyLevel
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Team Members
export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 50) {
    nodeTeamMembers(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeTeamMember {
          body {
            processed
          }
          position
          department {
            ... on TermInterface {
              id
              name
            }
          }
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBER_BY_PATH = gql`
  query GetTeamMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTeamMember {
            id
            title
            path
            body {
              processed
            }
            position
            department {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeOperation {
            id
            title
            path
            body {
              processed
            }
            disasterType {
              ... on TermInterface {
                id
                name
              }
            }
            operationStatus
            location
            startDate {
              timestamp
            }
            peopleServed
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeResource {
            id
            title
            path
            body {
              processed
            }
            resourceType {
              ... on TermInterface {
                id
                name
              }
            }
            audience
            downloadUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeUpdate {
            id
            title
            path
            body {
              processed
            }
            operationName
            updateDate {
              timestamp
            }
            urgencyLevel
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeTeamMember {
            id
            title
            path
            body {
              processed
            }
            position
            department {
              ... on TermInterface {
                id
                name
              }
            }
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured operations for homepage (limit to 3)
export const GET_FEATURED_OPERATIONS = gql`
  query GetFeaturedOperations {
    nodeOperations(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeOperation {
          disasterType {
            ... on TermInterface {
              id
              name
            }
          }
          operationStatus
          location
          peopleServed
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Latest updates for homepage
export const GET_LATEST_UPDATES = gql`
  query GetLatestUpdates {
    nodeUpdates(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeUpdate {
          operationName
          updateDate {
            timestamp
          }
          urgencyLevel
        }
      }
    }
  }
`
