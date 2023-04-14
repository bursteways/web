import {StructureBuilder} from 'sanity/desk'
import {BsFillGearFill} from 'react-icons/bs'

export const SiteSettings = (S: StructureBuilder) =>
  S.listItem()
    .title('Site Settings')
    .icon(BsFillGearFill)
    .child(
      S.editor()
        .id('siteSettings')
        .schemaType('siteSettings')
        .documentId('siteSettings')
        .title('Site Settings')
    )
