import { defineAction } from 'astro:actions'
import { z } from 'astro:content'
import { Presentation } from '../generated/presentation'

export const server = {
    singletrack: defineAction({
        accept: 'form',
        input: z.object({
            file: z.instanceof(File),
        }),
        handler: async ({ file }) => {
            const input = await file.bytes()

            const song = Presentation.decode(input)
            song.multiTracksLicensing = undefined
            song.music = undefined

            const output = Presentation.encode(song).finish()

            return { output }
        }
    })
}