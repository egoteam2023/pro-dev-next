import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ego team';
export const size = {
  width: 700,
  height: 300,
};

export const contentType = 'image/png';

export default async function Image() {
  const gilroySemiBold = fetch(
    new URL('../assets/fonts/gilroy-semibold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Ego team
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Gilroy',
          data: await gilroySemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
