export const getDocument = `
query ($id: String!) {
  share(id: $id) {
    identifier
    version {
      document {
        name
        artboards {
          entries {
            name
            isArtboard
            files {
              url
              height
              width
              scale
              thumbnails {
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
`;
