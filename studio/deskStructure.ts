import {StructureBuilder} from 'sanity/desk'
import {GuideStructure} from './structures/guide'
import {SiteSettings} from './structures/siteSettings'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Guide - edit markdown in studio/markdown/guide.tsx
      GuideStructure(S),

      S.divider(),

      // Standard Sections
      ...S.documentTypeListItems().filter(
        // Add more to the array if you want to remove schemas from the desk structure.
        (listItem) => !['siteSettings', 'guide'].includes(listItem.getId() as string)
      ),

      S.divider(),

      // Global Settings
      SiteSettings(S),
    ])
