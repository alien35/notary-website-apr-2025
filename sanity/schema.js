import {blockContent} from './schemaTypes/blockContent'
import {category} from './schemaTypes/category'
import {post} from './schemaTypes/post'
import {author} from './schemaTypes/author'
import conditionalText from './schemaTypes/conditionalText'
import { table } from './schemaTypes/table'
import {worksOnDevices} from './schemaTypes/worksOnDevices'
import statePicker from './schemaTypes/statePicker'
import {breadcrumbs} from './schemaTypes/breadcrumbs';
import { imageBlock } from './schemaTypes/imageBlock';

export const schema = {
  types: [post, author, category, blockContent, conditionalText, table, worksOnDevices, statePicker, breadcrumbs, imageBlock],
}
