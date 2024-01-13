import sanityClient from './sanity'
let sanityQuery = (query, params) => sanityClient.fetch(query, params);


export const getRates = () => {
    return sanityQuery(`
    *[_type == 'section']{
        ...,
        content []->{
          ...,
        }
      }
    `)
}