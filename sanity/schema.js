import { defineSchema } from 'sanity'

import { blockContent } from './schemaTypes/blockContent'
import { category } from './schemaTypes/category'
import { post } from './schemaTypes/post'
import { author } from './schemaTypes/author'
import conditionalText from './schemaTypes/conditionalText'
import { table } from './schemaTypes/table'
import { worksOnDevices } from './schemaTypes/worksOnDevices'
import statePicker from './schemaTypes/statePicker'
import { breadcrumbs } from './schemaTypes/breadcrumbs'
// Add others here (e.g., youtube, countryAndRegionPicker, etc.)

export const schema = defineSchema({
  types: [
    post,
    author,
    category,
    blockContent,
    conditionalText,
    table,
    worksOnDevices,
    statePicker,
    breadcrumbs,
    // Add missing custom blocks here
  ],
})
