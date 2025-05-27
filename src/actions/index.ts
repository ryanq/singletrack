import { defineAction } from 'astro:actions'
import { z } from 'astro:content'

export const server = {
    singletrack: defineAction({
        accept: 'form',
        input: z.object({
            file: z.instanceof(File),
        }),
        handler: ({ file }) => {
            return { name: file.name }
        }
    })
}