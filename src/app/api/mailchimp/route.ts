import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.formData();

  const data = new URLSearchParams();
  data.append('EMAIL', body.get('EMAIL') as string);
  data.append('FNAME', body.get('FNAME') as string);
  data.append('u', '2d76a8c5dcf2309bdd35e45d2'); // your Mailchimp `u` param
  data.append('id', '002b4b7ce7'); // your Mailchimp `id` param
  data.append('f_id', '000bc2e1f0');

  try {
    const response = await fetch(
      'https://lisafolawiyo.us13.list-manage.com/subscribe/post-json?u=2d76a8c5dcf2309bdd35e45d2&id=002b4b7ce7&c=?',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      }
    );

    const text = await response.text();

    return NextResponse.json({ message: 'Submitted', data: text });
  } catch  {
        return NextResponse.json(
      { error: 'Submission failed' },
      { status: 500 }
    );
  }
}
