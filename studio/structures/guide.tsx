import {StructureBuilder} from 'sanity/desk'
import {BsQuestionCircleFill} from 'react-icons/bs'
import {Guide} from '../markdown/guide'

export const GuideStructure = (S: StructureBuilder) =>
  S.listItem().title('Guide').icon(BsQuestionCircleFill).child(S.component(Guide).id('guide'))
