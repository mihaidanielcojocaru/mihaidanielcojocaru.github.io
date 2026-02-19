import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
    const filePath = path.join(process.cwd(), 'public', 'me.jpg')
    const file = readFileSync(filePath)

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={`data:image/jpeg;base64,${file.toString('base64')}`}
                    alt="Icon"
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
