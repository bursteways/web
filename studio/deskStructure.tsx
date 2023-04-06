import {StructureBuilder} from 'sanity/desk'
import {BsQuestionCircleFill, BsFillGearFill} from 'react-icons/bs'
import {Guide} from './markdown/guide'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Guide - edit markdown in studio/markdown/guide.tsx
      S.listItem().title('Guide').icon(BsQuestionCircleFill).child(S.component(Guide).id('guide')),
      S.divider(),
      // Standard Sections
      ...S.documentTypeListItems().filter(
        // Add more to the array if you want to remove schemas from the desk structure.
        (listItem) => !['siteSettings', 'guide'].includes(listItem.getId() as string)
      ),
      S.divider(),
      // Global Settings
      S.listItem()
        .title('Site Settings')
        .icon(BsFillGearFill)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
    ])
