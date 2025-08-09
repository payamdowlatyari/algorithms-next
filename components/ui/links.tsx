import { Link } from '@heroui/react';

/**
 * A link that opens in a new tab.
 *
 * @param href - The href of the link.
 * @param children - The children of the link.
 * @returns A link that opens in a new tab.
 */
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

/**
 * A link that points to a group of problems.
 *
 * @param href - The href of the link.
 * @param group - The name of the group.
 * @returns A link that points to a group of problems.
 */
export function GroupLink({ href, group }: { href: string; group: string }) {
  return (
    <Link href={href} color='primary' size='sm' isBlock className='capitalize'>
      {group.replace(/([a-z])([A-Z])/g, '$1 $2')}{' '}
      {href.includes('problems') ? 'Problems' : 'Patterns'}
    </Link>
  );
}

/**
 * A link component that points to a specific group of problems.
 *
 * @param href - The URL of the group page.
 * @param group - The name of the group to display.
 * @returns A stylized link element for navigating to the group.
 */
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
      color='foreground'
      size='lg'
      isBlock
      className='capitalize font-bold'
    >
      {group.replace(/([a-z])([A-Z])/g, '$1 $2')}{' '}
      {href.includes('problems') ? 'Problems' : 'Patterns'}
      <span className='ml-2' aria-hidden='true'>
        &rarr;
      </span>
    </Link>
  );
}

/**
 * A link component that points to a specific problem.
 *
 * @param href - The URL of the problem page.
 * @param slug - The slug of the problem to display.
 * @returns A stylized link element for navigating to the problem.
 */
export function ProblemLink({ href, slug }: { href: string; slug: string }) {
  return (
    <Link
      href={href}
      color='foreground'
      size='lg'
      className='capitalize font-semibold'
    >
      {slug.replace(/([a-z])([A-Z])/g, '$1 $2')}
    </Link>
  );
}

/**
 * A link component that points to a specific problem's solution.
 *
 * @param href - The URL of the solution page.
 * @returns A stylized link element for navigating to the solution.
 */
export function SolutionLink({ href }: { href: string }) {
  return (
    <Link href={href} color='primary' size='sm' isBlock>
      View Solution{' '}
      <span className='ml-2' aria-hidden='true'>
        &rarr;
      </span>
    </Link>
  );
}

/**
 * A link component that is meant to be used in a navbar.
 *
 * @param href - The URL of the link.
 * @param children - The text of the link.
 * @returns A stylized link element for use in a navbar.
 */
export function NavbarLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      color='foreground'
      className='w-full p-1 text-lg md:text-xl border-b-2 border-transparent transition ease-in-out delay-100 hover:border-current duration-500'
      href={href}
    >
      {children}
    </Link>
  );
}

/**
 * A link component that is meant to be used in a navbar.
 *
 * @param href - The URL of the link.
 * @param children - The text of the link.
 * @returns A stylized link element for use in a navbar.
 */
export function NavbarGroupLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <Link
      color='foreground'
      className='w-full p-1 text-xl md:text-2xl font-bold border-b-2 border-transparent transition ease-in-out delay-100 hover:border-current duration-500'
      href={href}
    >
      {children}
    </Link>
  );
}
