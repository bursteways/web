import {StructureBuilder} from 'sanity/desk'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      ...S.documentTypeListItems().filter(
        // Add more to the array if you want to remove schemas from the desk structure.
        (listItem) => !['siteSettings'].includes(listItem.getId() as string)
      ),
    ])
