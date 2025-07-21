import Link from 'next/link';

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </Link>
  );
}

export function GroupLink({ href, group }: { href: string; group: string }) {
  return (
    <Link
      href={href}
      className='text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 transition-all duration-500'
    >
      {group.replace(/([a-z])([A-Z])/g, '$1 $2')} Problems
    </Link>
  );
}

export function GroupTopicLink({
  href,
  group,
}: {
  href: string;
  group: string;
}) {
  return (
    <Link
      href={href}
      className='text-2xl font-bold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 transition-all duration-500'
    >
      {group.replace(/([a-z])([A-Z])/g, '$1 $2')} Problems
    </Link>
  );
}

export function ProblemLink({ href, slug }: { href: string; slug: string }) {
  return (
    <Link
      href={href}
      className='text-base capitalize text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 transition-all duration-500'
    >
      {slug.replace(/([a-z])([A-Z])/g, '$1 $2')}
    </Link>
  );
}
