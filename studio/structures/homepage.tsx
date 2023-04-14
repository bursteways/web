import {StructureBuilder} from 'sanity/desk'
import {BsHouseExclamation} from 'react-icons/bs'

export const HomePageStructure = (S: StructureBuilder) =>
  S.listItem()
    .title('Homepage')
    .icon(BsHouseExclamation)
    .child(
      S.editor().id('homepage').schemaType('homepage').documentId('homepage').title('Homepage')
    )
