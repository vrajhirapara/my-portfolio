/** Opens Gmail’s “compose” flow in the browser (works when the user is logged into Google). */
export function gmailComposeUrl(to, { subject, body } = {}) {
  const u = new URL('https://mail.google.com/mail/');
  u.searchParams.set('view', 'cm');
  u.searchParams.set('fs', '1');
  u.searchParams.set('to', to);
  if (subject) u.searchParams.set('su', subject);
  if (body) u.searchParams.set('body', body);
  return u.toString();
}
