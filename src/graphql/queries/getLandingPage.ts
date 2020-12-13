const GET_LANDIND_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
   }
  }
`

export default GET_LANDIND_PAGE
